export interface IUserLoginRequest {
  password: string;
  email: string;
}

export interface IUserLoginResponse {
  access_token: string;
}
