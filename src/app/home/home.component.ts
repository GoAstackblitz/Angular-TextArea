import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  boundVal = "";
  reactiveFormCtrl = new FormControl();

  constructor() {}

  onChange(e: any) {
    console.log("changed", e.detail.name, e.detail.value);
  }
}
