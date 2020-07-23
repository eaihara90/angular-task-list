import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../interface/task-item';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {

    @Input() taskItem: TaskItem;

    @Output() deleteTask = new EventEmitter<{ id: number, isDone: boolean }>();
    @Output() updateTask = new EventEmitter<{ id: number, isDone: boolean }>();

    constructor() {}

    ngOnInit(): void {}

    sendDelete() {
        this.deleteTask.emit({ id: this.taskItem.id, isDone: this.taskItem.isDone });
    }

    sendDone() {
        this.taskItem.isDone = !this.taskItem.isDone;
        this.updateTask.emit({ id: this.taskItem.id, isDone: this.taskItem.isDone });
    }

}
