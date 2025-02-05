
export class User {
<<<<<<< HEAD
userId:number;
=======
<<<<<<< HEAD
userId:number;
=======
userId:string;
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
fullName:string;
username:string;
password:string;
email:string;
role:string;
<<<<<<< HEAD
constructor(userId:number,
=======
<<<<<<< HEAD
constructor(userId:number,
=======
constructor(userId:string,
>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c
>>>>>>> d0a253a502b8ebba907db243bd5a16ab9fc7d0b1
    fullName:string,
    username:string,
    password:string,
    email:string,
    role:string){
        this.userId=userId;
this.fullName=fullName;
this.username=username;
this.password =password;
this.email=email;
this.role = role;
    }
    displayInfo(){
        console.log(`user ID: ${this.userId}`);
        console.log(`Full Name: ${this.fullName}`);
        console.log(`Email: ${this.email}`);
    }
}