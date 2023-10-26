import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressource } from 'src/app/Models/ressource';
import { RessourceServiceService } from 'src/app/Services/ressource-service.service';

@Component({
  selector: 'app-update-ressource',
  templateUrl: './update-ressource.component.html',
  styleUrls: ['./update-ressource.component.css']
})
export class UpdateRessourceComponent implements OnInit {

  myId=0;
  myRessource!:Ressource;
  reactiveForm=this.fb.group(
    {
      idR:[''],
      name:[''],
      type:[''],
      location:[''],
      owner:['']
    }
  );
  constructor(private AR:ActivatedRoute,private fb:FormBuilder, private R:Router, private ressourceS:RessourceServiceService ) { }

  ngOnInit(): void {
    this.ressourceS.getRessourceById(this.AR.snapshot.params["idR"]).subscribe(data=>{
      this.myRessource=data;


      this.reactiveForm.patchValue({idR: this.myRessource.idR ,name:this.myRessource.name,type:this.myRessource.type,location:this.myRessource.location, owner:this.myRessource.owner});
      console.log(this.myRessource.name)
    });
}
  update(){
    this.ressourceS.UpdateRessource(this.reactiveForm.value).subscribe(data=>{

      this.R.navigate(['Ressource']);
      }
      )
  }
  get idR(){
    return this.reactiveForm.get('idR')
  }
  get name(){
    return this.reactiveForm.get('name');

  }
  get type(){
    return this.reactiveForm.get('type')
  }
  get location(){
    return this.reactiveForm.get('location');

  }
  get owner(){
    return this.reactiveForm.get('owner')
  }

}
