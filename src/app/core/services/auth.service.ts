import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private localStorageTokenKey = 'a2ee64606dab57d63b11be0e96f0d38b77c0537e41307083';

  /**
   * Stores the trainer token in persistent storage
   */
  login(token: string) {
    localStorage.setItem(this.localStorageTokenKey, token);
  }

  /**
   * Remove the trainer token from persistent storage
   */
  logout() {
    localStorage.removeItem(this.localStorageTokenKey);
  }

  /**
   * Retrieves the trainer token from persistent storage
   */
  getToken() {
    return localStorage.getItem(this.localStorageTokenKey);
  }
}
