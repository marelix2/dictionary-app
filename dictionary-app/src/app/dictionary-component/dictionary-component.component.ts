import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AddWordServiceService} from "../shared-module/add-word-service.service";
import {observableToBeFn} from "rxjs/testing/TestScheduler";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-dictionary-component',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  word: DictWordModel[];


  constructor(private route: ActivatedRoute,
              private addWordService: AddWordServiceService) { }

  ngOnInit() {
    this.loadWord();
  }

  loadWord(){
    const word = this.route.snapshot.params['key'];
    const lang = this.route.snapshot.params['lang'];

    console.log("wartosc => " + word + " " + lang);

   this.addWordService.getSingleWord(word, lang).subscribe(w => {
     this.word = w;
   });

    console.log(this.word);
  }

}
