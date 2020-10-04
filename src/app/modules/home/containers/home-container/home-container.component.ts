import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  tabsList = [];
  selectedTabId = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedTabId = 'dollyOne';
    this.initializeTabs();    
    const url = this.tabsList.filter(item => item.id === this.selectedTabId)[0].url
    this.router.navigate([`../${url}`]);
  }

  initializeTabs() {
    this.tabsList = [
      {
        id: 'dollyOne',
        displayName: 'Dolly 1',
        logo: '../../../../assets/images/truck-logo.png',
        url: 'dolly-one'
      }, 
      {
        id: 'dollyTwo',
        displayName: 'Dolly 2',
        logo: '../../../../assets/images/truck-logo.png',
        url: 'dolly-two'
      }
    ];
  }

  tabChanged(tabId) {
    this.selectedTabId = tabId;    
    const url = this.tabsList.filter(item => item.id === tabId)[0].url
    this.router.navigate([`../${url}`]);
  }

}
