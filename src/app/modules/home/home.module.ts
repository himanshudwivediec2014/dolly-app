import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DollyOneComponent } from './components/dolly-one/dolly-one.component';
import { DollyTwoComponent } from './components/dolly-two/dolly-two.component';
import { AwbOneComponent } from './components/dolly-one/dolly-one-components/awb-one/awb-one.component';
import { AwbTwoComponent } from './components/dolly-one/dolly-one-components/awb-two/awb-two.component';
import { AwbThreeComponent } from './components/dolly-one/dolly-one-components/awb-three/awb-three.component';

@NgModule({
  declarations: [
    HomeContainerComponent, 
    HeaderComponent, 
    DollyOneComponent, 
    DollyTwoComponent, AwbOneComponent, AwbTwoComponent, AwbThreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
