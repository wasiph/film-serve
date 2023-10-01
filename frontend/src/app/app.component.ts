import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FilmServe';
  isLoggedIn = 'none';
  ngOnInit(): void {
    this.isLoggedIn = this.getLoginKey();
  }
  constructor(private router: Router, private cs: CookieService) {}
  private getLoginKey(): string {
    return localStorage.getItem('isLoggedIn') || 'none';
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.setItem('isLoggedIn', 'none');
    localStorage.removeItem('token');
  }
}
