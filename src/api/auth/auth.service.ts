import { httpClient } from '@/api';

import {
  IUserLoginResponse,
  IUserLoginRequest,
} from './models/user-login.model';
import { IUserDetailsResponse } from './models/user-details.model';

export async function login(
  request: IUserLoginRequest,
): Promise<IUserLoginResponse> {
  return httpClient.post('auth/login', { json: request }).json();
}

export async function currentUserDetails(): Promise<IUserDetailsResponse> {
  return httpClient.get('auth/me').json();
}
