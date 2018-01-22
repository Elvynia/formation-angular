import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, HostListener } from '@angular/core';

@Component({
	selector: 'fa-use-template-ref',
	templateUrl: './use-template-ref.component.html',
	styleUrls: ['./use-template-ref.component.css']
})
export class UseTemplateRefComponent implements OnInit {
	@ViewChild('tpl') template: TemplateRef<any>;

	constructor(private viewContainerRef: ViewContainerRef) { }

	ngOnInit() {
	}

	@HostListener('mouseenter')
	visible() {
		this.viewContainerRef.createEmbeddedView(this.template);
	}

	@HostListener('mouseleave')
	hidden() {
		this.viewContainerRef.clear();
	}
}
