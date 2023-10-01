import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  async addFilm(filmForm: FormGroup): Promise<Object> {
    var formData: any = new FormData();
    formData.append('name', filmForm.get('name')!.value);
    formData.append('description', filmForm.get('description')!.value);
    formData.append('release_date', filmForm.get('rdate')!.value);
    formData.append('ticket_price', filmForm.get('tprice')!.value);
    formData.append('country', filmForm.get('country')!.value);
    formData.append('genre', filmForm.get('genre')!.value);
    formData.append('photo', filmForm.get('photo')!.value);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    let r: any;
    let res = await this.http
      .post('http://localhost/api/film', formData, {
        withCredentials: true,
        headers: headers,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          r = response;
          return 200;
        },
        error: (error) => {
          r = error;
          console.log(error.message);
          return 403;
        },
      });
    return r;
  }

  async getFilms(): Promise<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return await this.http
      .get('http://localhost/api/film', {
        withCredentials: true,
        headers: headers,
      })
      .toPromise();
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //       return 200;
    //     },
    //     error: (error) => {
    //       console.log(error.message);
    //       return 403;
    //     },
    //   });
    // return res;
  }
}
