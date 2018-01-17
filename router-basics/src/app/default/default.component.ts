import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'fa-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
	urlParam: string;
	queryParam: string;

	constructor() { }

	ngOnInit() {
	}

}
