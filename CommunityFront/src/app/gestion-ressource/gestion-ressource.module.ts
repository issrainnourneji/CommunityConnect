import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import { DeleteRessourceComponent } from './delete-ressource/delete-ressource.component';
import { ListRessourceComponent } from './list-ressource/list-ressource.component';
import { UpdateRessourceComponent } from './update-ressource/update-ressource.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionRessourceRouting } from './gestion-ressource-routing.module';



@NgModule({
  declarations: [
    AddRessourceComponent,
    DeleteRessourceComponent,
    ListRessourceComponent,
    UpdateRessourceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GestionRessourceRouting
  ],
  exports : [
    ListRessourceComponent
  ]
})
export class GestionRessourceModule { }
