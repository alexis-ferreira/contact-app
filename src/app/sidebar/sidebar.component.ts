import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // Propriété d'affichage
  favorites = [];


  constructor(private contactService: ContactService) {

  }

  ngOnInit(){

    // La méthode subscribe du subject fav$
      // -> va rééxecuter sa fonction callback ( en paramètre ) à chaque fois que la donnée dans fv$ va changer
    this.contactService.fav$.subscribe( favs => this.favorites = favs )

  }

}
