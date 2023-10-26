import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ressource } from 'src/app/Models/ressource';
import { RessourceServiceService } from 'src/app/Services/ressource-service.service';

@Component({
  selector: 'app-add-ressource',
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.css']
})
export class AddRessourceComponent implements OnInit {

  Ressource!:Ressource[];
  constructor(private fb:FormBuilder ,private R:Router,  private RessourceS: RessourceServiceService) { }

  ngOnInit(): void {
  }

  reactiveForm = this.fb.group({
    name:['',[Validators.required]],
    type:['',[Validators.required]],
    location:['',[Validators.required]],
    owner:['',[Validators.required]]

    });
  Add(){

    this.RessourceS.AddRessource(this.reactiveForm.value).subscribe(data =>{
     console.log('add');
     this.R.navigate(['Ressource'])

    })
  }

  get idR(){
    return this.reactiveForm.get('idR')
  }
  get name(){
    return this.reactiveForm.get('name');

  }
  get type(){
    return this.reactiveForm.get('type');

  }
  get location(){
    return this.reactiveForm.get('location');

  }
  get owner(){
    return this.reactiveForm.get('owner');

  }

}
