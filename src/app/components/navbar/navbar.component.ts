import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickFunction(){
    var featureSection=document.getElementById("featureservices");
    if(featureSection){
      // featureSection.style.display = "block";
      featureSection.scrollIntoView()
    }
   
  }
  clickProduct(){
    var featureSection=document.getElementById("featuredproducts");
    if(featureSection){
      featureSection.style.display = "block";
      featureSection.scrollIntoView()
    }
   
  }

  clickProject(){
    var featureSection=document.getElementById("project");
    if(featureSection){
      featureSection.style.display = "block";
      featureSection.scrollIntoView()
    }
   
  }

}
