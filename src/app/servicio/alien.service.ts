import { Injectable } from '@angular/core';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class AlienService {
  static listadoAlien(): any {
    throw new Error('Method not implemented.');
  }

  alien: Person [] = [
      {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female"
      },
      {
      id: 13,
      name: "Alien Googah",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "unknown"
      },
      {
      id: 14,
      name: "Alien Morty",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male"
      },
      {
      id: 15,
      name: "Alien Rick",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male"
      },
      {
      id: 16,
      name: "Amish Cyborg",
      status: "Dead",
      species: "Alien",
      type: "Parasite",
      gender: "Male"
      }
    ];

    constructor() { }

    listadoAlien(): Person[] {
      return this.alien;
    }
}
