import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-adding-word',
  templateUrl: './adding-word.component.html',
  styleUrls: ['./adding-word.component.css']
})
export class AddingWordComponent implements OnInit {

  addWordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.addWordForm = this.addWordFormBuild();
  }

  addWordFormBuild(): FormGroup {

    return this.formBuilder.group({
      word:[''],
      key:['']
    });
  }

}
