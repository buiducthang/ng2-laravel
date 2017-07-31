import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from "../comment.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() commentDeleted = new EventEmitter<Comment>();

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
            this.comment.content = this.editValue;
            this.editValue = '';
          }
        );
    this.editing = false;
    
  }
  
  onDelete(){
    this.commentService.deleteComment(this.comment.id)
        .subscribe(
          () => {
              this.commentDeleted.emit(this.comment);
              alert('Delted comment ' + this.comment.content);
            }
          );
    
  }

  onCancel(){
    this.editing = false;
    this.editValue = '';
  }
}

