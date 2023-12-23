import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;


  login(username: string, password: string): boolean {
    // Replace this with real authentication logic
    this.isAuthenticated = username === 'user' && password === 'password';
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}