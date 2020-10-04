import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isVisible = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['event'])
  onResize() {
    if (window.innerWidth <= 991) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  @HostListener('window:load', ['event'])
  onLoad() {
    if (window.innerWidth <= 991) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

}
