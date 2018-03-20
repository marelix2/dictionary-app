import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DictionaryWordModel} from './dictionaryWord.model';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class DictionarySearchService {

  constructor(private http: Http) { }

  getWords() : Observable<DictionaryWordModel[]>{

    return this.http.get('../../assets/words.json')
      .map((res: any) => res.json());
  }

}
