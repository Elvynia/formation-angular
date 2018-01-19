import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
	selector: 'fa-only-content',
	templateUrl: './only-content.component.html',
	styleUrls: ['./only-content.component.css']
})
export class OnlyContentComponent implements OnInit {
	@ContentChild("title") title: any;
	@ContentChild("para") para: any;

	constructor() { }

	ngOnInit() {
		console.log('OnlyContentComponent -- OnInit');
		this.inspect();
	}

	ngAfterViewInit() {
		console.log('OnlyContentComponent -- AfterViewInit');
		this.inspect();
	}

	ngAfterViewChecked() {
		console.log('OnlyContentComponent -- AfterViewChecked');
		this.inspect();
	}

	ngAfterContentInit() {
		console.log('OnlyContentComponent -- AfterContentInit');
		this.inspect();
	}

	ngAfterContentChecked() {
		console.log('OnlyContentComponent -- AfterContentChecked');
		this.inspect();
	}

	private inspect() {
		console.log('Contenu de la propriété element: ' + JSON.stringify(this.title));
		console.log('Contenu de la propriété para: ' + JSON.stringify(this.para));
	}

	swap() {
		if (this.title && this.para) {
			let tmp = this.title.nativeElement.textContent;
			this.title.nativeElement.textContent = this.para.nativeElement.textContent;
			this.para.nativeElement.textContent = tmp;
		}
	}

}
