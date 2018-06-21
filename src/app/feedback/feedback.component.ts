import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedbackForm : FormGroup;
feedback: any;
  constructor(private fb: FormBuilder ) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['',Validators.maxLength(3)],
      lastname:['',Validators.compose([Validators.required,Validators.maxLength(4)])],
          email: ['',Validators.email],
      phoneno:'',
      states: 'newyork',
      agree :'boolean',
      message:'',

    });
  }
  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      email:'enter one more time',
      firstname:'enter other name',
      lastname:'enter other name',
          
      phoneno:'',
      states: 'ohio',
      agree :'true',
      message:'',

    });


  }

}
