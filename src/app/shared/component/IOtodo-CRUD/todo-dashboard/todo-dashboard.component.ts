import { Component, OnInit} from '@angular/core';
import { todosArray } from 'src/app/shared/const/todo';
import { Itodo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  editTodo !: Itodo
 
  constructor(
     private _snackbar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  todoArr : Array<Itodo> = todosArray

  onAdd(todo : Itodo){
    this.todoArr.push(todo)
    this._snackbar.openSnackBar(`New todo With Id ${todo.id} is Created Successfully.`)
  }

  onRmeove(id : number){
    let getIndex = this.todoArr.findIndex(t =>  t.id == id)
    this.todoArr.splice(getIndex,1)
    this._snackbar.openSnackBar(`New todo With Id ${id} is Removed Successfully.`)
  }

  onEdit(todo : Itodo){
    this.editTodo = todo
  }

  onUpdate(todo: Itodo){
    let getIndex = this.todoArr.findIndex(t => t.id == todo.id)
    this.todoArr[getIndex] = todo
     this._snackbar.openSnackBar(`todo With Id ${todo.id} is Updated Successfully.`)
    
  }
  
}
