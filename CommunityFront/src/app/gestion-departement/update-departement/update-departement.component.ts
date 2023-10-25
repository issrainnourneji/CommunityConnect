import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { DepartementServiceService } from 'src/app/Services/departement-service.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  myId=0;
  myDepart!:Departement;
  reactiveForm=this.fb.group(
    {
      idE:[''],
      nom:[''],
      description:[''],
      lieu:[''],
      organisateur:[''],
      date:[''],
      maxcapacite:['']
    }
  );
  constructor(private AR:ActivatedRoute,private fb:FormBuilder, private R:Router, private ServiceDep:DepartementServiceService ) { }

  ngOnInit(): void {
    this.ServiceDep.getDepartById(this.AR.snapshot.params["idE"]).subscribe(data=>{
      this.myDepart=data;


      this.reactiveForm.patchValue({idE: this.myDepart.idE ,nom:this.myDepart.nom,description:this.myDepart.description,lieu:this.myDepart.lieu,organisateur:this.myDepart.organisateur,date:this.myDepart.date,maxcapacite:this.myDepart.maxcapacite});
      console.log(this.myDepart.nom)
    });
}
  update(){
    this.ServiceDep.UpdateDepart(this.reactiveForm.value).subscribe(data=>{

      this.R.navigate(['listEvent']);
      }
      )
  }
  get idE(){
    return this.reactiveForm.get('idE')
  }
  get nom(){
    return this.reactiveForm.get('nom');

  }
  get description(){
    return this.reactiveForm.get('description')
  }
  get lieu(){
    return this.reactiveForm.get('lieu');

  }
  get organisateur(){
    return this.reactiveForm.get('organisateur')
  }
  get date(){
    return this.reactiveForm.get('date')
  }
  get maxcapacite(){
    return this.reactiveForm.get('maxcapacite');

  }
}
