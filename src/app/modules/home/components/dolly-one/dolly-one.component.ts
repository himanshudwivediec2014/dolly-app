import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dolly-one',
  templateUrl: './dolly-one.component.html',
  styleUrls: ['./dolly-one.component.scss']
})
export class DollyOneComponent implements OnInit {

  tabsList = [];
  selectedTabId = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedTabId = 'awbOne';
    this.initializeTabs();    
    // const url = this.tabsList.filter(item => item.id === this.selectedTabId)[0].url
    // this.router.navigate(
    //   [`../${url}`], {
    //   relativeTo: this.activatedRoute
    // });
  }

  private initializeTabs() {
    this.tabsList = [
      {
        id: 'awbOne',
        displayName: 'AWB 1',
        url: 'awb-one'
      }, 
      {
        id: 'awbTwo',
        displayName: 'AWB 2',
        url: 'awb-two'
      }, 
      {
        id: 'awbThree',
        displayName: 'AWB 3',
        url: 'awb-three'
      }
    ];
  }

  public tabSelected(tabId) {
    this.selectedTabId = tabId;    
    // const url = this.tabsList.filter(item => item.id === tabId)[0].url
    // this.router.navigate(
    //   [`../${url}`], {
    //   relativeTo: this.activatedRoute
    // });
  }

}
