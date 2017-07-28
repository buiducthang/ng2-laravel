import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  onSubmit(form :NgForm){
    this.commentService.createComment(form.value.content)
          .subscribe(
            () => alert('Created !!!')  
          );

    form.reset();
  }

}
