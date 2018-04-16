import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DictionaryComponent} from './dictionary-component/dictionary-component.component';
import {AddingWordComponent} from './adding-word-component/adding-word-component.component';
import {DelWordComponent} from './del-word/del-word.component';

const APP_ROUTE: Route[] = [
  {
    path: 'search/:key/:lang',
    component: <any>DictionaryComponent
  },
  {
    path: 'add',
    component: <any> AddingWordComponent
  },
  {
    path: 'del',
    component: <any> DelWordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTE, )
  ],
  exports: [RouterModule]

})


export class  AppRoutingModule {

}
