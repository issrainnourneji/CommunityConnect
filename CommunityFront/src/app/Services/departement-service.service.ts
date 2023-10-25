import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../Models/Departement';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  urlAdd='http://localhost:8084/event/add';
  urlApi = 'http://localhost:8084/event/GetAll';
  urlDel='http://localhost:8084/event/delete';
  urlById ='http://localhost:8084/event/get';
  urlup='http://localhost:8084/event/updatee';
  Departement=[];
  constructor(private http: HttpClient) { }
  getData():Observable<Departement[]> {
    return this.http.get<Departement[]>(this.urlApi);
}
  AddDepart(Departement: Departement):Observable<Departement>{
    return this.http.post<Departement>(this.urlAdd,Departement)
   }
   deleteUser(id:Number){
    return this.http.delete(this.urlDel+'/'+id);
  }
  getDepartById(id: Number){
    return this.http.get<Departement>(this.urlById+'/'+id);
  }
  UpdateDepart(departement:Departement){
    alert("success update");
    return this.http.put<Departement>(this.urlup, departement);
  }

  }



