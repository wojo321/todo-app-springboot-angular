import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./tasks/tasks.component";
import { NewIdeasComponent } from './new-ideas/new-ideas.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'new-ideas', component: NewIdeasComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule { }
