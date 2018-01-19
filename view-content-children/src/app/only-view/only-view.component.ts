import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { SubViewComponent } from '../sub-view/sub-view.component';

@Component({
	selector: 'fa-only-view',
	templateUrl: './only-view.component.html',
	styleUrls: ['./only-view.component.css']
})
export class OnlyViewComponent implements OnInit {
	paraColor: string;
	@ViewChild('myChild') div: any;
	@ViewChild(SubViewComponent, { read: ElementRef }) subView: ElementRef;
	@ViewChildren("a") links: QueryList<any>;

	constructor(private el: ElementRef) {
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
		console.log('Contenu de la propriété subView: ' + JSON.stringify(this.subView));
	}

	update(event: Event) {
		this.paraColor = (<HTMLInputElement>event.target).value;
	}

}
