import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  private readonly _user = new BehaviorSubject<UserModel | null>(null);
  readonly user$ = this._user.asObservable();

  private readonly _language = new BehaviorSubject<string | null>(null);
  readonly language$ = this._language.asObservable();

  constructor() {}

  // user
  get user(): UserModel | null {
    return this._user.getValue();
  }

  set user(data: UserModel | null) {
    this._user.next(data);
  }

  get language(): string | null {
    return this._language.getValue();
  }

  set language(language: string | null) {
    this._language.next(language);
  }
}
