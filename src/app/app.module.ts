import { HttpClientModule } from '@angular/common/http';
import { UnsplashService } from './unsplash.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UnsplashService,
    HttpClientModule

  ],
  providers: [
    UnsplashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
