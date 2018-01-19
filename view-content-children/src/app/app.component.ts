import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'fa-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('title') title: any;
	@ViewChild('para') para: any;

	private swapClass(elementName: string, className: string) {
		let element = <HTMLElement>this[elementName].nativeElement;
		if (element.classList.contains(className)) {
			element.classList.remove(className);
		} else {
			element.classList.add(className);
		}
	}
}
