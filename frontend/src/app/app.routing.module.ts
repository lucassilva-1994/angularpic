import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { AuthGuard } from "./core/auth/auth.guard";
import { PhotoDetailsComponent } from "./photos/photo-detail/photo-details.component";
import { GlobalErrorComponet } from "./errors/global-error/global-error.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { title: 'Home' }
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    data: { title: 'Timeline'}
  },
  {
    path: 'photo/add',
    component: PhotoFormComponent,
    canActivate: [ AuthGuard ],
    data: {title:'Photo add'}
  },
  {
    path: 'photo/:photoId',
    component: PhotoDetailsComponent,
    data: { title: 'Photo details'}
  },
  {
    path:'error',
    component: GlobalErrorComponet,
    data: { title: 'Error' }
  },
  {
    path:'not-found',
    component: NotFoundComponent,
    data: { title: 'Not found' }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
