import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Ressource } from '../Models/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceServiceService {
  urlAdd='http://localhost:8081/AppWebDist/ressource/add';
  urlApi = 'http://localhost:8081/AppWebDist/ressource/retrieveAllRessource';
  urlDel='http://localhost:8081/AppWebDist/ressource/remove';
  urlById ='http://localhost:8081/AppWebDist/ressource/get';
  urlup='http://localhost:8081/AppWebDist/ressource/update';
  Departement=[];
  constructor(private http: HttpClient) { }
  getData():Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.urlApi);
}
  AddDepart(Departement: Ressource):Observable<Ressource>{
    return this.http.post<Ressource>(this.urlAdd,Departement)
   }
   deleteUser(id:Number){
    return this.http.delete(this.urlDel+'/'+id);
  }
  getDepartById(id: Number){
    return this.http.get<Ressource>(this.urlById+'/'+id);
  }
  UpdateDepart(departement:Ressource){
    alert("success update");
    return this.http.put<Ressource>(this.urlup, departement);
  }

}
