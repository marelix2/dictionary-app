import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import {CoreModule} from './core-module/core-module.module';
import {SharedModule} from './shared-module/shared-module.module';
import { DictionaryComponentComponent } from './dictionary-component/dictionary-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AddingWordComponentComponent } from './adding-word-component/adding-word-component.component';
import {DictionarySearchService} from './shared-module/dictionary-search.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponentComponent,
    AddingWordComponentComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule

  ],
  providers: [DictionarySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
