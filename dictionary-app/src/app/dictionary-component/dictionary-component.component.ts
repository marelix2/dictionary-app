import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AddWordServiceService} from "../shared-module/add-word-service.service";
import {observableToBeFn} from "rxjs/testing/TestScheduler";
import {Observable} from "rxjs/Observable";
import {componentRefresh} from "@angular/core/src/render3/instructions";


@Component({
  selector: 'app-dictionary-component',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements  OnInit, DoCheck {

  word: DictWordModel[];
  private key;

  constructor(private route: ActivatedRoute,
              private addWordService: AddWordServiceService) { }

  ngOnInit() {
    this.loadWord();

  }
  ngDoCheck(){
    if(this.key != this.route.snapshot.params['key'] ) this.loadWord();
  }

  loadWord(){

    this.key = this.route.snapshot.params['key'];
    const lang = this.route.snapshot.params['lang'];

   // console.log("wartosc => " + this.key + " " + lang);

    this.addWordService.getSingleWord(this.key, lang).subscribe(w => {
      this.word = w;
    });

    //console.log(this.word);
  }



}
