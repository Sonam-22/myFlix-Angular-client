import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserInfoService {
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): any {
    const fromStorage = localStorage.getItem('user');
    return fromStorage && JSON.parse(fromStorage);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
