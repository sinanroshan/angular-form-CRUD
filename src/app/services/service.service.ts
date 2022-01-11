import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { List } from '../data/datas';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 private authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZiYzg4Mjg4ZWExOGE0NDRkODE2MDNhOGQyNjFhODIwNTA5ZThmMjg4ODY2MzRlY2E3YjE3NjQ4MjRmNDc0MzcyNzI4OGUyY2ZmMTBmMGE4In0.eyJhdWQiOiIxIiwianRpIjoiNmJjODgyODhlYTE4YTQ0NGQ4MTYwM2E4ZDI2MWE4MjA1MDllOGYyODg4NjYzNGVjYTdiMTc2NDgyNGY0NzQzNzI3Mjg4ZTJjZmYxMGYwYTgiLCJpYXQiOjE2NDE3OTU3MjYsIm5iZiI6MTY0MTc5NTcyNiwiZXhwIjoxNjczMzMxNzI2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.F7FDXbM9N1MWUQlJ7pEuYkWDL50_rjaiykZMoHesrM7BQ6uFOyWvhooVsUY1HSpUZnAOyW7vEzbfHT5CuGLi_cQGa6fBe5kMCbb6sPYvuBR-ItgCI7RoHBeglIOorG16jPgZtfWXLrApIfILXA4BNUWgduMs8gUaBzPIJE6TGB708GdD2fKl1gqo_YN4XmgJxgrgVUGz-BJLmpM4fZ6XGa-GOUldAo2NC3rZ1-xCe48iEkknWIwBRb8AU4kZnAgwVmUS4gzRvfZJ5uKeKUz5pAwHw8qvG79I91WvqKwgb1HVZol4id6FKQPQdmjBakMouZPmo5zsRbsYcQ6_mR2F9uzbVQ_0Rn3_CinYLN37PEYsFP0Ouau5szHM90yXvOGRf1VtIdixFqiJqVpwl2SYrsrW1xZ26xp1oDx3aveNYk3ZEm0THKt9XeA18uWbuoJ_FoUuBtyvD29G8CFmrNfl2jJDGwrqk7MW9GTLbDuVnuPFc9K9FWUBtoYGdtDCnQWCE1xNi65XnSVm5X5h4BOC0e1v_j02I8kEuo4twcI3ud_N_1ulEtIxEyEoBZZ4W_-v2uLqXFBDMTEWo4uGMQnb3zwQd6Xs1bDxY5M2047YTmHKPBE3h6DARofq5Hff9p-RR8MCNhvzN1wq1SveLnZlWXK2x3st801A-2dBX0JQBKk";


  constructor(private http: HttpClient) { }
  List(){
      let auth = `Bearer`+" "+this.authToken;
      let headers = new HttpHeaders();
      headers = headers.set('Authorization',auth);
    return this.http.get<any>('https://v2-dev-api.isorobot.io/api/v1/organization-policies',
    { headers : headers});
}


  SaveToList(data:FormGroup):Observable<any>{
    let auth = `Bearer`+" "+this.authToken;
      let headers = new HttpHeaders();
      headers = headers.set('Authorization',auth);
      return this.http.post<any>('https://v2-dev-api.isorobot.io/api/v1/organization-policies ',
      data.value,
    { headers : headers});
  }
  deleteItem(id:string){
    let auth = `Bearer`+" "+this.authToken;
    let headers = new HttpHeaders();
      headers = headers.set('Authorization',auth);
      return this.http.get<any>('https://v2-dev-api.isorobot.io/api/v1/organization-policies/'+id,
    { headers : headers});
  }
  updateItem(id:string,data:FormGroup){
    let auth = `Bearer`+" "+this.authToken;
    let headers = new HttpHeaders();
      headers = headers.set('Authorization',auth);
      return this.http.get<any>('https://v2-dev-api.isorobot.io/api/v1/organization-policies/'+id,
    { headers : headers});
  }
}
