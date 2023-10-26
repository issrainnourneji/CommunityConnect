import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRessourceComponent } from './list-ressource/list-ressource.component';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import { UpdateRessourceComponent } from './update-ressource/update-ressource.component';
import { DeleteRessourceComponent } from './delete-ressource/delete-ressource.component';

const routes: Routes = [
    {path : '' , component : ListRessourceComponent},
    {path :'add' , component : AddRessourceComponent},
    {path :'update/:idR' , component : UpdateRessourceComponent},
    {path :'delete/:idR' , component : DeleteRessourceComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class GestionRessourceRouting {
}
