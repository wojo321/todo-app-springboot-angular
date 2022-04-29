import { NgModule } from "@angular/core";
import { MainViewComponent } from "./main-view.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewIdeasComponent } from './new-ideas/new-ideas.component';
import { MainViewRoutingModule } from "./main-view-routing.module";
import { NewIdeaComponent } from './new-ideas/new-idea/new-idea.component';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MainViewComponent,
        TasksComponent,
        TaskComponent,
        NewIdeasComponent,
        NewIdeaComponent,
        SideNavbarComponent,
    ],
    imports: [
        MainViewRoutingModule,
        CommonModule
    ]
})
export class MainViewModule { }