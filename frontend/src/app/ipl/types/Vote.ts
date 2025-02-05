<<<<<<< HEAD
import { Cricketer } from "./Cricketer";
import { Team } from "./Team";

export class Vote {

    voteId: number;
    email: string;
    category: string;
    cricketer: Cricketer;
    team: Team;

    constructor(
        voteId: number,
        email: string,
        category: string,
        cricketer: Cricketer,
        team: Team
    ) {
        this.voteId = voteId;
        this.email = email;
        this.category = category;
        this.cricketer = cricketer;
        this.team = team;
    }

    displayInfo() {
        console.log(`Vote ID: ${this.voteId}`);
        console.log(`Email: ${this.email}`);
    }
=======

export class Vote {
    voteId: number;
    email: string;
    category: string;
    cricketerId: number;
    teamId: number;
    constructor(voteId: number,
        email: string,
        category: string,
        cricketerId: number,
        teamId: number) {
        this.voteId = voteId;
        this.email =email;
        this.category = category;
        this.cricketerId = cricketerId;
        this.teamId = teamId;
    }
    displayInfo():void{
        console.log(`Vote ID: ${this.voteId}`);
        console.log(`Email: ${this.email}`);
        }
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
}