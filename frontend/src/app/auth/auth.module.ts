import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegistrationComponent } from "./components/registration/registration.component";
import { LoginComponent } from "./components/login/login.component";
<<<<<<< HEAD
import { LogoutComponent } from "./components/logout/logout.component";
import { RouterModule } from "@angular/router";
=======
<<<<<<< HEAD
import { LogoutComponent } from "./components/logout/logout.component";
import { RouterModule } from "@angular/router";
=======
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1

@NgModule({
  declarations: [RegistrationComponent,
    LoginComponent,
<<<<<<< HEAD
    LogoutComponent
=======
<<<<<<< HEAD
    LogoutComponent
=======
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
    RouterModule
  ],
  exports: [
    LogoutComponent
<<<<<<< HEAD
=======
=======
  ],
  exports: [
    
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
  ]
})
export class AuthModule {}
