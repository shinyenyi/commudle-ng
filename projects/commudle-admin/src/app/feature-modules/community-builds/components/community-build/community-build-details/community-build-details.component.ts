import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NbWindowService } from '@nebular/theme';
import * as moment from 'moment';
import { DiscussionsService } from 'projects/commudle-admin/src/app/services/discussions.service';
import { CBuildTypeDisplay, EBuildType, ICommunityBuild } from 'projects/shared-models/community-build.model';
import { IDiscussion } from 'projects/shared-models/discussion.model';
import { IUserRolesUser } from 'projects/shared-models/user_roles_user.model';
import { environment } from 'projects/commudle-admin/src/environments/environment';

@Component({
  selector: 'app-community-build-details',
  templateUrl: './community-build-details.component.html',
  styleUrls: ['./community-build-details.component.scss'],
})
export class CommunityBuildDetailsComponent implements OnInit {
  @Input() cBuild: ICommunityBuild;

  discussionChat: IDiscussion;
  teammates: IUserRolesUser[] = [];
  EBuildType = EBuildType;
  CBuildTypeDisplay = CBuildTypeDisplay;
  hasIframe = false;
  embedCode: any;
  currImage = null;

  moment = moment;

  environment = environment;

  @ViewChild('imageTemplate') imageTemplate: TemplateRef<any>;

  constructor(
    private windowService: NbWindowService,
    private discussionsService: DiscussionsService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.getDiscussionChat();
    this.teammates = this.cBuild.user_roles_users;
    if (this.cBuild.link.startsWith('<iframe') && this.cBuild.link.endsWith('</iframe>')) {
      this.embedCode = this.sanitizer.bypassSecurityTrustHtml(this.cBuild.link);
    } else {
      this.embedCode = null;
    }
  }

  openImage(title, image) {
    this.currImage = image;
    this.windowService.open(this.imageTemplate, {
      title,
    });
  }

  imageNav(direction) {
    const lenImages = this.cBuild.images.length;
    const currentIndex = this.cBuild.images.indexOf(this.currImage);
    const nextIndex = (currentIndex + direction + lenImages) % lenImages;
    this.currImage = this.cBuild.images[nextIndex];
  }

  getDiscussionChat() {
    this.discussionsService
      .pGetOrCreateForCommunityBuildChat(this.cBuild.id)
      .subscribe((data) => (this.discussionChat = data));
  }
}
