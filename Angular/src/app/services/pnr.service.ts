import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PnrService {

  constructor(private http: HttpClient) { }

  checkStatus(pnrNo: number): Observable<any>{
    let url = 'http://localhost:9191/spring-rest-mvc/pnr-status.lti?pnrNo='+pnrNo;
    return this.http.get(url);
  }
}
