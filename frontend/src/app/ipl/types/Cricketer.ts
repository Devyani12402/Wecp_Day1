<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
import { Team } from './Team';

export class Cricketer {
    cricketerId: number;
<<<<<<< HEAD
=======
=======
export class Cricketer {
    cricketerId: number;
    teamId: number;
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
    cricketerName: string;
    age: number;
    nationality: string;
    experience: number;
    role: string;
    totalRuns: number;
    totalWickets: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
    team: Team;  // Establish ManyToOne relationship

    constructor(
        cricketerId: number,
        cricketerName: string,
        age: number,
        nationality: string,
        experience: number,
        role: string,
        totalRuns: number,
        totalWickets: number,
        team: Team
    ) {
        this.cricketerId = cricketerId;
        this.cricketerName = cricketerName;
        this.age = age;
        this.nationality = nationality;
        this.experience = experience;
        this.role = role;
        this.totalRuns = totalRuns;
        this.totalWickets = totalWickets;
        this.team = team;  // Link cricketer to a team
    }

    displayInfo() {
        console.log(`Cricketer ID: ${this.cricketerId}`);
        console.log(`Team: ${this.team.teamName}`);
        console.log(`Cricketer Name: ${this.cricketerName}`);
    }
}
<<<<<<< HEAD
=======
=======
  
    constructor(cricketerId: number, teamId: number, cricketerName: string, age: number, nationality: string, experience: number, role: string, totalRuns: number, totalWickets: number) {
      this.cricketerId = cricketerId;
      this.teamId = teamId;
      this.cricketerName = cricketerName;
      this.age = age;
      this.nationality = nationality;
      this.experience = experience;
      this.role = role;
      this.totalRuns = totalRuns;
      this.totalWickets = totalWickets;
    }
  
    displayInfo(): void {
      console.log(`Cricketer ID: ${this.cricketerId}`);
      console.log(`Team ID: ${this.teamId}`);
      console.log(`Cricketer Name: ${this.cricketerName}`);
    }
  }
  
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
