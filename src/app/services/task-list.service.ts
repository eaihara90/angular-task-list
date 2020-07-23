import { Injectable } from '@angular/core';
import { TaskItem } from '../interface/task-item';
import { StorageService } from './storage.service';

const taskListStorageKey = 'Task_List';

@Injectable({
    providedIn: 'root'
})

export class TaskListService {
    private taskList: TaskItem[];

    constructor(private storageService: StorageService) {
        this.taskList = storageService.getData(taskListStorageKey) ? storageService.getData(taskListStorageKey) : this.taskList = [];
    }

    getTaskList() {
        return this.taskList;
    }

    addTask(task: TaskItem) {
        task.id = this.taskList.length + 1;
        this.taskList.push(task);
        this.saveList();
    }

    deleteTask(taskItem: TaskItem) {
        this.taskList.splice(taskItem.id - 1, 1);
        const newTaskList = this.taskList;
        this.taskList = [];
        
        newTaskList.forEach(task => this.addTask({
            id: this.taskList.length + 1,
            text: task.text,
            isDone: task.isDone
        }));

        this.saveList();
    }

    updateTask(taskItem: TaskItem) {
        this.taskList[taskItem.id - 1].isDone = taskItem.isDone;
        this.saveList();
    }

    saveList() {
        this.storageService.setData(taskListStorageKey, this.taskList);
    }

    clear() {
        this.taskList = [];
        this.storageService.clearData();
    }
}
