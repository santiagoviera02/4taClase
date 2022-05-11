import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

estudiantes = [
  {
    nombre: 'Ricardo',
    nota: 7,
    curso: 'Angular'
  },
  {
    nombre: 'Martina',
    nota: 10,
    curso: 'React'
  },
  {
    nombre: 'Jose',
    nota: 3,
    curso: 'Vue'
  }
]

