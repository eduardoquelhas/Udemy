import { Component } from '@angular/core';
import { EstudanteIF } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Estudantes : EstudanteIF[] = [
    { name: 'Luke', isJedi: true , temple: 'Barueri' },
    { name: 'Hans Solo', isJedi: true , temple: 'Osasco' },
    { name: 'Leia Irmã do Luke', isJedi: false , temple: 'Coruscant' } ]
}
