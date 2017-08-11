import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetCommentsComponent } from './get-comments/get-comments.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { CommentComponent } from './comment/comment.component';
import { routing } from './app.routing';
import { CommentService } from './comment.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    GetCommentsComponent,
    CreateCommentComponent,
    CommentComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [CommentService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
