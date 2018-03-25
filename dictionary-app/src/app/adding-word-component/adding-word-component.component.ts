import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-adding-word',
  templateUrl: './adding-word.component.html',
  styleUrls: ['./adding-word.component.css']
})
export class AddingWordComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
