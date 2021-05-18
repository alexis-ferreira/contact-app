import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  dbContacts = [
    {first: 'Steve', last: 'Jobs', isFav: true},
    {first: 'Bill', last: 'Gates', isFav: false},
    {first: 'Jeff', last: 'Bezos', isFav: false},
    {first: 'Tim', last: 'Cook', isFav: true},
    {first: 'Elon', last: 'Musk', isFav: false},
    {first: 'Mark', last: 'Zuckerberg', isFav: false},
    {first: 'Jack', last: 'Dorsey', isFav: false},
    {first: 'Sundar', last: 'Pichai', isFav: false},
    {first: 'Daniel', last: 'Schulman', isFav: false},
    {first: 'Susan', last: 'Wojcicki', isFav: false},
    {first: 'Reed', last: 'Hastings', isFav: false},
    {first: 'Michael', last: 'Dell', isFav: false}
  ];

  // fav$ est un objet de type Subject
  // Il dispode de deux méthode particulière :
  //  - this.favs$.next(data)
  //  - this.favs$.subscribe(callback qui s'éxécutera à chaque changement)

  favorite = [];
  fav$ = new BehaviorSubject(this.getFav());

  /* 
  getContacts()
  doit être utilisable dans les components
  */
  getContacts() {
    return this.dbContacts
  }

  getFav (){
    return this.dbContacts.filter( contact => contact.isFav);
  }

  setFavValue(contact){
    // 1/ Rechercher le bon objet dans dbContacts
    const index = this.dbContacts.findIndex(contactInDb => contactInDb ==contact );

    // 2/ set la propriété isFav à true ou false
    this.dbContacts[index].isFav = !this.dbContacts[index].isFav;
    console.log(contact);

    // 3/ J'envoie les favoris dans le subjects fav$
    this.favorite = this.dbContacts.filter(contact => contact.isFav);
    this.fav$.next(this.favorite);
    console.log(this.fav$);
  }


} // END OF THE CLASS