import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive-form',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormPageModule)
  },
  {
    path: 'template-driven-form',
    loadChildren: () => import('./template-driven-form/template-driven-form.module').then(m => m.TemplateDrivenFormPageModule)
  },
  {
    path: 'timepicker-directive',
    loadChildren: () => import('./timepicker-directive/timepicker-directive.module').then(m => m.TimepickerDirectivePageModule)
  },
  {
    path: 'timepicker-component',
    loadChildren: () => import('./timepicker-component/timepicker-component.module').then(m => m.TimepickerComponentPageModule)
  },
  {
    path: 'timepicker-button',
    loadChildren: () => import('./timepicker-button/timepicker-button.module').then(m => m.TimepickerButtonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
