import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'fa-use-data',
	templateUrl: './use-data.component.html',
	styleUrls: ['./use-data.component.css']
})
export class UseDataComponent implements OnInit {
	data: string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.data = JSON.stringify(this.route.snapshot.data);
		// Il est aussi possible d'utiliser this.route.data.subscribe(...).
		// Voir les components UseUrlParam et UseQueryParam pour plus d'explications.
	}

}
