import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mean-course-practical';
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.autoAuthUser();
  }
}
