import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { postData } from 'src/app/shared/const/post';
import { Ipost } from 'src/app/shared/models/post';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  editPost !: Ipost

  constructor(
     private _snackbar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  postArr : Array<Ipost> = postData


  onAdd(post : Ipost){
    this.postArr.unshift(post)
    this._snackbar.openSnackBar(`New Post with id ${post.id} is Added Successfully.`)
  }

  onRemove(id : number){
    let getIndex = this.postArr.findIndex(p => p.id == id)
    this.postArr.splice(getIndex,1)
    this._snackbar.openSnackBar(`Post with id ${id} is Removed Successfully.`)
  }

  onEdit(post : Ipost){
    this.editPost = post
  }

  onUpdate(post : Ipost){
    let getIndex = this.postArr.findIndex(p => p.id === post.id)
    this.postArr[getIndex] = post
    this._snackbar.openSnackBar(`Post with id ${post.id} is Updated Successfully.`)
  }

}
