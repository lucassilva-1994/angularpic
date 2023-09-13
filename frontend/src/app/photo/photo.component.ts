
import { Component } from "@angular/core";

@Component({
  selector:'app-photo',
  templateUrl:'./photo.component.html'
})
export class PhotoComponent{
  title = 'Angular pic';
  description = "Imagem do angular"
  url = "https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png";
}
