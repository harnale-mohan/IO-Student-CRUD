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
export class TodoFormComponent implements OnInit, OnChanges{
  @ViewChild('todoForm') todoForm !: NgForm
  @Output() emitAddTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() editTodo !: Itodo
  @Output() emitUpdatedTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  isInEditMode : boolean = false
  
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

  onAdd(){
    let addTodo : Itodo = {...this.todoForm.value, id : this._uuid.getUniqueNumber()}
    this.emitAddTodo.emit(addTodo)
    this.todoForm.reset()
  }

  onUpdate(){
    let UPDATED_TODO = {...this.todoForm.value, id : this.editTodo.id}
    this.emitUpdatedTodo.emit(UPDATED_TODO)
     this.isInEditMode = false;
     this.todoForm.reset()

  }


}
