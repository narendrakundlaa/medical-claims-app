import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() formGroup: FormGroup;
  @Input() model: any;
  @Input() type: any;
  @Input() placeholder: any;
  constructor() { }

  ngOnInit() {
  }
}
