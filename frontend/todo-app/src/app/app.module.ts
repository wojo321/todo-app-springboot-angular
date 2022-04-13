import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllTasksViewComponent } from './all-tasks-view/all-tasks-view.component';
import { TasksComponent } from './all-tasks-view/tasks/tasks.component';
import { TaskComponent } from './all-tasks-view/tasks/task/task.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllTasksViewComponent,
    TasksComponent,
    TaskComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
