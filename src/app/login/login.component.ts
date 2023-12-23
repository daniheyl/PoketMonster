import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { CommonModule } from '@angular/common'; // Add this line

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = ''; 

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/']); // Navigate to home page
    } else {
      this.errorMessage = 'Invalid username or password'; // Set error message
    }
  }
}