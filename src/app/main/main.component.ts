import { AppComponent } from './../app.component';
import { UnsplashService } from './../unsplash.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  images: any;
  ModalTitle: string;
  ActivateViewPhoto: boolean = false;
  myImage: string;

  constructor(private unsplashService: UnsplashService) { }

  ngOnInit() {
    this.unsplashService.getImages().subscribe(
      (images) => {
        this.images = images;
        console.log(this.images);
        console.log('hello there! You just successfully made a GET API call');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewPhoto(item) {
    this.ModalTitle = 'View Photo';
    this.ActivateViewPhoto = true;
    this.myImage = item;
    AppComponent.myGlobalVarForThatPhoto = item;
    console.log(AppComponent.myGlobalVarForThatPhoto);
    console.log(this.myImage);
  }
  closeClick() {
    this.ActivateViewPhoto = false;
  }
}
