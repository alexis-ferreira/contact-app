import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dbContacts;
  contacts;

  /*
    INJECTION DE DEPENDANCE
    permet de passer à notre component 
    un objet d'une class exterieure
    -> ici on injecte dans ListComponent, un objet de ContactService
  */
    constructor(private contactService: ContactService) {
      console.log(this);
      // Maintenant on peut accéder aux propriétés et méthodes du service
      // Exemple : this.contactService.getContacts()
    }

  ngOnInit(){
    // Le ngOnInit est une méthode du cycle de vie d'un component

    this.contacts = [...this.contactService.getContacts()];
  } // END OF OnInit

  deleteContact(contact){
    // console.log(contact);
    if(confirm('Voulez vous vraiment supprimer cet utilisateur ?')){
      // 1 Récuperer l'index du contact dans le tableau
    const index = this.contacts.indexOf(contact);
    // console.log('index :', index);

    // 2 Utiliser la méthode splice
    // this.contacts.splice(index,1);
    // array.splice(index, 1) nombre d'élément à suprimer
    this.contactService.getContacts().splice(index, 1);
    this.contacts = [...this.contactService.getContacts()];
    }
  }

  searchContact(userInput){
    // console.log(userInput);
    // array.filter( (item) => item.first.includes(userInput) )
    userInput = userInput.toLowerCase();
    this.contacts = this.contactService.getContacts().filter(
      (contact) =>
      contact.first.toLowerCase().includes(userInput) ||
      contact.last.toLowerCase().includes(userInput) ||
      (contact.first.toLowerCase() + ' ' + contact.last.toLowerCase()).includes(userInput) ||
      (contact.last.toLowerCase() + ' ' + contact.first.toLowerCase()).includes(userInput))
  }

  setFav(contact){
    // console.log(contact);
    this.contactService.setFavValue(contact);
  }

  getColor(contact){
    return contact.isFav ? 'orange' : 'black'
  }
} // END OF CLASS