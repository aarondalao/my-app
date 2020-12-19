import { UnsplashService } from './../unsplash.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  images: any;

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit() {
    this.unsplashService.getImages().subscribe(
      (images) => {
        this.images = images
        console.log(this.images);
        console.log("hello");
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
