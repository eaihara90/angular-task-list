import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'task';

    taskList: any[] = [];

    addTask(data: { text: string }) {
        this.taskList.push({ id: this.taskList.length + 1, text: data.text});
    }

    deleteTask(data: { id: number }) {
        this.taskList.splice(data.id - 1, 1);
        const newTaskList = this.taskList;
        this.taskList = [];
        newTaskList.forEach(task => this.addTask({ text: task.text }));
    }
}
