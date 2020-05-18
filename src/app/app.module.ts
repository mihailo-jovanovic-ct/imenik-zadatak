import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LjudiComponent } from './ljudi/ljudi.component';
import { LjudiListaComponent } from './ljudi/ljudi-lista/ljudi-lista.component';
import { LjudiPodaciComponent } from './ljudi/ljudi-podaci/ljudi-podaci.component';
import { HeaderComponent } from './header/header.component';
import { LjudiJedanComponent } from './ljudi/ljudi-lista/ljudi-jedan/ljudi-jedan.component';
import { LjudiStartComponent } from './ljudi/ljudi-start/ljudi-start.component';
import { LjudiEditComponent } from './ljudi/ljudi-edit/ljudi-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LjudiFilterPipe } from './ljudi/ljudi-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LjudiComponent,
    LjudiListaComponent,
    LjudiPodaciComponent,
    HeaderComponent,
    LjudiJedanComponent,
    LjudiStartComponent,
    LjudiEditComponent,
    LjudiFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
