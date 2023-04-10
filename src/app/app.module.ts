import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxDatePickerModule } from "igniteui-angular";
import { DatePicker } from './date-picker/date-picker.component';
import { card } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { PatientListComponent } from './patient-list/patient-list.component';
//import { PatientListComponent } from './patient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatePicker,
    card,
    PatientListComponent
    
  ],
  imports: [
   BrowserModule,
  BrowserAnimationsModule,
	FormsModule,
	IgxDatePickerModule,
  ReactiveFormsModule,
  MatCardModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: []
})
export class AppModule { }

 
