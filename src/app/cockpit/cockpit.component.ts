import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

    @Output() taskText = new EventEmitter<{ text: string, isDone: boolean }>();

    text: string;

    constructor() { }

    ngOnInit(): void {}

    checkKey($event) {
        if ($event.charCode === 13) {
            this.sendData({ text: this.text });
        }
    }

    sendData(data: { text: string }) {
        console.log(data.text);
        if (data.text) {
            this.taskText.emit({ text: data.text, isDone: false });
            this.text = '';
        } else {
            alert('Input box cannot be empty!');
        }
    }
}
