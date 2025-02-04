import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from 'projects/commudle-admin/src/app/services/home.service';
import { IUser } from 'projects/shared-models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage-experts',
  templateUrl: './homepage-experts.component.html',
  styleUrls: ['./homepage-experts.component.scss'],
})
export class HomepageExpertsComponent implements OnInit, OnDestroy {
  experts: IUser[] = [];

  subscription: Subscription;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getExperts();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getExperts() {
    this.subscription = this.homeService.experts().subscribe((value) => (this.experts = value));
  }
}
