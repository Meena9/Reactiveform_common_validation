import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent  {
  message: any;
	msg: any = [];

	@Input() controlName: AbstractControl | AbstractControlDirective;
	@Input() forceShowError: boolean;

	/**
   * App level error messages (this will grow as the app grows)
   */
	errorMessages = {
		required: () => `This field is required`,
		max: (params) => `Max. ${params.max} number are allowed`,
		min: (params) => `Min. ${params.min} number are allowed`,
		maxlength: (params) => `Max. ${params.requiredLength} numbers are allowed`,
		pattern: () => `Enter a valid field`,
		pinNotMatch: () => `Enter a valid Pincode`
	};

	listOfErrors() {
		if (this.controlName.errors) {
			this.msg = [];
			Object.keys(this.controlName.errors).map((error) => {
				this.controlName.touched || this.controlName.dirty || (this.forceShowError && this.controlName.invalid)
					? this.msg.push(this.errorMessages[error](this.controlName.errors[error]))
					: '';
			});
			return this.msg;
		} else {
			return [];
		}
	}
}

