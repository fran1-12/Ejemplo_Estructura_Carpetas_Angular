import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../../constant/constant';
import { IuserList } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<IuserList[]>{
     return this.http.get<any[]>(constant.apiEndPoint.allUser);
  }
}
