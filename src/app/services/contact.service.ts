import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  dbContacts = [
    {first: 'Steve', last: 'Jobs', email: 'stevejobs@apple.com', mobile: '(248) 123-7654', isFav: true},
    {first: 'Bill', last: 'Gates', email: 'billgates@microsoft.com', mobile: '(543) 432-7644', isFav: false},
    {first: 'Jeff', last: 'Bezos', email: 'jeffbezos@amazon.com', mobile: '(524) 378-6675', isFav: false},
    {first: 'Tim', last: 'Cook', email: 'tinycookie@apple.com', mobile: '(234) 743-5553', isFav: true},
    {first: 'Elon', last: 'Musk', email: 'justme@musk.com', mobile: '(435) 346-7434', isFav: false},
    {first: 'Mark', last: 'Zuckerberg', email: 'markus@fessebook.com', mobile: '(654) 478-8765', isFav: false},
    {first: 'Jack', last: 'Dorsey', email: 'jacky@bluebird.com', mobile: '(435) 234-5633', isFav: false},
    {first: 'Sundar', last: 'Pichai', email: 'sundarpichai@googleme.com', mobile: '(746) 875-2345', isFav: false},
    {first: 'Daniel', last: 'Schulman', email: 'dadaschul@paidme.com', mobile: '(435) 563-5342', isFav: false},
    {first: 'Susan', last: 'Wojcicki', email: 'susu@adadadadad.com', mobile: '(643) 345-0865', isFav: false},
    {first: 'Reed', last: 'Hastings', email: 'reereed@ichangedyourlife.com', mobile: '(354) 467-0754', isFav: false},
    {first: 'Michael', last: 'Dell', email: 'dell@dell.dell', mobile: '(754) 245-4352', isFav: false}
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