import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'fa-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	gender: number;
	name: string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		let data = this.route.snapshot.data;
		this.gender = data.gender;
		this.name = data.name;
	}

}
