import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  field1 = {'name':'Source','type':'text','iconSide':'left-side','icon':'fa fa-search'};
  field2 = {'name':'Destination','type':'text','iconSide':'left-side','icon':'fa fa-search'};
  field3 = {'name':'Email','type':'text','iconSide':'left-side','icon':'fas fa-envelope'};
  field4 = {'name':'Date','type':'select','iconSide':'left-side','icon':'fal fa-calendar-alt'};
  field5 = {'name':'Pax','type':'select','iconSide':'left-side','icon':'fa fa-users'};
  field6 = {'name':'Mode of Travel','type':'select','iconSide':'left-side'};

}
