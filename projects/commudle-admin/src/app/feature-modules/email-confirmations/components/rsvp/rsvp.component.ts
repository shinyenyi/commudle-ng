import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFormEntityResponseGroupsService } from 'projects/commudle-admin/src/app/services/data-form-entity-response-groups.service';
import { ICommunity } from 'projects/shared-models/community.model';
import { IDataFormEntityResponseGroup } from 'projects/shared-models/data_form_entity_response_group.model';
import { ERegistrationStatuses } from 'projects/shared-models/enums/registration_statuses.enum';
import { IEvent } from 'projects/shared-models/event.model';
import { SeoService } from 'projects/shared-services/seo.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RsvpComponent implements OnInit, OnDestroy {
  token: string;
  rsvpStatus: number;
  event: IEvent;
  community: ICommunity;
  dferg: IDataFormEntityResponseGroup;
  ERegistrationStatuses = ERegistrationStatuses;

  constructor(
    private dataFormEntityResponseGroupsService: DataFormEntityResponseGroupsService,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
  ) {}

  ngOnInit() {
    this.seoService.setTitle('RSVP');
    this.seoService.noIndex(true);

    this.activatedRoute.queryParams.subscribe((data) => {
      this.token = data['token'];
      this.rsvpStatus = data['rsvp_status'];
      this.updateRSVPStatus();
    });
  }

  ngOnDestroy() {
    this.seoService.noIndex(false);
  }

  updateRSVPStatus() {
    this.dataFormEntityResponseGroupsService.updateRSVPStatus(this.token, this.rsvpStatus).subscribe((data) => {
      this.event = data.event;
      this.community = data.community;
      this.dferg = data.data_form_entity_response_group;
    });
  }
}
