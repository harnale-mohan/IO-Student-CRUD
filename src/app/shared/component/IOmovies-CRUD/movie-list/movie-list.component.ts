import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Imovies } from 'src/app/shared/models/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movieArr !: Array<Imovies>
  @Output() emitRemoveMovie  : EventEmitter<number> = new EventEmitter<number>()
  @Output() emitEditMovie : EventEmitter<Imovies> = new EventEmitter<Imovies>()

  constructor(
    private _snackbar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onRemove(id : number){
    this.emitRemoveMovie.emit(id)
  }

  onEdit(movie : Imovies){
    this.emitEditMovie.emit(movie)
  }

}
