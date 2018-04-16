import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {AddWordServiceService} from "../shared-module/add-word-service.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";


@Component({
  selector: 'app-adding-word',
  templateUrl: './adding-word.component.html',
  styleUrls: ['./adding-word.component.css']
})
export class AddingWordComponent implements OnInit {

  addWordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private addWordService : AddWordServiceService) { }

  ngOnInit() {
    this.addWordForm = this.addWordFormBuild();
  }

  addWordFormBuild(): FormGroup {

    return this.formBuilder.group({
      word:[''],
      key:['']
    });
  }

  onSubmit(){
    if(this.addWordForm.value != '')
      this.addWordService.addWord(this.addWordForm.getRawValue());
      this.addWordForm.reset();
  }




}
