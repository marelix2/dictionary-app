import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roots',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  buttonClicked = false;

  constructor() { }

  ngOnInit() {
  }

  ButtonClicked( event : {adding: boolean}) {
    console.log(event.adding);
    return this.buttonClicked = event.adding;
  }
}
