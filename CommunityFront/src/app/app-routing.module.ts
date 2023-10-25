import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path: 'listEvent',
    loadChildren:() =>import('./gestion-departement/gestion-departement.module').then(m => m.GestionDepartementModule)
    },
    {
      path: 'Ressource',
      loadChildren:() =>import('./gestion-ressource/gestion-ressource.module').then(m => m.GestionRessourceModule)
      },
    {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
