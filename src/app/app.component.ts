import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { MongoClient } from 'mongodb';

@Component({
  selector: 'app-root',
  //template: '<date-picker> </date-picker>',
  templateUrl: './app.component.html'
  
  
 // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  private data:any = []
  constructor(private http: HttpClient) {
    
  }
  
 
  getData(){

    this.http.get('http://localhost:5000/Patients').subscribe(data => {
      console.log(data);
    });
  }
 }
