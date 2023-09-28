import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UserModel } from '../../models/user.model';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { SubscriptionManager } from '../../services/subscription.manager';
import { PetsMenuItemI } from '../pets-menu/pets-menu-item.interface';

@Component({
  selector: 'pets-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  providers: [LocalStorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();
  user: UserModel | null = null;
  userMenuAction?: PetsMenuItemI;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private authStoreService: AuthStoreService
  ) {}

  ngOnInit(): void {
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
              displayName: 'Login',
            },
            {
              key: 'register',
              displayName: 'Register',
            },
          ],
        };
      } else {
        this.userMenuAction = {
          key: 'userUnfo',
          avatarUrl: this.user.avatarUrl,
          icon: 'user',
          displayName: 'user',
          subMenuItems: [
            {
              key: 'login',
              displayName: 'Login',
            },
            {
              key: 'register',
              displayName: 'Register',
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
    // this.authStoreService.canceledURL = null;
    // this.authStoreService.user = null;
    // this.authStoreService.canceledURL = null;
    this.localStorageService.remove('jwt');
  }

  userMenuClick(item: PetsMenuItemI): void {
    switch (item.key) {
      case 'create':
        this.router.navigate(['auth', 'login']);
        break;
      case 'register':
        this.router.navigate(['auth', 'register']);
        break;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
