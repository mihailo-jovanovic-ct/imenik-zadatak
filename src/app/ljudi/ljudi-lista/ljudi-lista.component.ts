import { Component, OnInit } from '@angular/core';
import { Covek } from '../covek.model';
import { LjudiService } from '../ljudi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ljudi-lista',
  templateUrl: './ljudi-lista.component.html',
  styleUrls: ['./ljudi-lista.component.css']
})
export class LjudiListaComponent implements OnInit {
    ljudi: Covek[];

  constructor(private ljudiService: LjudiService,
              private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.ljudiService.ljudiChanged
    .subscribe(
      (ljudi: Covek[]) => {
        this.ljudi = ljudi;
      }
    );
    this.ljudi = this.ljudiService.getLjudi();
  }

  onNewCovek(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

