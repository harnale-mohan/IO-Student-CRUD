import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from 'src/app/shared/models/student';
import { Itodo } from 'src/app/shared/models/todo';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
  @ViewChild('stdForm') stdForm !: NgForm;
  @Output() emitNewStd : EventEmitter<Istudent> = new EventEmitter<Istudent>()
  @Output() emitUpdatedStd : EventEmitter<Istudent> = new EventEmitter<Istudent>()
  @Input() editStd !: Istudent;
  isInEditMode : boolean = false

  constructor(
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['editStd']['currentValue']){
        this.isInEditMode = true
        this.stdForm.form.patchValue(changes['editStd']['currentValue'])
      }
    }

  onAdd(){
    let addTodo : Istudent = {...this.stdForm.value, id : this._uuid.getUniqueNumber()}
    this.emitNewStd.emit(addTodo)
    this.stdForm.reset()
  }

  onUpdate(){
    let UPDATED_STD = {...this.stdForm.value, id :this.editStd.id};
    this.emitUpdatedStd.emit(UPDATED_STD)
    this.isInEditMode= false;
    this.stdForm.reset()

  }

}
