import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DictionaryWordModel} from './dictionaryWord.model';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DictionarySearchService {

  constructor(private http: HttpClient) { }

  getWords(): Observable<DictionaryWordModel[]>{

    return this.http.get<DictionaryWordModel[]>('../../assets/words.json')
      .map((res) => res);
  }

}
