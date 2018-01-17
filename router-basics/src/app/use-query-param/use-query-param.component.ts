import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'fa-use-query-param',
	templateUrl: './use-query-param.component.html',
	styleUrls: ['./use-query-param.component.css']
})
export class UseQueryParamComponent implements OnInit {
	myParam: string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		// Récupérer avec le snapshot : https://angular.io/guide/router#snapshot-the-no-observable-alternative
		// Cette méthode ne permet de récupérer le paramètre qu'une seule fois à l'initialisation de la route. 
		// Mais si l'utilisateur doit pouvoir changer ce paramètre en restant sur cette route (c'est à dire en
		// restant sur cet écran, sur ce component déjà initialisé), alors il faut utiliser le mode avec Observable.
		this.myParam = this.route.snapshot.queryParams.text;
		// Récupérer le paramètre en souscrivant à l'observable des paramètres d'URL : 
		this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
			// L'utilisation de la clé 'text' correspond
			// au nom du paramètre ':text' dans l'URL de la route.
			this.myParam = paramMap.get('text');
		});
		// Il existe 'queryParams' et 'queryParamMap' autant dans snapshot qu'avec un Observable.
		// Seule l'utilisation ".key" ou ".get('key')" est différente.
	}

}
