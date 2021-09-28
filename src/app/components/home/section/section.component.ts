import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showText(event: any){
    console.log(event.target);
    // event.target.style.opacity = 1;
  }
  
  

}
