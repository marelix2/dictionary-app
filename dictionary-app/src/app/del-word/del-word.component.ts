import { Component, OnInit } from '@angular/core';
import {DictionarySearchService} from '../shared-module/dictionary-search.service';
import {DictionaryWordModel} from '../shared-module/dictionaryWord.model';

@Component({
  selector: 'app-del-word',
  templateUrl: './del-word.component.html',
  styleUrls: ['./del-word.component.css']
})
export class DelWordComponent implements OnInit {

  words: DictionaryWordModel[]

  constructor( private dictionaryService: DictionarySearchService) { }

  ngOnInit() {
    this.loadWords();
  }


  loadWords(){

    this.dictionaryService.getWords().subscribe((words) => {
      this.words = words;
    })
  }


}
