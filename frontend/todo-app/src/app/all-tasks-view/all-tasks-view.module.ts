import { NgModule } from "@angular/core";
import { AllTasksViewComponent } from "./all-tasks-view.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations: [
        AllTasksViewComponent,
        TasksComponent,
        TaskComponent
    ]
})
export class AllTasksViewModule { }