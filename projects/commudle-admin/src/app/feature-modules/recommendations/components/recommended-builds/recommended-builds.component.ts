import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'projects/commudle-admin/src/app/feature-modules/recommendations/services/recommendation.service';
import { ICommunityBuild } from 'projects/shared-models/community-build.model';
import { LibAuthwatchService } from 'projects/shared-services/lib-authwatch.service';

@Component({
  selector: 'app-recommended-builds',
  templateUrl: './recommended-builds.component.html',
  styleUrls: ['./recommended-builds.component.scss'],
})
export class RecommendedBuildsComponent implements OnInit {
  recommendedCommunityBuilds: ICommunityBuild[] = [];

  constructor(private recommendationService: RecommendationService, private libAuthwatchService: LibAuthwatchService) {}

  ngOnInit(): void {
    this.libAuthwatchService.currentUser$.subscribe((user) => {
      if (user) {
        this.getRecommendedCommunityBuilds();
      }
    });
  }

  getRecommendedCommunityBuilds(): void {
    this.recommendationService
      .getRecommendedCommunityBuilds()
      .subscribe((recommendedCommunityBuilds: ICommunityBuild[]) => {
        this.recommendedCommunityBuilds = recommendedCommunityBuilds;
      });
  }
}
