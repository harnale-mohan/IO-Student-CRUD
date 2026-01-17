import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { stdArr } from '../const/student';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  editStudent !: Istudent

  constructor() { }

  ngOnInit(): void {
  }

  

  studentArr : Array<Istudent> = stdArr

  addNewStd(std : Istudent){
    this.studentArr.push(std)
  }

  editStd(std :Istudent){
    this.editStudent = std
  }

  updateStd(std : Istudent){
    let getIndex = this.studentArr.findIndex(s => s.id == std.id)
    this.studentArr[getIndex] = std;
    
  }

}
