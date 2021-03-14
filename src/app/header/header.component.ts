import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  menuOpen : boolean = false;
  ngOnInit(): void {
  }

  openMenu(){
    if (this.menuOpen == false) {
      document.getElementById("burger-menu").classList.add("active");
      document.getElementById("burger-nav").classList.remove("responsiveClose");
      this.menuOpen = true;
    } else {
      document.getElementById("burger-menu").classList.remove("active");
      document.getElementById("burger-nav").classList.add("responsiveClose");
      this.menuOpen = false;

    }
  }

}
