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
  Ressource=[];
  constructor(private http: HttpClient) { }
  getData():Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.urlApi);
}
  AddRessource(Ressource: Ressource):Observable<Ressource>{
    return this.http.post<Ressource>(this.urlAdd,Ressource)
   }
   deleteRessource(id:Number){
    return this.http.delete(this.urlDel+'/'+id);
  }
  getRessourceById(id: Number){
    return this.http.get<Ressource>(this.urlById+'/'+id);
  }
  UpdateRessource(Ressource:Ressource){
    alert("success update");
    return this.http.put<Ressource>(this.urlup, Ressource);
  }

}
