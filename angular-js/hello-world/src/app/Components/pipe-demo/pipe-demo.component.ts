import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  Batsman = 'Virat Kohli';
  Average = 130;
  Salary = 100000;
  WinPercentage = 76 / 100;
  Summary = 'Test tets tesklkdnnfndgdn agdjasg afsjasgj afsgajfsga';
  lastMatch = new Date();

  constructor() {}

  ngOnInit(): void {}
}
