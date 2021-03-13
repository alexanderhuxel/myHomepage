import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {
  portfolio = [{
    name: "Tic Tac Toe",
    img: "../assets/img/tictactoe.png",
    discription : "this is a small Tic Tac Toe Game",
    usedTec: [
      "../assets/img/javascript.svg",
      "../assets/img/html.svg",
      "../assets/img/css.svg"
    ]
  }, {
    name: "my Homepage",
    img: "../assets/img/homepage.png",
    discription : "my Personal Homepage",
    usedTec: [
      "../assets/img/javascript.svg",
      "../assets/img/html.svg",
      "../assets/img/sass.svg",
      "../assets/img/angular.svg",
      "../assets/img/typescript.svg"
    ]

  }, {
    name: "Quizz",
    img: "../assets/img/Quiz.png",
    discription : "this a  small Quizz Game",
    usedTec: [
      "../assets/img/javascript.svg",
      "../assets/img/html.svg",
      "../assets/img/css.svg"
    ]
  }];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.portfolio.length; i++) {
      console.log(this.portfolio[i].usedTec)

    }
  }


}
