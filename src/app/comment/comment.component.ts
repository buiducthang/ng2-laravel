import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from "../comment.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  editing = false;
  editValue = '';

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  onEdit(){
    this.editing = true;
    this.editValue = this.comment.content;
  }

  onUpdate(){
    console.log("this.comment:" + this.comment.content)
    this.commentService.updateComment(this.comment.id, this.editValue)
        .subscribe(
          (comment: Comment) => {
            this.comment = comment;
            this.editValue = '';
          }
        );
    this.editing = false;
    
  }
  
  onDelete(){
    this.commentService.deleteComment(this.comment.id)
        .subscribe(
          () => alert('Delted comment ' + this.comment.content)
        );
    
  }

  onCancel(){
    this.editing = false;
    this.editValue = '';
  }
}

