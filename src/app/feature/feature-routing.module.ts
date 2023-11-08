import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPanelComponent } from './main-panel/main-panel.component';

const routes: Routes = [
  { path: '', component: MainPanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
