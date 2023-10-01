import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {}
  async submitForm() {
    let res = await this.auth.login(this.loginForm);
    console.log(res);
    // if (res === 200) {
    localStorage.setItem('isLoggedIn', 'yourein');
    this.router.navigate(['/home']);
    // }
  }
}
