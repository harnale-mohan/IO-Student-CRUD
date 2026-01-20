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
  editStd !: Istudent

  constructor(
     private _snackbar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  stdArr : Array<Istudent> = studentArr

  onAdd(std  :Istudent){
    this.stdArr.push(std)
    this._snackbar.openSnackBar(`New student with id ${std.id} is created Successfully.`)
  }

  onRemove(std: number){
    let getIndex = this.stdArr.findIndex(t => t.id == std);
    this.stdArr.splice(getIndex,1)
    this._snackbar.openSnackBar(`student with id ${std} is Removes Successfully.`)
  }

  onEdit(std : Istudent){
    this.editStd = std;

  }

  onUpdate(std : Istudent){
    let getIndex = this.stdArr.findIndex(s => s.id == std.id);
    this.stdArr[getIndex] = std
    this._snackbar.openSnackBar(`student with id ${std.id} is Updated Successfully.`)
  }

}
