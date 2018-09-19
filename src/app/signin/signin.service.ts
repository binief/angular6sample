import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

	constructor(private http: HttpClient) { }

	auth(username, password): Observable<any> {

		let apiURL = "http://localhost/ang6_api/auth.php";

		return this.http.post(apiURL, {
			"username": username,
			"password": password
		}).pipe(map(res => res));

	}
}
