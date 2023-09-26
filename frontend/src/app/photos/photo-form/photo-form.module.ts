import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoFormComponent } from "./photo-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { PhotoModule } from "../photo/photo.module";
import { ImmediateClickModule } from "src/app/shared/directives/immediate-click/imeddiate-click.module";


@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    VMessageModule, 
    RouterModule, 
    PhotoModule,
    ImmediateClickModule
  ]
})
export class PhotoFormModule{

}
