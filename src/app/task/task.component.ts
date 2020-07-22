import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() id: number;
    @Input() text: string;
    @Input() isDone: boolean;

    @Output() deleteTask = new EventEmitter<{ id: number, isDone: boolean }>();
    @Output() updateTask = new EventEmitter<{ id: number, isDone: boolean }>();


    constructor() {}

    ngOnInit(): void {}

    sendDelete() {
        this.deleteTask.emit({ id: this.id, isDone: this.isDone });
    }

    sendDone() {
        this.isDone = !this.isDone;
        this.updateTask.emit({ id: this.id, isDone: this.isDone });
    }

}
