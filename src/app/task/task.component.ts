import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../interface/task-item';

@Component
({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit
{
    @Input() taskItem: TaskItem;

    @Output() deleteTask = new EventEmitter<TaskItem>();
    @Output() updateTask = new EventEmitter<TaskItem>();

    constructor() {}

    ngOnInit(): void {}

    sendDelete()
    {
        this.deleteTask.emit(this.taskItem);
    }

    sendDone()
    {
        this.taskItem.isDone = !this.taskItem.isDone;
        this.updateTask.emit(this.taskItem);
    }
}
