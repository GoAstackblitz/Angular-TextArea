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
  checkbox1Checked = false;
  checkbox2Checked = true;
  checkbox3Checked = false;
  reactiveFormCtrl = new FormControl();
  testFormCtrl = new FormControl("checked");
  test1FormCtrl = new FormControl();
  bindingVal = "";
  bindingNoVal = "";
  
  constructor() {}
  
  onChange() {
    this.checkbox1Checked = !this.checkbox1Checked;
  }
  
  onChange2() {
    this.checkbox2Checked = !this.checkbox2Checked;
  }
  
  onChange3() {
    this.checkbox3Checked = !this.checkbox3Checked;
  }
  }
