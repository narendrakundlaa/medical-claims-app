import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tables-component',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  @Input() tableName: string = "Sample Table";

  @Input() items: any[];  // array of object
  @Input() headers: any; // any [] // array for headder fields 
  @Input() showApproveBtn: boolean = false;
  @Input() showRejectBtn: boolean = false;
  @Output() approve = new EventEmitter();
  @Output() refer = new EventEmitter();
  // @Output()
  constructor() { }

  ngOnInit() {
  }

  approver(data) {
    this.approve.emit(data);
  }
  referBack(data_id) {
    this.refer.emit(data_id);
  }

}
