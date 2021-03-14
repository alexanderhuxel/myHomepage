import { Component,  OnInit  } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.sass']
})
export class LandingpageComponent implements OnInit {
  public Images: any = ["../assets/img/angular.svg", "../assets/img/css.svg", "../assets/img/html.svg", "../assets/img/javascript.svg", "../assets/img/sass.svg", "../assets/img/typescript.svg", "../assets/img/homepage.png", "../assets/img/logo.png", "../assets/img/profileImg.JPG", "../assets/img/Quiz.png", "../assets/img/tictactoe.png"];
  public loadedImages: any = [];
  
  constructor() { }

  ngOnInit(): void {
    this.preLoader();
  }



 preLoader() {
    for (let i = 0; i < this.Images.length; i++) {
      this.loadedImages.push(this.Images[i])
    }  console.log(this.Images)

  }
}
