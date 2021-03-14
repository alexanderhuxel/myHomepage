import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  public contactStatus : boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Images)
  }

  openContact(){
    if (this.contactStatus == false) {
      document.getElementById("openContact").classList.add("active-contact");
      document.getElementById("Contact").style.transform = "scale(1)";
      this.contactStatus = true;
    } else {
      document.getElementById("openContact").classList.remove("active-contact");
      document.getElementById("Contact").style.transform = "scale(0)";
      this.contactStatus = false;
    }
  };
  
}

