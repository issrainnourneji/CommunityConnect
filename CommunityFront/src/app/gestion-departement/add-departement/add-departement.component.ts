import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { DepartementServiceService } from 'src/app/Services/departement-service.service';


@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  Depart!:Departement[];
  constructor(private fb:FormBuilder ,private R:Router,  private departS: DepartementServiceService) { }

  ngOnInit(): void {
  }

  reactiveForm = this.fb.group({
    nom:['',[Validators.required]],
    description:['',[Validators.required]],
    lieu:['',[Validators.required]],
    organisateur:['',[Validators.required]],
    date:['',[Validators.required]],
    maxcapacite:['',[Validators.required]]

    });
  Add(){

    this.departS.AddDepart(this.reactiveForm.value).subscribe(data =>{
     console.log('add');
     this.R.navigate(['listEvent'])

    })
  }

  get idE(){
    return this.reactiveForm.get('idE')
  }
  get nom(){
    return this.reactiveForm.get('nom');

  }
  get description(){
    return this.reactiveForm.get('description');

  }
  get lieu(){
    return this.reactiveForm.get('lieu');

  }
  get organisateur(){
    return this.reactiveForm.get('organisateur');

  }
  get date(){
    return this.reactiveForm.get('date');

  }
  get maxcapacite(){
    return this.reactiveForm.get('maxcapacite');

  }
}
