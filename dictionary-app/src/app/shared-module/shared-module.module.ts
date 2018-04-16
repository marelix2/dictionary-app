import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddWordServiceService} from "./add-word-service.service";


@NgModule({
  imports: [
    CommonModule
  ],
  providers:[AddWordServiceService],
  declarations: []
})
export class SharedModule { }
