import { Component, OnInit } from '@angular/core';
import {DictionaryWordModel} from '../shared-module/dictionaryWord.model';
import {DictionarySearchService} from '../shared-module/dictionary-search.service';

@Component({
  selector: 'app-dictionary-component',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }

}
