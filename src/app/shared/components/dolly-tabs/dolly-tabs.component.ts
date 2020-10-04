import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dolly-tabs',
  templateUrl: './dolly-tabs.component.html',
  styleUrls: ['./dolly-tabs.component.scss']
})
export class DollyTabsComponent implements OnInit {

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
