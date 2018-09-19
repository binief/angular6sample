import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
	  
  }

	ngAfterViewInit(){
		this.loadScript('./assets/js/sb-admin-2.js');
	}

	public loadScript(url) {
		let node = document.createElement('script');
		node.src = url;
		node.type = 'text/javascript';
		document.getElementsByTagName('head')[0].appendChild(node);
	}
}
