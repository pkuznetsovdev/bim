import {inject, Injectable} from '@angular/core';
import {UserSerializer, UserService} from "@app/core/services";
import {ApiService} from "@app/core/api";
import {HttpClient} from "@angular/common/http";
import {API_ENDPOINTS} from "@app/shared/constants/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends ApiService<any> {
  isLogged: boolean = false;
  userService = inject(UserService);
  apiService = inject(ApiService);

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      undefined,
      API_ENDPOINTS.login,
      new UserSerializer());
  }

  signUp() {
    // post(email, pwd) => void
    // case: 200
    ////  userService.read() => Current User
  }

  signIn(params: LocalLoginParams) {
    this.apiService.read(params)
    // get(email, pwd) => void
    // case: 200
    ////  userService.read() => Current User
  }

  signInGoogleGoogle() {
    // redirect to
    // case: 200
    ////  userService.read() => Current User
  }
}

type LocalLoginParams = {
  username: string;
  password: string;
} | {
  email: string;
  password: string;
};
