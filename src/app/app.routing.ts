import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import{ GetCommentsComponent } from "./get-comments/get-comments.component";

const APP_ROUTES: Routes = [
    { path: '', component: GetCommentsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);