import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {

  @Input() data: Object;

  constructor() { }

  ngOnInit() {
  }

}
