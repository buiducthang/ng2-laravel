import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetCommentsComponent } from './get-comments/get-comments.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { CommentComponent } from './comment/comment.component';
import { routing } from './app.routing';
import { CommentService } from './comment.service';

@NgModule({
  declarations: [
    AppComponent,
    GetCommentsComponent,
    CreateCommentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
