import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../interface/task-item';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.scss']
})

export class ManagerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    taskList: TaskItem[] = [];

    addTask(data: { text: string, isDone: boolean }) {
        const newTask: TaskItem = {
            id: this.taskList.length + 1,
            text: data.text,
            isDone: data.isDone
        }

        this.taskList.push(newTask);
    }

    updateTask(data: { id: number, isDone: boolean }) {
        this.taskList[data.id - 1].isDone = data.isDone;
    }

    deleteTask(data: { id: number }) {
        this.taskList.splice(data.id - 1, 1);
        const newTaskList = this.taskList;
        this.taskList = [];
        
        newTaskList.forEach(task => this.addTask({
            text: task.text,
            isDone: task.isDone
        }));
    }
}
