import { UnsplashService } from './unsplash.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: 'photoID', useValue: 'myImage'}
  ]
})
export class AppComponent {
  public static myGlobalVarForThatPhoto: string;
  title = 'my-app';

}
