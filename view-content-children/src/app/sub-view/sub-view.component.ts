import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
	selector: 'fa-sub-view',
	templateUrl: './sub-view.component.html',
	styleUrls: ['./sub-view.component.css']
})
export class SubViewComponent implements OnInit {
	time: moment.Moment;
	intervalId: number;

	constructor() {
		this.time = moment();
	}

	ngOnInit() {
	}

	start() {
		this.intervalId = window.setInterval(() => {
			this.time.add(1, 'seconds');
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = undefined;
	}

}
