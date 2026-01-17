import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() 'student' : Array<Istudent>
  @Output() emitEditStd : EventEmitter<Istudent> = new EventEmitter<Istudent>()

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(data : number){
    let getIndex = this.student.findIndex(s => s.id === data)
    this.student.splice(getIndex,1)
  }

  onEdit(std : Istudent){
    this.emitEditStd.emit(std)
  }

}
