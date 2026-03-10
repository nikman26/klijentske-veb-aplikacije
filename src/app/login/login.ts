import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatIconModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = 'user@example.com'
  password: string = 'user123'
  router: any;

  
  constructor(router: Router){
    if (AuthService.getActiveUser()){
      router.navigate(['/'])
      return
    }
  }


  doLogin() {
    if (AuthService.login(this.email, this.password)) {
      this.router.navigate(['/'])
    }

    alert('Invalid email or password!')
  }
}
