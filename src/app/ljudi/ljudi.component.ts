import { Component, OnInit } from '@angular/core';
import { LjudiService } from './ljudi.service';

@Component({
  selector: 'app-ljudi',
  templateUrl: './ljudi.component.html',
  styleUrls: ['./ljudi.component.css'],
  providers: [LjudiService]
})
export class LjudiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
