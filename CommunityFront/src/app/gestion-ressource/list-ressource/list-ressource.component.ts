import { Component, OnInit } from '@angular/core';
import { Ressource } from 'src/app/Models/ressource';
import { RessourceServiceService } from 'src/app/Services/ressource-service.service';

@Component({
  selector: 'app-list-ressource',
  templateUrl: './list-ressource.component.html',
  styleUrls: ['./list-ressource.component.css']
})
export class ListRessourceComponent implements OnInit {
  list:Ressource[]=[]
  constructor(private ressourceS : RessourceServiceService) { }

  ngOnInit(): void {
    this.getListRessource();
   console.log(this.list)
  }
  getListRessource(){
    this.ressourceS.getData().subscribe(
      data=>{this.list=data;
      console.log(this.list);

    }
    )

  }
  DeleteRessource(id:any){
    this.ressourceS.deleteRessource(Number(id)).subscribe( () =>this.getListRessource() );
  }

}
