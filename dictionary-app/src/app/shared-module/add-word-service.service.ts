import { Injectable } from '@angular/core';
import {AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AddWordServiceService {

  wordsCollection: AngularFirestoreCollection<DictWordModel>;
  words: Observable<DictWordModel[]>;
  wordDoc: AngularFirestoreDocument<DictWordModel>;
  singleWordColl: AngularFirestoreCollection<DictWordModel>;

  constructor(private afs: AngularFirestore) {

    this.wordsCollection = this.afs.collection("words");

  }

  getWords() {
    console.log(this.words);
    this.words = this.afs.collection('words').snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.doc.data() as DictWordModel;
        data.id = c.payload.doc.id;
        return data;
      })
    })
    return this.words;
  }

  addWord(word: DictWordModel) {

    console.log(word);
    this.wordsCollection.add(word);


  }

  deleteWord(word: DictWordModel){
      this.wordDoc = this.afs.doc(`words/${word.id}`);
      this.wordDoc.delete();

  }

  getSingleWord(word , lang): Observable<DictWordModel[]>{

   return this.words =  this.afs.collection('words', ref =>{
     if(lang == 'ENG'){
       return ref.where('key','==', word);
     } else {
       return ref.where('word','==', word);
     }
  }
  ).snapshotChanges().map(changes => {
     return changes.map(c => {
       const data = c.payload.doc.data() as DictWordModel;
       data.id = c.payload.doc.id;
       return data;
     })
   })


  }




}



