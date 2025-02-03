<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/ipl/types/User';
import { AuthService } from '../../services/auth.service';
=======
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
<<<<<<< HEAD
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      role: ["", [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.authService.createUser(this.registrationForm.value).subscribe(
        response => {
          this.successMessage = 'Registration successful!';
          this.errorMessage = null;
          this.registrationForm.reset();
        },
        error => {
          this.errorMessage = error;
          this.successMessage = null;
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
=======
export class RegistrationComponent {
  registrationForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.successMessage = 'Registration successful!';
      this.errorMessage = '';
      console.log('User Data:', this.registrationForm.value);
      this.resetForm();
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }

  resetForm() {
    this.registrationForm.reset();
  }
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
}
