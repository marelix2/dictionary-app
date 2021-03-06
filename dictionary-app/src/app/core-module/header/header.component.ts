import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddWordServiceService} from "../../shared-module/add-word-service.service";
import {DictionaryComponent} from "../../dictionary-component/dictionary-component.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  words: DictWordModel[];
  searchWord: DictWordModel;
  showDropDown = false;
  plWord = true;
  lang: string = 'PL';

  constructor( private formBuilder: FormBuilder,
               private addWordService: AddWordServiceService) { }

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

    this.addWordService.getWords().subscribe((words) => {
      this.words = words;
    });
  }

  toggleDropDown(): void {
    this.showDropDown = !this.showDropDown;
  }

  showPolishWords(): void {
    this.lang = 'PL';
    this.plWord = true;
  }

  showAngishWords(): void {
    this.lang = 'ENG';
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
