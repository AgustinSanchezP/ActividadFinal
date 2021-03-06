import { Injectable } from '@angular/core';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  static listadoHuman(): any {
    throw new Error('Method not implemented.');
  }

  human: Person [] = [
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
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female"
      },
      {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female"
      },
      {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male"
      },
      {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      type: "Genetic experiment",
      gender: "Male"
      },
      {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male"
      },
      {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male"
      },
      {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      type: "Superhuman (Ghost trains summoner)",
      gender: "Male"
      },
      {
      id: 11,
      name: "Albert Einstein",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male"
      },
      {
      id: 12,
      name: "Alexander",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male"
      },
      {
      id: 17,
      name: "Annie",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female"
      },
      {
      id: 18,
      name: "Antenna Morty",
      status: "Alive",
      species: "Human",
      type: "Human with antennae",
      gender: "Male"
      },
      {
      id: 19,
      name: "Antenna Rick",
      status: "unknown",
      species: "Human",
      type: "Human with antennae",
      gender: "Male"
      },
      {
      id: 20,
      name: "Ants in my Eyes Johnson",
      status: "unknown",
      species: "Human",
      type: "Human with ants in his eyes",
      gender: "Male"
      }
    ];

    constructor() { }

    listadoHuman(): Person[] {
      return this.human;
    }
}

