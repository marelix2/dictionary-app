import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {SearchFilterPipePL} from './header/filter-pipe-PL';
import {SearchFilterPipeAng} from './header/filter-pipe-Ang';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, SidenavComponent],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SearchFilterPipePL,
    SearchFilterPipeAng
  ]
})
export class CoreModule { }
