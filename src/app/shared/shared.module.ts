import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tab/tab.component';
import { DollyTabsComponent } from './components/dolly-tabs/dolly-tabs.component';

@NgModule({
  declarations: [
    TabComponent,
    DollyTabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    DollyTabsComponent
  ]
})
export class SharedModule { }
