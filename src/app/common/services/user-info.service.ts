import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserInfoService {
  /**
   * Sets the user object in local storage
   * @param user the user object
   */
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Set user token in local storage
   * @param token logged in user token
   */
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Gets user token from local storage
   * @returns user token or null
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Gets user object from local storage
   * @returns user object from local storage
   */
  getUser(): any {
    const fromStorage = localStorage.getItem('user');
    return fromStorage && JSON.parse(fromStorage);
  }

  /**
   * Clears user related objects from local storage
   */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
