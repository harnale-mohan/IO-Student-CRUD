import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  @Input() stdArr !: Array<Istudent>
  @Output() emitRemoveStd : EventEmitter<number> = new EventEmitter<number>()
  @Output() emitEditStd : EventEmitter<Istudent>  = new EventEmitter<Istudent>()

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(std : number){
    this.emitRemoveStd.emit(std)
  }

  onEdit(std : Istudent){
    this.emitEditStd.emit(std)
  }

}
