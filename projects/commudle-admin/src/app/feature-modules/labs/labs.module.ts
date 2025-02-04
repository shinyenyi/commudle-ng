import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbTooltipModule,
  NbUserModule,
} from '@nebular/theme';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LinkyModule } from 'ngx-linky';
import { RecommendationsModule } from 'projects/commudle-admin/src/app/feature-modules/recommendations/recommendations.module';
import { SharedComponentsModule } from 'projects/shared-components/shared-components.module';
import { SharedDirectivesModule } from 'projects/shared-directives/shared-directives.module';
import { InfiniteScrollModule } from 'projects/shared-modules/infinite-scroll/infinite-scroll.module';
import { MentionModule } from 'projects/shared-modules/mention/mention.module';
import { MiniUserProfileModule } from 'projects/shared-modules/mini-user-profile/mini-user-profile.module';
import { SharedPipesModule } from 'projects/shared-pipes/pipes.module';
import { ReusableComponentsModule } from '../reusable-components/reusable-components.module';
import { CreateLabComponent } from './components/create-lab/create-lab.component';
import { EditLabComponent } from './components/edit-lab/edit-lab.component';
import { LabDetailsComponent } from './components/lab/lab-details/lab-details.component';
import { LabDiscussionMessageComponent } from './components/lab/lab-discussion/lab-discussion-message/lab-discussion-message.component';
import { LabDiscussionComponent } from './components/lab/lab-discussion/lab-discussion.component';
import { LabStepComponent } from './components/lab/lab-step/lab-step.component';
import { LabComponent } from './components/lab/lab.component';
import { LabsCardComponent } from './components/labs/labs-card/labs-card.component';
import { LabsHeaderComponent } from './components/labs/labs-header/labs-header.component';
import { LabsSearchComponent } from './components/labs/labs-search/labs-search.component';
import { LabsComponent } from './components/labs/labs.component';
import { LabListItemComponent } from './components/my-labs/lab-list-item/lab-list-item.component';
import { MyLabsComponent } from './components/my-labs/my-labs.component';
import { LabsRoutingModule } from './labs-routing.module';

@NgModule({
  declarations: [
    LabsComponent,
    CreateLabComponent,
    EditLabComponent,
    MyLabsComponent,
    LabComponent,
    LabStepComponent,
    LabListItemComponent,
    LabDiscussionComponent,
    LabDiscussionMessageComponent,
    LabDetailsComponent,
    LabsHeaderComponent,
    LabsSearchComponent,
    LabsCardComponent,
  ],
  imports: [
    CommonModule,
    LabsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    FontAwesomeModule,
    SharedComponentsModule,
    ReusableComponentsModule,
    YouTubePlayerModule,
    SharedPipesModule,
    NbSpinnerModule,
    LinkyModule,
    SharedDirectivesModule,
    MentionModule,
    InfiniteScrollModule,
    RecommendationsModule,
    MiniUserProfileModule,

    // Nebular
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbListModule,
    NbFormFieldModule,
    NbTooltipModule,
    NbDialogModule.forChild(),
    NbUserModule,
    NbSidebarModule.forRoot(),
    NbContextMenuModule,
  ],
})
export class LabsModule {}
