import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output()wordAddingEvent = new EventEmitter<{adding: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  onWordAdding(){
      this.wordAddingEvent.emit({adding: true});
  }

}
