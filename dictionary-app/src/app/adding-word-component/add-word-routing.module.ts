import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AddingWordComponent} from './adding-word-component.component';
import {DelWordComponent} from '../del-word/del-word.component';

const APP_ROUTE: Route[] = [
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
    RouterModule.forChild(APP_ROUTE)
  ],
  exports: [RouterModule]

})


export class  AppRoutingModule {

}
