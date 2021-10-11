import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component'

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: '**', redirectTo: '/buttons' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
