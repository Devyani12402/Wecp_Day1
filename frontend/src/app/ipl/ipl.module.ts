import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IplRoutingModule } from "./ipl-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TeamCreateComponent } from "./components/teamcreate/teamcreate.component";
import { CricketerCreateComponent } from "./components/cricketercreate/cricketercreate.component";
import { MatchCreateComponent } from "./components/matchcreate/matchcreate.component";
import { TicketBookingComponent } from "./components/ticketbooking/ticketbooking.component";
import { VoteComponent } from "./components/vote/vote.component";
<<<<<<< HEAD
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CricketerEditComponent } from "./components/cricketeredit/cricketeredit.component";
import { TeamEditComponent } from "./components/teamedit/teamedit.component";
import { MatchEditComponent } from "./components/matchedit/matchedit.component";
=======
<<<<<<< HEAD
import { RouterModule } from "@angular/router";
=======
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1

@NgModule({
  declarations: [
    TeamCreateComponent,
    CricketerCreateComponent,
    MatchCreateComponent,
    TicketBookingComponent,
<<<<<<< HEAD
    VoteComponent,
    DashboardComponent,
    CricketerEditComponent,
    TeamEditComponent,
    MatchEditComponent
=======
    VoteComponent
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    IplRoutingModule,
    RouterModule,
    SharedModule
=======
<<<<<<< HEAD
    IplRoutingModule,
    RouterModule
=======
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
  ],
  exports: [
    
  ]
})
export class IplModule {}
