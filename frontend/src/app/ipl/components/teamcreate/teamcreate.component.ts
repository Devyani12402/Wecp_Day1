<<<<<<< HEAD
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { IplService } from '../../services/ipl.service';
import { Team } from '../../types/Team';
=======
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1

@Component({
  selector: 'app-teamcreate',
  templateUrl: './teamcreate.component.html',
<<<<<<< HEAD
  styleUrls: ['./teamcreate.component.scss']
})
export class TeamCreateComponent implements OnInit {
  teamForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  currentYear: number = new Date().getFullYear();
  team: Team | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private iplService: IplService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize form with validation rules
  private initializeForm(): void {
    this.teamForm = this.formBuilder.group({
      teamName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]], // No special characters
      location: ['', [Validators.required]],
      ownerName: ['', [Validators.required, Validators.minLength(2)]],
      establishmentYear: [
        null,
        [Validators.required, Validators.min(1900), Validators.max(this.currentYear)]
      ]
    });
  }

  // Form submission handler
  onSubmit(): void {
    if (this.teamForm.valid) {
      this.addTeam();
=======
  styleUrls: ['./teamcreate.component.scss'] 
})
export class TeamCreateComponent implements OnInit {
//   team: any = {
//     teamId: '',
//     teamName: '',
//     location: '',
//     ownerName: '',
//     establishmentYear: ''
//   };

  teamForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      teamId: [null, [Validators.required, Validators.minLength(1)]],
      teamName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      location: ['', Validators.required],
      ownerName: ['', [Validators.required, Validators.minLength(2)]],
      establishmentYear: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.teamForm.valid) {
      this.successMessage = 'Team has been successfully created!';
      this.errorMessage = null;
      console.log('Team Created: ', this.teamForm.value);
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

<<<<<<< HEAD
  // Method to call backend service and handle the response
  private addTeam(): void {
    this.iplService.addTeam(this.teamForm.value).subscribe(
      (response: Team) => {
        // Ensure that we are treating the response correctly as a Team
        this.team = response;  // This should be of type Team
        this.successMessage = 'Team created successfully!';
        this.errorMessage = null;
        console.log('Team Created: ', this.team);
        this.resetForm();
      },
      (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    );
  }

  // Reset the form after successful submission
=======
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
  resetForm(): void {
    this.teamForm.reset({
      teamId: null,
      teamName: '',
      location: '',
      ownerName: '',
<<<<<<< HEAD
      establishmentYear: this.currentYear
    });
  }

  // Error handling method
  private handleError(error: HttpErrorResponse): void {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      this.errorMessage = `Server-side error: ${error.status} ${error.message}`;
      if (error.status === 400) {
        this.errorMessage = 'Bad request. Please check your input.';
      }
    }
    this.successMessage = null;
    console.error('An error occurred:', this.errorMessage);
  }
=======
      establishmentYear: new Date().getFullYear()
    });
  }
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
}
