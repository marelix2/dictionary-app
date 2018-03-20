import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component';
import { BodyComponent } from './root/body/body.component';
import { ResultComponent } from './root/body/result/result.component';
import { FooterComponent } from './root/footer/footer.component';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AddWordComponent } from './root/add-word/add-word.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    BodyComponent,
    ResultComponent,
    FooterComponent,
    AddWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
