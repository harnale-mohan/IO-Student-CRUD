import { Component, OnInit } from '@angular/core';
import { studentArr } from 'src/app/shared/const/student';
import { Istudent } from 'src/app/shared/models/student';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  editStudent !: Istudent
 
  constructor(
     private _snackbar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  stdArr : Array<Istudent> = studentArr

  onAdd(std : Istudent){
    this.stdArr.push(std)
    this._snackbar.openSnackBar(`New Student with id${std.id} is Created Successfully.`)
  }

  onRemove(id : number){
    let getIndex = this.stdArr.findIndex(s => s.id == id)
    this.stdArr.splice(getIndex,1)
    this._snackbar.openSnackBar(`Student with id${id} is Removed Successfully.`)
  }

  onEdit(std : Istudent){
    this.editStudent = std
  }

  onUpdate(std : Istudent){
    let getIndex = this.stdArr.findIndex(s => s.id == std.id)
    this.stdArr[getIndex]= std
    this._snackbar.openSnackBar(`Student with id${std.id} is Updated Successfully.`)
  }

  
}
