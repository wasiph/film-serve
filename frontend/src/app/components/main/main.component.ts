import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  Countries: any = ['UAE', 'USA', 'UK', 'Iran', 'India'];
  Genres: any = ['Action', 'Comedy', 'Documentary', 'Horror', 'Thriller'];
  addForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    rdate: new FormControl(''),
    tprice: new FormControl(''),
    country: new FormControl(''),
    genre: new FormControl(''),
    photo: new FormControl('ad'),
  });
  constructor(
    private filmService: FilmService,
    private _snackBar: MatSnackBar
  ) {}
  async submitForm() {
    await this.filmService.addFilm(this.addForm).then((res) => {
      // if (res) {
      console.log(res);
      this._snackBar.open('Film Added !');
      // }
    });
  }
}
