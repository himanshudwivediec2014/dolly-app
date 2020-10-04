import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tabList = [];
  @Input() selectedTabId = '';

  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public selectTab(tabId): void {
    this.selectionChange.emit(tabId);
  }

}
