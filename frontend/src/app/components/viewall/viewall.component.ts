import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css'],
})
export class ViewallComponent {
  films: any;
  constructor(private filmService: FilmService) {}
  ngOnInit() {
    this.getFilms();
  }
  async getFilms() {
    let res = await this.filmService.getFilms();
    console.log(res);
    this.films = res.films;
  }
}
