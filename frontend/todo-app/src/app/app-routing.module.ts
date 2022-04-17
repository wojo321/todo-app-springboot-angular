import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksViewComponent } from './all-tasks-view/all-tasks-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo-app', pathMatch: 'full' },
  { path: 'todo-app', component: AllTasksViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
