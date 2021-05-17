import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contacts;

  constructor() { }

  ngOnInit(){
    // Le ngOnInit est une méthode du cycle de vie d'un component

    this.contacts = [
      {first: 'Steve', last: 'Jobs'},
      {first: 'Bill', last: 'Gates'},
      {first: 'Jeff', last: 'Bezos'},
      {first: 'Tim', last: 'Cook'},
      {first: 'Elon', last: 'Musk'},
      {first: 'Mark', last: 'Zuckerberg'}
    ]
  } // END OF OnInit

  deleteContact(contact){
    console.log(contact);
    // 1 Récuperer l'index du contact dans le tableau
    const index = this.contacts.indexOf(contact);
    console.log('index :', index);

    // 2 Utiliser la méthode splice
    this.contacts.splice(index,1);
    // array.splice(index, 1) nombre d'élément à suprimer
  }

  searchContact(userInput){
    console.log(userInput);
    this.contacts.filter (contact => contact.first.includes(userInput));
  }
} // END OF CLASS