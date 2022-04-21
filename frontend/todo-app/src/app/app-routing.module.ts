import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-panel/main-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo-app', pathMatch: 'full' },
  { path: 'todo-app', component: MainViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
