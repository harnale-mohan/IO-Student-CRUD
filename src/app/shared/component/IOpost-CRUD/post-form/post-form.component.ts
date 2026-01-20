import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from 'src/app/shared/models/post';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges {
  @ViewChild('postForm') postForm !: NgForm
  @Output() emitAddPost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
  @Output() emitUpdatedPost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
  @Input() editPost !: Ipost
  isInEditMode : boolean = false
  

  constructor(
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editPost']['currentValue']){
      this.isInEditMode = true;
      this.postForm.form.patchValue(changes['editPost']['currentValue'])
    }
  }

  onAdd(){
    let newPost : Ipost = {...this.postForm.value, id : this._uuid.getUniqueNumber()}
    this.emitAddPost.emit(newPost)
    this.postForm.reset()
  }

  onUpdate(){
    let UPDATED_POST = {...this.postForm.value, id: this.editPost.id}
    this.emitUpdatedPost.emit(UPDATED_POST)
    this.isInEditMode = false;
    this.postForm.reset()
  }

}
