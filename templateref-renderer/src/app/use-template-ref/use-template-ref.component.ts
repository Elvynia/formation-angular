import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
	selector: 'fa-use-template-ref',
	templateUrl: './use-template-ref.component.html',
	styleUrls: ['./use-template-ref.component.css']
})
export class UseTemplateRefComponent implements OnInit {
	@Input() templateUrl: string;
	@Input() templateRef: TemplateRef<any>;

	constructor() { }

	ngOnInit() {
	}

}
