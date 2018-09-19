import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'ang6sample';
	router: Router;

	constructor(_router: Router) {
		this.router = _router;
	}

	ngOnInit() {
		this.router.navigateByUrl('/signin');
	}
}
