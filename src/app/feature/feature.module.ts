import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [
    MainPanelComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
