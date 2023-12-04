import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UserModel } from '../../models/user.model';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { SubscriptionManager } from '../../services/subscription.manager';
import { PetsMenuItemI } from '../pets-menu/pets-menu-item.interface';
import { getUserInitials } from '../../utils';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pets-main-menu',
  templateUrl: './pets-main-menu.component.html',
  styleUrls: ['./pets-main-menu.component.scss'],
  providers: [LocalStorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsMainMenuComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  companyLogo: string = 'paw-icon';
  user: UserModel | null = null;
  userMenuAction?: PetsMenuItemI;
  searchBarKeyword: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService,
    private translateServis: TranslateService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.route.queryParamMap.subscribe((params) => {
      this.searchBarKeyword = params.get('quickSearch') || '';
    });

    this.subs.sink = this.authStoreService.user$.subscribe((user) => {
      this.user = user;
      if (!this.user) {
        this.userMenuAction = {
          key: 'userUnfo',
          icon: 'user',
          displayName: 'user',
          subMenuItems: [
            {
              key: 'login',
              displayName: 'login',
            },
            {
              key: 'register',
              displayName: 'register',
            },
          ],
        };
      } else {
        this.userMenuAction = {
          key: 'userUnfo',
          avatarUrl: this.user?.avatar?.name || '',
          icon: 'user',
          initials: user?.fullName
            ? getUserInitials(user?.fullName)
            : undefined,
          displayName: 'user',
          subMenuItems: [
            {
              key: 'myAds',
              displayName: this.translateServis.instant('myAds'),
              icon: 'book',
              showIconAndText: true,
            },
            {
              key: 'messages',
              displayName: this.translateServis.instant('messages'),
              icon: 'message-square',
              showIconAndText: true,
            },
            {
              key: 'favourites',
              displayName: this.translateServis.instant('favourites'),
              icon: 'star',
              showIconAndText: true,
            },
            {
              key: 'settings',
              displayName: this.translateServis.instant('settings'),
              icon: 'settings',
              showIconAndText: true,
            },
            {
              key: 'logout',
              displayName: this.translateServis.instant('logout'),
              icon: 'log-out',
              showIconAndText: true,
            },
          ],
        };
      }
    });
  }

  createAd(): void {
    this.router.navigate(['/ad-create-edit']);
  }

  logout(): void {
    this.router.navigate(['/']);
    this.authStoreService.canceledURL = null;
    this.authStoreService.user = null;
    this.authStoreService.canceledURL = null;
    this.localStorageService.remove('PetsJwt');
  }

  userMenuClick(item: PetsMenuItemI): void {
    switch (item.key) {
      case 'login':
        this.router.navigate(['auth', 'login']);
        break;
      case 'register':
        this.router.navigate(['auth', 'register']);
        break;

      case 'myAds':
        this.router.navigate(['user', 'my-ads']);
        break;
      case 'messages':
        this.router.navigate(['user', 'messages']);
        break;
      case 'favourites':
        this.router.navigate(['user', 'favorites']);
        break;
      case 'settings':
        this.router.navigate(['user', 'settings']);
        break;
      case 'logout':
        this.logout();
        break;
    }
  }

  redirectToHome(): void {
    this.router.navigate(['/']);
  }

  searchInputEvent(search: string): void {
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['quickSearch'] = search;
    this.router.navigate(['/ads'], { queryParams });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
