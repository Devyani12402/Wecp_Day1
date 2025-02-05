<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
import { Team } from './Team';

export class Match {
    matchId: number;
    firstTeam: Team; // ManyToOne relationship with Team
    secondTeam: Team; // ManyToOne relationship with Team
    matchDate: Date;
    venue: string;
    result: string;
    status: string;
    winnerTeam: Team; // ManyToOne relationship with Team

    constructor(
        matchId: number,
        firstTeam: Team,
        secondTeam: Team,
        matchDate: Date,
        venue: string,
        result: string,
        status: string,
        winnerTeam: Team
    ) {
        this.matchId = matchId;
        this.firstTeam = firstTeam;
        this.secondTeam = secondTeam;
        this.matchDate = matchDate;
        this.venue = venue;
        this.result = result;
        this.status = status;
        this.winnerTeam = winnerTeam;
    }

    displayInfo() {
        console.log(`Match ID: ${this.matchId}`);
        console.log(`First Team: ${this.firstTeam.teamName}`);
        console.log(`Second Team: ${this.secondTeam.teamName}`);
        console.log(`Winner: ${this.winnerTeam.teamName}`);
    }
}
<<<<<<< HEAD
=======
=======

export class Match {
 matchId:number;
 firstTeamId:number;
 secondTeamId:number;
 matchDate:Date;
 venue: string;
 result:string;
 status:string;
 winnerTeamId:number;
 constructor(matchId:number,firstTeamId:number,secondTeamId:number,matchDate:Date,venue: string,result:string,status:string,winnerTeamId:number){
        this.matchId=matchId;
        this.firstTeamId=firstTeamId;
 this.secondTeamId =secondTeamId;
 this.matchDate = matchDate;
this.venue = venue;
this.result= result;
this.status = status;
this.winnerTeamId= winnerTeamId;
    }
    displayInfo():void{
      console.log(`Match ID: ${this.matchId}`);
      console.log(`Match date: ${this.matchDate}`);
      console.log(`Venue: ${this.venue}`);
    }
}
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
