import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Itodo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @ViewChild('todoForm') todoForm !: NgForm
  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitUpdatedTOdo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() editTodo !: Itodo
  isInEditMode : boolean = false;

  constructor(
    private _snackbar : SnackBarService,
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editTodo']['currentValue']){
      this.isInEditMode = true
      this.todoForm.form.patchValue(changes['editTodo']['currentValue'])
    }
  }
      
      

  onSubmit(){
    let addTodo : Itodo = {...this.todoForm.value, id : this._uuid.getUniqueNumber()}
    this.emitNewTodo.emit(addTodo)
    this.todoForm.reset()

  }

  onUpdate(){
    let UPDATED_TODO : Itodo = {...this.todoForm.value, id : this.editTodo.id};
    this.emitUpdatedTOdo.emit(UPDATED_TODO)
    this.isInEditMode = false;
    this.todoForm.reset()
     this._snackbar.openSnackBar(`Todo With id ${this.editTodo.id} is Updated Successfully`)
  }

}
