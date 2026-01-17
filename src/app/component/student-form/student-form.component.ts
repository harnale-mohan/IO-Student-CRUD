import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Istudent } from '../models/student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
  @ViewChild('stdForm') stdForm !: NgForm
  @Output() emitNewStd : EventEmitter<Istudent> = new EventEmitter<Istudent>()
  @Input() editStd !: Istudent
  @Output() emitUpdatedStd : EventEmitter<Istudent> = new EventEmitter<Istudent>()
  isInEditMode : boolean = false


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editStd']['currentValue']){
      this.isInEditMode = true;
      this.stdForm.form.patchValue(changes['editStd']['currentValue'] )
    }
  
  }


  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(){
    let stdObj : Istudent = {...this.stdForm.value, id : Date.now()}
    this.emitNewStd.emit(stdObj)
    this.stdForm.reset()
  }

  onUpdate(){
    let UPDATED_OBJ : Istudent = {...this.stdForm.value, id : this.editStd.id}
    this.emitUpdatedStd.emit(UPDATED_OBJ)
    this.isInEditMode = false;
    this.stdForm.reset()

  }



}
