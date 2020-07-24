import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ManagerComponent } from './manager/manager.component';
import { TaskListService } from './services/task-list.service';
import { StorageService } from './services/storage.service';

@NgModule
({
    declarations: 
    [
        AppComponent,
        TaskComponent,
        CockpitComponent,
        ManagerComponent
    ],
    imports: 
    [
        BrowserModule,
        FormsModule
    ],
    providers:
    [
        StorageService,
        TaskListService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
