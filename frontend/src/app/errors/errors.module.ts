import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { GlobalErrorComponet } from './global-error/global-error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent, 
    GlobalErrorComponet
  ],
  providers: [{
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
  }]
})
export class ErrorsModule { }
