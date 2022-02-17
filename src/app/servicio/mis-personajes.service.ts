import { Injectable } from '@angular/core';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class MisPersonajesService {
  static listadoMisPersonajes(): any {
    throw new Error('Method not implemented.');
  }

  misPersonajes: Person [] = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      },
      {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male"
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
      }
    ];

    constructor() { }

    listadoMisPersonajes(): Person[] {
      return this.misPersonajes;
    }
}
