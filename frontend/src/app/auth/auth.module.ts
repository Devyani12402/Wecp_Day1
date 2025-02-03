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
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c

@NgModule({
  declarations: [RegistrationComponent,
    LoginComponent,
<<<<<<< HEAD
    LogoutComponent
=======
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    RouterModule
  ],
  exports: [
    LogoutComponent
=======
  ],
  exports: [
    
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
  ]
})
export class AuthModule {}
