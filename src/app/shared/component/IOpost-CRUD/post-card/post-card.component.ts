import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postArr !: Array<Ipost>
  @Output() emitRemovePost : EventEmitter<number> = new EventEmitter<number>()
  @Output() emitEditPost : EventEmitter<Ipost> = new EventEmitter<Ipost>()
   

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id : number){
    this.emitRemovePost.emit(id)
  }

  onEdit(post : Ipost){
    this.emitEditPost.emit(post)

  }

}
