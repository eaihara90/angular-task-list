import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    @Input() id: number;
    @Input() text: string;

    @Output() changeTask = new EventEmitter<{ id: number }>();

    done: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    sendDelete() {
        this.changeTask.emit({ id: this.id });
    }

    taskDone() {
        this.done = !this.done;
    }

}
