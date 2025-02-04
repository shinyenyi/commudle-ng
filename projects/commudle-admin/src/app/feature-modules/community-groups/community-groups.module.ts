import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbIconModule, NbTabsetModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityGroupsRoutingModule } from './community-groups-routing.module';
import { CommunityGroupFormComponent } from './components/community-group-form/community-group-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedComponentsModule } from 'projects/shared-components/shared-components.module';
import { SharedDirectivesModule } from 'projects/shared-directives/shared-directives.module';

@NgModule({
  declarations: [CommunityGroupFormComponent, DashboardComponent],
  imports: [
    CommonModule,
    CommunityGroupsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    SharedComponentsModule,
    SharedDirectivesModule,

    // Nebular
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
  ],
})
export class CommunityGroupsModule {}
