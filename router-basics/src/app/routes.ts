import { Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UseUrlParamComponent } from './use-url-param/use-url-param.component';
import { UseQueryParamComponent } from './use-query-param/use-query-param.component';
import { UseDataComponent } from './use-data/use-data.component';
import { UseChildrenComponent } from './use-children/use-children.component';
import { ChildComponent } from './child/child.component';

export const ROUTES: Routes = [{
	// Ce path correspond à la route par défaut, c'est à dire à '/' dans les liens de navigation.
	path: '',
	component: DefaultComponent
}, {
	path: 'hello',
	component: HelloComponent
}, {
	path: 'redirect-to-hello',
	redirectTo: 'hello'
}, {
	// Ce path est utilisé pour démontrer l'utilisation des variables dans l'URL (ex: "http://localhost/app/article/3").
	// https://angular.io/guide/router#route-parameters
	path: 'with-url-param/:text',
	component: UseUrlParamComponent
}, {
	// Ce path est utilisé pour démontrer l'utilisation des paramètres d'URL (ex: "http://localhost/app;lang=fr;key=value").
	// Contrairement aux paramètres d'URL classiques avec "?key=value&key2=value", Angular utilise la 'Matrix URL notation'
	// avec uniquement le ';'.
	// https://angular.io/guide/router#query-parameters
	path: 'with-query-param',
	component: UseQueryParamComponent
}, {
	// Ce path est utilisé pour démontrer l'utilisation de la propriété "data" d'une route.
	path: 'with-data',
	component: UseDataComponent,
	data: {
		id: 0,
		text: 'Les données inscrites dans la configuration des routes sont accessibles au component.'
	}
}, {
	// Ce path est utilisé pour démontrer l'utilisation de la propriété "data" d'une route.
	path: 'with-other-data',
	component: UseDataComponent,
	data: {
		id: 1,
		text: 'Il est donc possible de définir plusieurs routes avec le même component mais des valeurs de data différentes.'
	}
}, {
	// Ce path est utilisé pour démontrer l'utilisation des routes enfants.
	path: 'with-children',
	component: UseChildrenComponent,
	children: [{
		// Premier fils
		path: 'first-son',
		component: ChildComponent,
		data: {
			gender: -1,
			name: 'Frédéric'
		}
	}, {
		// Premier fils
		path: 'second-son',
		component: ChildComponent,
		data: {
			gender: -1,
			name: 'Jean'
		}
	}, {
		// Premier fils
		path: 'first-daughter',
		component: ChildComponent,
		data: {
			gender: 1,
			name: 'Hélène'
		}
	}, {
		// Premier fils
		path: 'seventh-son',
		component: ChildComponent,
		data: {
			gender: -1,
			name: 'The seventh son' 
		},
		children: [{
			path: 'seventh-son',
			component: ChildComponent,
			data: {
				gender: -1,
				name: 'The seventh son of a seventh son'
			}
		}]
	}]
}, {
	// Ce path est utilisé pour regrouper toutes les AUTRES routes non définies dans la constante ROUTES.
	// ATTENTION : Ce path '**' doit être situé en TOUT DERNIER pour pouvoir représenter "toutes les autres routes"
	// que celles qui sont valides (c'est à dire celle qui sont définies au dessus). Si on ajoute une route en dessous de '**',
	// elle ne sera jamais analysée. En effet le router analayse les routes dans l'ordre ou elles sont définies ici, et comme
	// le path '**' est toujours valide, on ne doit analyser la correspondance avec '**' que si tous les autres path ne correspondent pas.
	path: '**',
	component: NotFoundComponent
}];