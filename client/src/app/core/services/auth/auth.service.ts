import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;

  constructor() { }

  signIn(params: LocalLoginParams) {

  }

  loginViaGoogle() {

  }
}

type LocalLoginParams = {
  username: string;
  password: string;
} | {
  email: string;
  password: string;
};
