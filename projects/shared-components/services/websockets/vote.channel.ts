import { Injectable } from '@angular/core';
import * as actionCable from 'actioncable';
import { ActionCableConnectionSocket } from 'projects/shared-services/action-cable-connection.socket';
import { APPLICATION_CABLE_CHANNELS } from 'projects/shared-services/application-cable-channels.constants';
import { LibAuthwatchService } from 'projects/shared-services/lib-authwatch.service';
import { PioneerAnalyticsService } from 'projects/shared-services/pioneer-analytics.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoteChannel {
  ACTIONS = {
    SET_PERMISSIONS: 'set_permissions',
    TOGGLE_VOTE: 'toggle_vote',
    ERROR: 'error',
    BLOCKED: 'blocked',
  };

  actionCable = actionCable;
  private cableConnection;

  private subscriptions = {};

  // all the communications received will be observables
  private channelsList: BehaviorSubject<any> = new BehaviorSubject(new Set());
  public channelsList$ = this.channelsList.asObservable();

  private channelData = {};
  public channelData$ = {};

  constructor(
    private actionCableConnection: ActionCableConnectionSocket,
    private authWatchService: LibAuthwatchService,
    private pioneerAnalyticsService: PioneerAnalyticsService,
  ) {
    this.actionCableConnection.acSocket$.subscribe((connection) => {
      this.cableConnection = connection;
    });
  }

  subscribe(votableType, votableId, uuid) {
    if (this.cableConnection) {
      this.channelData[`${votableId}_${votableType}_${uuid}`] = new BehaviorSubject(null);
      this.channelData$[`${votableId}_${votableType}_${uuid}`] =
        this.channelData[`${votableId}_${votableType}_${uuid}`].asObservable();
      this.channelsList.next(this.channelsList.getValue().add(`${votableId}_${votableType}_${uuid}`));

      this.subscriptions[`${votableId}_${votableType}_${uuid}`] = this.cableConnection.subscriptions.create(
        {
          channel: APPLICATION_CABLE_CHANNELS.VOTE_CHANNEL,
          votable_type: votableType,
          votable_id: votableId,
          app_token: this.authWatchService.getAppToken(),
        },
        {
          received: (data) => {
            this.channelData[`${votableId}_${votableType}_${uuid}`].next(data);
          },
        },
      );
    }

    return this.subscriptions[`${votableId}_${votableType}_${uuid}`];
  }

  sendData(votableType, votableId, uuid, action, data) {
    this.subscriptions[`${votableId}_${votableType}_${uuid}`].send({
      perform: action,
      data,
    });
    this.pioneerAnalyticsService.trackAction();
  }

  unsubscribe(votableType, votableId, uuid) {
    if (this.subscriptions[`${votableId}_${votableType}_${uuid}`]) {
      this.subscriptions[`${votableId}_${votableType}_${uuid}`].unsubscribe();
    }
  }
}
