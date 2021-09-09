import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title = 'Welcome to our online pizza shop!';
  subtitle = 'What is your choice?';

  constructor() {}

  ngOnInit(): void {}
}
