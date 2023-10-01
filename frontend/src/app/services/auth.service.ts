import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async login(loginForm: FormGroup): Promise<Subscription> {
    var formData: any = new FormData();
    formData.append('email', loginForm.get('email')!.value);
    formData.append('password', loginForm.get('password')!.value);

    let res = await this.http
      .post('http://localhost/api/login', formData, { withCredentials: true })
      .subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('token', Object.values(response).toString());

          return 200;
        },
        error: (error) => {
          console.log(error.message);
          return 403;
        },
      });
    return res;

    // let res = await this.http
    //   .post('http://localhost/api/login', formData, { withCredentials: true })
    //   .toPromise()
    //   .then((response) => {
    //     console.log(response);
    //     localStorage.setItem('isLoggedIn', 'yourein');
    //     return 200;
    //   });
    // return res;
  }
}
