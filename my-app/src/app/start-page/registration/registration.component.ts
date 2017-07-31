import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

import { PasswordValidation } from './password-validation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted  = false;
  // firstName = new FormControl("", Validators.required);

  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'telephone': '',
    'username': '',
    'password': '',
    "confPassword": ''
  };

  validationMessages = {
    'firstName': {
      'required': 'firstName is required.',
      'pattern': 'Only english letters allowed'
    },
    'lastName': {
      'required': 'LastName is required.',
      'pattern': 'Only english letters allowed'
    },
    'email': {
      'required': 'Email is required.',
      'pattern': 'Email format must be xxxxx@yyyy.zzz'
    },
    'telephone': {
      'pattern': 'Only numbers allowed'
    },
    'username': {
      'required': 'Username is required',
      'pattern': 'Only english characters or numbers',
      'minlength': 'Must be at least 5 characters long.',
      'maxlength': 'Cannot be more than 10 characters long.'
    },
    'password': {
      'required': 'Password is required',
      'pattern': 'Only english characters or numbers'
    },
    'confPassword': {
      'required': 'Please, confirm the password',
      'pattern': 'Only english characters or numbers'
    }
  };

  onSubmit(): void {
    this.submitted = true;
  }
  ngOnInit(): void {
    this.buildForm();
  }

  constructor(private fb: FormBuilder) { }

  buildForm(): void {
    this.registrationForm = this.fb.group({

      "firstName": ["", [Validators.required,
        Validators.pattern('[A-Za-z]+')]],

      "lastName": ["", [Validators.required,
        Validators.pattern('[A-Za-z]+')]],

      "email": ["", [Validators.required,
        Validators.pattern('^[0-9A-Za-z]{1,10}@[0-9a-zA-Z_]+?\.[a-zA-Z]{2,5}$')]],

      "telephone": ["", Validators.pattern('[0-9]+')],

      "username": ["", [Validators.required,
        Validators.pattern('[A-Za-z0-9]+'),
        Validators.maxLength(10),
        Validators.minLength(5)]],

      "password": ["", [Validators.required,
        Validators.pattern('[a-zA-Z0-9]+')]],

      "confPassword": ["", [Validators.required,
        Validators.pattern('[a-zA-Z0-9]+')]]
    },
      {validator: PasswordValidation.MatchPassword
      }
    );

    this.registrationForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

  }


  onValueChanged(data?: any) {
    if (!this.registrationForm) { return; }
    const form = this.registrationForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field); // get input from form

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
