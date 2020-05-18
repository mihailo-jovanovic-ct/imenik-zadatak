import { Component, OnInit } from '@angular/core';
import { Covek } from '../covek.model';
import { LjudiService } from '../ljudi.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ljudi-podaci',
  templateUrl: './ljudi-podaci.component.html',
  styleUrls: ['./ljudi-podaci.component.css']
})
export class LjudiPodaciComponent implements OnInit {
  covek: Covek;
  id: number;

  constructor(private ljudiService: LjudiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
      this.id = params.id;
      this.covek = this.ljudiService.getCovek(this.id);
    });
  }

  onEditCovek() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCovek(){
    this.ljudiService.deleteCovek(this.id);
    this.router.navigate(['/imenik']);
  }

}
