import { Component, OnInit } from '@angular/core';
import { movieArray } from 'src/app/shared/const/movies';
import { Imovies } from 'src/app/shared/models/movies';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
  editMovie !: Imovies

  constructor(
    private _snackbar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  movieArr : Array<Imovies> = movieArray

  onMovieAdd(movie : Imovies){
    this.movieArr.push(movie)
    this._snackbar.openSnackBar(`The new movie with ${movie.id} is Added Successfully.`)
  }

  onRemove(id : number){
    let getIndex = this.movieArr.findIndex(m => m.id == id);
    this.movieArr.splice(getIndex,1)
    this._snackbar.openSnackBar(`Movie with ${id} is Removed Successfully.`)
  }

  onEdit(movie : Imovies){
    this.editMovie = movie;
  }

  onUpdate(movie : Imovies){
    let getIndex  = this.movieArr.findIndex(m => m.id == movie.id)
    this.movieArr[getIndex] = movie
    this._snackbar.openSnackBar(`Movie with ${movie.id} is Updated Successfully.`)
  }

}
