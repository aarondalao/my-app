import { AppComponent } from './../app.component';
import { Component, OnInit, Input} from '@angular/core';
import { UnsplashService } from './../unsplash.service';

@Component({
  selector: 'app-enlarge-photo',
  templateUrl: './enlarge-photo.component.html',
  styleUrls: ['./enlarge-photo.component.css'],
  providers: [
    {provide: 'photoID', useValue: 'myImage'}
  ]
})
export class EnlargePhotoComponent implements OnInit {
  // @Inject('photoID') private photoID: string

  constructor(private unsplashService: UnsplashService ) { }
  @Input() myImage: any;

  ngOnInit(): void {
    this.unsplashService.getThatOnePhoto().subscribe(
      (image) => {
        this.myImage = image;
      },
      (error) => {
        console.log(error);
      });
    console.log(this.myImage);
  }
}
