import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  templateUrl: './interpolation-demo.component.html',
  styleUrls: ['./interpolation-demo.component.css'],
})
export class InterpolationDemoComponent implements OnInit {
  name: string = 'Rajeev';
  lang: string = 'Javascript';

  printAddress() {
    return 'I live in Mumbai, India';
  }

  constructor() {}

  ngOnInit(): void {}
}
