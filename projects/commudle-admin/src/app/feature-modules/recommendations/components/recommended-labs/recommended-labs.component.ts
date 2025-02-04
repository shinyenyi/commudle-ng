import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'projects/commudle-admin/src/app/feature-modules/recommendations/services/recommendation.service';
import { ILab } from 'projects/shared-models/lab.model';
import { LibAuthwatchService } from 'projects/shared-services/lib-authwatch.service';

@Component({
  selector: 'app-recommended-labs',
  templateUrl: './recommended-labs.component.html',
  styleUrls: ['./recommended-labs.component.scss'],
})
export class RecommendedLabsComponent implements OnInit {
  recommendedLabs: ILab[] = [];

  constructor(private recommendationService: RecommendationService, private libAuthwatchService: LibAuthwatchService) {}

  ngOnInit(): void {
    this.libAuthwatchService.currentUser$.subscribe((user) => {
      if (user) {
        this.getRecommendedLabs();
      }
    });
  }

  getRecommendedLabs() {
    this.recommendationService.getRecommendedLabs().subscribe((labs: ILab[]) => {
      this.recommendedLabs = labs;
    });
  }
}
