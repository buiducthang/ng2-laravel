import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import{ GetCommentsComponent } from "./get-comments/get-comments.component";
import{ CreateCommentComponent } from "./create-comment/create-comment.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const APP_ROUTES: Routes = [
    { path: '', component: GetCommentsComponent },
    { path: 'create-comment', component: CreateCommentComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);