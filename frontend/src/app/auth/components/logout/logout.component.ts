<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(["/auth"]);
  }
=======

export class LogoutComponent {

>>>>>>> f690d9fac59447d47cf75f8af3a01898997d927c

}
