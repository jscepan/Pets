import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserWebService } from 'src/app/web-services/user.web-service';

@Component({
  selector: 'pets-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserWebService],
})
export class UsersComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = [
    'username',
    'email',
    'displayName',
    'city',
    'phoneNumber',
    'fullName',
    'language',
    'inactive',
    'edit',
    'deactivate',
  ];
  users: UserModel[] = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: UserWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.webService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editItem(element: UserModel): void {
    // TODO
  }

  deactivateItem(element: UserModel): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
