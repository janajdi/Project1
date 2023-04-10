import { Component } from '@angular/core';

@Component({
  selector: 'date-picker',
  styleUrls: ['date-picker.component.css'],
  templateUrl: 'date-picker.component.html'
})
export class DatePicker {
    public date = new Date();
}
