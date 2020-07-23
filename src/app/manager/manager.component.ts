import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../interface/task-item';
import { TaskListService } from '../services/task-list.service';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.scss']
})

export class ManagerComponent implements OnInit {

    taskList: TaskItem[];

    constructor(private taskListService: TaskListService) {}

    ngOnInit(): void {
        this.taskList = this.taskListService.getTaskList();
    }

    addTask(taskItem: TaskItem) {
        this.taskListService.addTask(taskItem);
    }

    updateTask(taskItem: TaskItem) {
        this.taskListService.updateTask(taskItem);
    }

    deleteTask(taskItem: TaskItem) {
        this.taskListService.deleteTask(taskItem);
        this.taskList = this.taskListService.getTaskList();
    }

    clearAll(value: {flag: boolean}) {
        if (value.flag) {
            this.taskListService.clear();
            this.taskList = this.taskListService.getTaskList();
        }
    }
}
