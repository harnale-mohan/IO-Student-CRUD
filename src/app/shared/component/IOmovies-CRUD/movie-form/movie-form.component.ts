import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovies } from 'src/app/shared/models/movies';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnChanges {
  @ViewChild('movieForm') movieForm !: NgForm
  @Output() emitAddMovie : EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Output() EmitUpdatedMovie : EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Input() editMovie !: Imovies
  isInEditMode : boolean = false

  constructor(
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editMovie']['currentValue']){
      this.isInEditMode = true
      this.movieForm.form.patchValue(changes['editMovie']['currentValue'])
    }
  }

  onAdd(){
    let addMovie : Imovies = {...this.movieForm.value, id : this._uuid.getUniqueNumber()}
    this.emitAddMovie.emit(addMovie)
    this.movieForm.reset()
  }

  onUpdate(){
    let UPDATED_MOVIE : Imovies = {...this.movieForm.value, id : this.editMovie.id}
    this.EmitUpdatedMovie.emit(UPDATED_MOVIE)
    this.isInEditMode = false
    this.movieForm.reset()

  }

}
