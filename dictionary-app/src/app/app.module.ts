import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import {CoreModule} from './core-module/core-module.module';
import {SharedModule} from './shared-module/shared-module.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DictionarySearchService} from './shared-module/dictionary-search.service';
import {HttpClientModule} from '@angular/common/http';
import {DictionaryComponent} from './dictionary-component/dictionary-component.component';
import {AddingWordComponent} from './adding-word-component/adding-word-component.component';
import { DelWordComponent } from './del-word/del-word.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    AddingWordComponent,
    DelWordComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [DictionarySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
