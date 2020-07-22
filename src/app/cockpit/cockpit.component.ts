import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

    @Output() taskText = new EventEmitter<{ text: string }>();

    text: string;

    constructor() { }

    ngOnInit(): void {}

    checkKey($event) {
        if ($event.charCode === 13) {
        this.sendData(this.text);
        }
    }

    sendData(text: string) {
        if (text) {
            this.taskText.emit({ text: text });
            this.text = '';
        } else {
            alert('Input box cannot be empty!');
        }
    }
}
