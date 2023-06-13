import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { TasksComponent } from './tasks/tasks.component';
import { IssuesComponent } from './issues/issues.component';
import { SelectComponent } from './slect/slect.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    StakeholderComponent,
    TasksComponent,
    IssuesComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
