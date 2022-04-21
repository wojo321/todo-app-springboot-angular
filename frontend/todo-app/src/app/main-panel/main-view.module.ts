import { NgModule } from "@angular/core";
import { MainViewComponent } from "./main-view.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewIdeasComponent } from './new-ideas/new-ideas.component';
import { MainViewRoutingModule } from "./main-view-routing.module";
import { NewIdeaComponent } from './new-ideas/new-idea/new-idea.component';

@NgModule({
    declarations: [
        MainViewComponent,
        TasksComponent,
        TaskComponent,
        NewIdeasComponent,
        NewIdeaComponent
    ],
    imports: [MainViewRoutingModule]
})
export class MainViewModule { }