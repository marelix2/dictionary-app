import { Component, OnInit } from '@angular/core';
import {DictionaryWordModel} from '../shared-module/dictionaryWord.model';
import {DictionarySearchService} from '../shared-module/dictionary-search.service';

@Component({
  selector: 'app-dictionary-component',
  templateUrl: './dictionary-component.component.html',
  styleUrls: ['./dictionary-component.component.css']
})
export class DictionaryComponentComponent implements OnInit {

  words: DictionaryWordModel[];

  constructor(private dictionarySearch : DictionarySearchService) { }

  ngOnInit() {
    this.loadWords();

    console.log(this.words);
  }


  loadWords(): void {

    this.dictionarySearch.getWords().subscribe((words) => {
      this.words = words;
    });

  }

}
