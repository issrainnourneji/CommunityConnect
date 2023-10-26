import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceServiceService } from 'src/app/Services/ressource-service.service';

@Component({
  selector: 'app-delete-ressource',
  templateUrl: './delete-ressource.component.html',
  styleUrls: ['./delete-ressource.component.css'],
})
export class DeleteRessourceComponent implements OnInit {
  resourceId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: RessourceServiceService,
    private AR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.resourceId = +idParam;
    } else {
      this.router.navigate(['/Ressource']);
    }
  }
  confirmDelete() {
    this.resourceService.deleteRessource(this.resourceId).subscribe(() => {
      this.router.navigate(['/Ressource']);
    });
  }
  cancel() {
    this.router.navigate(['/Ressource']);
  }
}
