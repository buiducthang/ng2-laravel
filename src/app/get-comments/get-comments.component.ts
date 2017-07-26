import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

import { Comment } from "../comment.interface";
import { CommentService } from "../comment.service";

@Component({
  selector: 'app-get-comments',
  templateUrl: './get-comments.component.html',
  styleUrls: ['./get-comments.component.css']
})
export class GetCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  onGetComments()
  {
    this.commentService.getComments()
        .subscribe(
          (comments: Comment[]) => this.comments = comments,
          (error: Response) => console.log(error)
        );
  }
}
