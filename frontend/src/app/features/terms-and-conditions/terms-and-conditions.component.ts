import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
  providers: [PetsSweetAlertService],
})
export class TermsAndConditionsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  version: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.version = this.route.snapshot.paramMap.get('version');
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
