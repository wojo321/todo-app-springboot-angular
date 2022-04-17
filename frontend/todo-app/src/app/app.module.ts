import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { AllTasksViewModule } from './all-tasks-view/all-tasks-view.module';
import { ToggleCollapseDropdownDirective } from './shared/toggle-collapse-dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavbarComponent,
    ToggleCollapseDropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllTasksViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
