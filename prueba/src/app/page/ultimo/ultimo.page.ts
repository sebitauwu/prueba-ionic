import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ultimo',
  templateUrl: './ultimo.page.html',
  styleUrls: ['./ultimo.page.scss'],
})
export class UltimoPage implements OnInit {


  profesor: string = "francisco iturra";
  hora: string = "08:30";
  asignatura: string = "PGY4121-004D"
  alumno: string = "sebastian chavez"



  constructor( ) {

  
   }
  ngOnInit() {
  }



}
