import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import{ GetCommentsComponent } from "./get-comments/get-comments.component";
import{ CreateCommentComponent } from "./create-comment/create-comment.component";

const APP_ROUTES: Routes = [
    { path: '', component: GetCommentsComponent },
    { path: 'create-comment', component: CreateCommentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);