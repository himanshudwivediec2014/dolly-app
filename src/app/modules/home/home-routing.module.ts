import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { DollyOneComponent } from './components/dolly-one/dolly-one.component';
import { DollyTwoComponent } from './components/dolly-two/dolly-two.component';
import { AwbOneComponent } from './components/dolly-one/dolly-one-components/awb-one/awb-one.component';
import { AwbTwoComponent } from './components/dolly-one/dolly-one-components/awb-two/awb-two.component';
import { AwbThreeComponent } from './components/dolly-one/dolly-one-components/awb-three/awb-three.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path: 'dolly-one',
        component: DollyOneComponent,
        children: [
          {
            path: 'awb-one',
            component: AwbOneComponent
          }, {
            path: 'awb-two',
            component: AwbTwoComponent
          }, {
            path: 'awb-three',
            component: AwbThreeComponent
          }
        ]
      }, { 
        path: 'dolly-two',
        component: DollyTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
