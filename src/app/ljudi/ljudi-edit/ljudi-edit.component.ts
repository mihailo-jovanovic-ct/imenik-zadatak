import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LjudiService } from '../ljudi.service';
import { isValidNumber } from 'libphonenumber-js';

@Component({
  selector: 'app-ljudi-edit',
  templateUrl: './ljudi-edit.component.html',
  styleUrls: ['./ljudi-edit.component.css']
})


export class LjudiEditComponent implements OnInit {
  id: number;
  editMode = false;
  covekForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private ljudiService: LjudiService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    if (this.editMode) {
      this.ljudiService.updateCovek(this.id, this.covekForm.value);
    } else{
      this.ljudiService.addCovek(this.covekForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(){
    let covekIme = '';
    let covekBroj = '';
    let covekMejl = '';

    if (this.editMode) {
      const covek = this.ljudiService.getCovek(this.id);
      covekIme = covek.ime;
      covekBroj = covek.broj;
      covekMejl = covek.mejl;
    }

    this.covekForm = new FormGroup({
      ime: new FormControl(covekIme, [Validators.required, Validators.pattern('^^[a-zA-Z]{1,20}\ [a-zA-Z]{1,20}$')]),
      broj: new FormControl(covekBroj, [Validators.required, numberValidator]),
      mejl: new FormControl(covekMejl, [Validators.required, Validators.email])
    });
  }


}

function numberValidator(control: FormControl) {
  const broj = control.value;

  if (isValidNumber(broj)) {
   return null;
  } else{
   return Error;
 }
 }

