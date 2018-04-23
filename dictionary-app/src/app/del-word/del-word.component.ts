import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {AddWordServiceService} from "../shared-module/add-word-service.service";

@Component({
  selector: 'app-del-word',
  templateUrl: './del-word.component.html',
  styleUrls: ['./del-word.component.css']
})
export class DelWordComponent implements OnInit{

  words: DictWordModel[];


  constructor( private addWordsService: AddWordServiceService) {
    this.loadWords();
  }

  ngOnInit() {

    this.loadWords();
  }





loadWords(){
    this.addWordsService.getWords().subscribe((words) => {
      this.words = words;
    });
  }

  delWord(word: DictWordModel){
    this.addWordsService.deleteWord(word);

  }

}
