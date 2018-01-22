import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'fa-renderer-basics',
	templateUrl: './renderer-basics.component.html',
	styleUrls: ['./renderer-basics.component.css']
})
export class RendererBasicsComponent implements OnInit {
	@ViewChild('title') title: ElementRef;
	@ViewChild('input') input: ElementRef;

	constructor(private el: ElementRef, private renderer: Renderer2) {
		this.renderer.data.baseColor = 'red';
	}

	ngOnInit() {
		let nativeEl = <HTMLElement>this.el.nativeElement;
		let text = this.renderer.createText('Ce texte a été inséré par la classe RendererBasicsComponent grâce à la méthode "createText" du Renderer.');
		this.renderer.appendChild(nativeEl, text);
		// Appel d'une méthode native des éléments du DOM.
		this.input.nativeElement.focus();

		this.renderer.setStyle(this.title.nativeElement, 'color', this.renderer.data.baseColor);
		// this.renderer.insertBefore(nativeEl, title, this.para.nativeElement);
		console.info('Les données du renderer : ', this.renderer.data);
	}

}
