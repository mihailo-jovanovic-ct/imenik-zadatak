import { Component, OnInit, Input } from '@angular/core';
import { Covek } from '../../covek.model';

@Component({
  selector: 'app-ljudi-jedan',
  templateUrl: './ljudi-jedan.component.html',
  styleUrls: ['./ljudi-jedan.component.css']
})
export class LjudiJedanComponent implements OnInit {
  @Input() covek: Covek;
  @Input() index: number;


  ngOnInit(): void {
  }


}
