import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LjudiComponent } from './ljudi/ljudi.component';
import { LjudiStartComponent } from './ljudi/ljudi-start/ljudi-start.component';
import { LjudiPodaciComponent } from './ljudi/ljudi-podaci/ljudi-podaci.component';
import { LjudiEditComponent } from './ljudi/ljudi-edit/ljudi-edit.component';


const appRoutes: Routes = [
  { path: 'imenik', component: LjudiComponent, children: [
    { path: 'imenik', component: LjudiStartComponent },
    { path: 'new', component: LjudiEditComponent },
    { path: ':id', component: LjudiPodaciComponent },
    { path: ':id/edit', component: LjudiEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
