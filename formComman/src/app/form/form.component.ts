import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  genders=['male','female'];
  SignupForm:FormGroup;
  forbiddenUserNames=['geetha','puja'];
  constructor() { }

  ngOnInit() {
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
          'username':new FormControl(null,[Validators.required]),
          'email':new FormControl(null,[Validators.required,Validators.email]),
      }),
      'gender':new FormControl('female'),
      'hobbies':new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.SignupForm);
if(this.SignupForm.invalid){
  this.setAsTouched(this.SignupForm);
}
  }
  public setAsTouched(group: FormGroup | FormArray) {
    group.markAsTouched();
    for (let i in group.controls) {
        if (group.controls[i] instanceof FormControl) {
            group.controls[i].markAsTouched();
        } else {
            this.setAsTouched(group.controls[i]);
        }
    }
}
}
