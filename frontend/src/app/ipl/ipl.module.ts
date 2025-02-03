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
=======
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c

@NgModule({
  declarations: [
    TeamCreateComponent,
    CricketerCreateComponent,
    MatchCreateComponent,
    TicketBookingComponent,
    VoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    IplRoutingModule,
    RouterModule
=======
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
  ],
  exports: [
    
  ]
})
export class IplModule {}
