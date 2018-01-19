import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { SubViewComponent } from '../sub-view/sub-view.component';

@Component({
	selector: 'fa-only-view',
	templateUrl: './only-view.component.html',
	styleUrls: ['./only-view.component.css']
})
export class OnlyViewComponent implements OnInit {
	paraColor: string;
	@ViewChild('myChild') div: any;
	@ViewChildren("fa-sub-view") subViews: QueryList<any>;
	@ViewChildren("a") links: QueryList<any>;

	constructor() {
		this.paraColor = 'red';
	}

	ngOnInit() {
		console.log('OnlyViewComponent -- OnInit');
		this.inspect();
	}

	ngAfterViewInit() {
		console.log('OnlyViewComponent -- AfterViewInit');
		this.inspect();
	}

	ngAfterViewChecked() {
		console.log('OnlyViewComponent -- AfterViewChecked');
		this.inspect();
	}

	inspect() {
		console.log('Contenu de la propriété div: ' + JSON.stringify(this.div));
		console.log('Contenu de la propriété links: ' + JSON.stringify(this.links));
		console.log('Contenu de la propriété subViews: ' + JSON.stringify(this.subViews));
	}

	update(event: Event) {
		this.paraColor = (<HTMLInputElement>event.target).value;
	}

}
