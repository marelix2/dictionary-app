import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DictionarySearchService} from '../../shared-module/dictionary-search.service';
import {DictionaryWordModel} from '../../shared-module/dictionaryWord.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  words: DictionaryWordModel[];
  showDropDown = false;
  plWord = true;

  constructor( private formBuilder: FormBuilder,
               private dictionarySearch: DictionarySearchService) { }

  ngOnInit() {
    this.searchForm = this.searchFormBuild();
    this.plWord = true;
    this.loadWords();
  }

  searchFormBuild(): FormGroup {

    return this.formBuilder.group({
      search: [null]
    });

  }

  loadWords(): void {

    this.dictionarySearch.getWords().subscribe((words) => {
      this.words = words;
    });
  }

  toggleDropDown(): void {
    this.showDropDown = !this.showDropDown;
  }

  showPolishWords(): void {
    this.plWord = true;
  }

  showAngishWords(): void {
    this.plWord = false;
  }

  getSearchValue(): any {
    return this.searchForm.value.search;
  }

  selectValue(word) {

    this.searchForm.patchValue({'search' : word});
    this.showDropDown = false;

  }
}
