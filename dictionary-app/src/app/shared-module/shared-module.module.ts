import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DictionarySearchService} from './dictionary-search.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers:[DictionarySearchService],
  declarations: []
})
export class SharedModule { }
