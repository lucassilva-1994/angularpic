import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url:'https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png',
      description:'Angular'
    },
    {
      url:'https://www.etondigital.com/wp-content/uploads/2019/05/laravel-blog.png',
      description:'Laravel'
    },
  ]
}
