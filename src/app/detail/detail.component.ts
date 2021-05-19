import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id;
  contact;

  // On inject un object de la class ActivatedRoute
  constructor(private activatedRoute:ActivatedRoute,
    private contactService:ContactService) { }

  ngOnInit(): void {

    // 1/ Récupérer l'id dans l'url ActivatedRoute
    console.log(this.activatedRoute.snapshot.params);
    this.activatedRoute.snapshot.params.id;  // {id: 1, name: 'Fred'}

    // 2/ Récupérer le bon object dans dbContact (dans le service)
    this.contactService.getContacts()[this.id];

    // 3/ 
  }

}
