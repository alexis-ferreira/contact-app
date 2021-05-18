import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  dbContacts = [
    {first: 'Steve', last: 'Jobs', isFav: true},
    {first: 'Bill', last: 'Gates', isFav: false},
    {first: 'Jeff', last: 'Bezos', isFav: false},
    {first: 'Tim', last: 'Cook', isFav: false},
    {first: 'Elon', last: 'Musk', isFav: false},
    {first: 'Mark', last: 'Zuckerberg', isFav: false},
    {first: 'Jack', last: 'Dorsey', isFav: false},
    {first: 'Sundar', last: 'Pichai', isFav: false},
    {first: 'Daniel', last: 'Schulman', isFav: false},
    {first: 'Susan', last: 'Wojcicki', isFav: false},
    {first: 'Reed', last: 'Hastings', isFav: false},
    {first: 'Michael', last: 'Dell', isFav: false}
  ];

  /* 
  getContacts()
  doit être utilisable dans les components
  */
  getContacts() {
    return this.dbContacts
  }

  setFavValue(contact){
    // 1/ Rechercher le bon objet dans dbContacts
    const index = this.dbContacts.findIndex(contactInDb => contactInDb ==contact );

    // 2/ set la propriété isFav à true ou false
    this.dbContacts[index].isFav = !this.dbContacts[index].isFav;
    console.log(contact);
  }


} // END OF THE CLASS