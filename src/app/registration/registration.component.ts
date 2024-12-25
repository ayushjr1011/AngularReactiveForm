// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss']
// })
// export class RegistrationComponent implements OnInit {
//   registrationForm: FormGroup;
//   submitted = false;
//   formData: any;
//   constructor(private fb: FormBuilder) {
//     this.registrationForm = this.fb.group({
//       fullName: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, this.passwordValidator]],
//       confirmPassword: ['', [Validators.required]],
//       phoneNumber: [
//         '',
//         [Validators.pattern('^[0-9]{10}$')] // Ensures only 10 digits are allowed
//       ],
//       dob: ['', [Validators.required, this.ageValidator]],
//     }, { validator: this.passwordMatch });
    
//    }
//   //  get f(): { [key: string]: AbstractControl } {
//   //   return this.registrationForm.controls;
//   // }
//   get f(){
//     return this.registrationForm.controls
    
//     }
//   // passwordValidator(control: AbstractControl) {
//   //   const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   //   return pattern.test(control.value) ? null : { invalidPassword: true };
//   // }
//   ageValidator(control: AbstractControl) {
//     const dob = new Date(control.value);
//     const age = new Date().getFullYear() - dob.getFullYear();
//     return age >= 18 ? null : { underage: true };
//   }
//   passwordMatch(group: FormGroup) {
//     const password = group.get('password')?.value;
//     const confirmPassword = group.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }
//   onSubmit(): void {
//     this.submitted = true;
//     if (this.registrationForm.invalid) {
//       return;
//     }
//     // Process valid form data
//     const { password, confirmPassword, ...formData } = this.registrationForm.value;
//     this.formData = formData;
//   }
//   // Password match validation
//   passwordMatchValidator(control: FormGroup): any {
//     const password = control.get('password')?.value;
//     const confirmPassword = control.get('confirmPassword')?.value;
//     if (password !== confirmPassword) {
//       return { mismatch: true };
//     }
//     return null;
//   }

//   // Password strength validation
//   passwordValidator(control: any): { [key: string]: boolean } | null {
//     const password = control.value;
//     if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
//       return { 'invalidPassword': true };
//     }
//     return null;
//   }

//   onReset(): void {
//     this.registrationForm.reset();
//     this.submitted = false;
//     this.formData = null;
//   }
//   // Input change handler for real-time validation
//   onInputChange(fieldName: string) {
//     const control = this.registrationForm.get(fieldName);
//     if (control) {
//       control.markAsTouched();
//     }
//   }
//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  formData: any;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.pattern('^[0-9]{10}$')]],  // Ensures only 10 digits are allowed
      dob: ['', [Validators.required, this.ageValidator]],
    }, { validator: this.passwordMatch });
  }

  // Getter for form controls
  get f() {
    return this.registrationForm.controls;
  }

  // Password strength validation
  passwordValidator(control: AbstractControl) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(control.value) ? null : { invalidPassword: true };
  }

  // Age validation (must be at least 18)
  ageValidator(control: AbstractControl) {
    const dob = new Date(control.value);
    const age = new Date().getFullYear() - dob.getFullYear();
    return age >= 18 ? null : { underage: true };
  }

  // Password match validation
  passwordMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Submit handler
  onSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    // Process valid form data
    const { password, confirmPassword, ...formData } = this.registrationForm.value;
    this.formData = formData;
  }

  // Reset handler
  onReset(): void {
    this.registrationForm.reset();
    this.submitted = false;
    this.formData = null;
  }

  // Input change handler for real-time validation
  onInputChange(fieldName: string): void {
    const control = this.registrationForm.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
  }

  ngOnInit(): void {}
}
