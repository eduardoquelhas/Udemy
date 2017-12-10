import { Component, OnInit , Input } from '@angular/core';
import {EstudanteIF} from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: EstudanteIF 
  
  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log( `Estudante : ${this.student.name}`)
  }

  
}

