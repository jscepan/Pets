import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserWebService } from 'src/app/web-services/user.web-service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'pets-users',
  templateUrl: './users.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  styleUrls: ['./users.component.scss'],
  providers: [UserWebService],
})
export class UsersComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  users: UserModel[] = [];

  columnsToDisplay = [
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
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement?: UserModel | null;

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

  createNew(): void {
    // TODO
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
