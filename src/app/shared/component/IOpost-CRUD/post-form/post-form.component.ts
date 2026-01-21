import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from 'src/app/shared/models/post';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges{
  @ViewChild('postForm') postForm !: NgForm
  @Output() emitAddPost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
  @Output() emitUpdatePost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
  @Input() editPost !: Ipost
  IsInEditMode : boolean = false

  constructor(
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editPost']['currentValue']){
      this.IsInEditMode = true
      this.postForm.form.patchValue(changes['editPost']['currentValue'])
    }
  }

  onAdd(){
    let postObj : Ipost = {...this.postForm.value, id: this._uuid.getUniqueNumber()}
    this.emitAddPost.emit(postObj)
    this.postForm.reset()
  }


  onUpdate(){
    let UPDATED_post : Ipost = {...this.postForm.value, id : this.editPost.id}
    this.emitUpdatePost.emit(UPDATED_post)
    this.IsInEditMode = false;
    this.postForm.reset()
  }

}
