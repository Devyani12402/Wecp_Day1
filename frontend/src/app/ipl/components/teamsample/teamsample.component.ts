import { Component } from "@angular/core";
import { Team } from "../../types/Team";
@Component({
    selector: 'app-teamsample',
    standalone: true,
  imports:[],
    templateUrl:'./teamsample.component.html',
    styleUrls:['./teamsample.component.scss']
})

export class TeamSampleComponent  {
  team: Team = new Team(1,"CSK","Chennai","Dhoni",2015);
<<<<<<< HEAD
}
=======
}
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
