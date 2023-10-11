export class AuthModel {
  id?: number;
  accessToken: string = '';
  roles: string[] = [];
  tokenType: string = '';
  username: string = '';
}
