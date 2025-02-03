import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
];
=======

const routes: Routes = [];
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
