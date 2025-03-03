<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
<<<<<<< HEAD
=======
=======
// import { Component, OnInit } from "@angular/core";
// import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

// @Component({
//     selector:'/app-logincomponent',
//     templateUrl:'./login.component.html',
//     styleUrls:['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//     loginForm!:FormGroup;
//     successMessage: string | null= null;
//     errorMessage: string | null= null;
// constructor(private fb :FormBuilder){}
//     ngOnInit(): void {
//         this.loginForm = this.fb.group({
//             username:['',Validators.required,this.usernameValidator],
//             password:['',Validators.required,this.passwordValidator]
//         })
//     }
//      passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
//         const password = control.value;
//         if (!password) {
//           return null;
//         }
//         const hasUpperCase = /[A-Z]/.test(password);
//         const hasNumber = /\d/.test(password);
//         const validLength = password.length >= 8;
//         if (!hasUpperCase || !hasNumber || !validLength) {
//           return { 'passwordInvalid': true };
//         }
//         return null;
//       }
      
//       // Custom validator for username
//        usernameValidator(control: AbstractControl): { [key: string]: boolean } | null {
//         const username = control.value;
//         if (!username) {
//           return null;
//         }
//         const hasSpecialChar = /[^a-zA-Z0-9]/.test(username);
//         if (hasSpecialChar) {
//           return { 'usernameInvalid': true };
//         }
//         return null;
//       }

//   onSubmit(){
//     if (this.loginForm.valid) {
//         this.successMessage = 'Login Successfull!';
//         this.errorMessage = null;
//       } else {
//         this.errorMessage = 'Invalid username or password.';
//         this.successMessage = null;
//       }
//   }
//   stimulateBackendLoginError(){
//     this.errorMessage ='Invalid username or password.'
//   }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).pipe(
        tap((response) => {
          console.log(response);
          localStorage.setItem("token", response.token);
          localStorage.setItem("role", response.roles);
          localStorage.setItem("user_id", response.userId);
          console.log(localStorage.getItem("role"));
          this.router.navigate(["ipl"]);
        }),
        catchError((error: string) => {
          this.errorMessage = 'Invalid username or password';
          console.error("Login error:", error);
          return of(null);
        })
      ).subscribe();
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }

<<<<<<< HEAD
=======
=======
export class LoginComponent {
  loginForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username } = this.loginForm.value;
      if (username === 'errorUser') {
        this.simulateBackendLoginError();
      } else {
        this.successMessage = 'Login successful!';
        this.errorMessage = '';
      }
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }

  simulateBackendLoginError() {
    this.successMessage = '';
    this.errorMessage = 'Invalid username or password.';
  }
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
}
