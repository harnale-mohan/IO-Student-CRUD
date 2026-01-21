import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/shared/models/student';
import { Itodo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos !: Array<Itodo>
  @Output() emitRemoveTodo : EventEmitter<number> = new EventEmitter<number>()
  @Output() emitEditTOdo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
   
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id : number){
    this.emitRemoveTodo.emit(id)

  }

  onEdit(todo : Itodo){
    this.emitEditTOdo.emit(todo)

  }

}
