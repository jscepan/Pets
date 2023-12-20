import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthWebService } from '@layouts/auth-layout/auth.web-service';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { UserWebService } from 'src/app/web-services/user.web-service';

@Component({
  selector: 'pets-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  providers: [AuthWebService],
})
export class UserSettingsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  userSettingsForm!: FormGroup;

  constructor(
    private router: Router,
    private authStoreService: AuthStoreService,
    private authWebService: AuthWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.authStoreService.user$.subscribe((user) => {
      if (user) {
        this.userSettingsForm = new FormGroup({
          displayName: new FormControl(user?.displayName, []),
          email: new FormControl(user?.email, []),
          city: new FormControl(user?.city, []),
          phoneNumber: new FormControl(user?.phoneNumber, []),
          fullName: new FormControl(user?.fullName, []),
          language: new FormControl(user?.language, []),
        });
      } else {
        this.router.navigate(['ads']);
      }
    });
  }

  updateUser(): void {
    if (this.authStoreService.user?.oid) {
      this.subs.sink = this.authWebService
        .updateCurrentUser(
          this.authStoreService.user?.oid,
          this.userSettingsForm.value
        )
        .subscribe((newUser) => {
          this.authStoreService.user = newUser;
        });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
