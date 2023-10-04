export class AuthModel {
  id?: number;
  accessToken: string = '';
  jwt: string = '';
  roles: string[] = [];
  tokenType: string = '';
  username: string = '';
}
