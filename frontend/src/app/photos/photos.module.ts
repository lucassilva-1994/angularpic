import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  //Todos os componentes que vai fazer parte desse module
  declarations: [PhotoComponent],
  //Todos os componentes que vai ficar visivel para o module que for importar esse module.
  exports:[PhotoComponent],
  imports:[HttpClientModule]
})
export class PhotosModule{

}
