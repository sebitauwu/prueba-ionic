import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  formLogin={

    usuario: "",
    password: ""

  }


  usuario: string = ""
  password: string = ""

  ngOnInit() {
  }

  iniciarSesion(){

   console.log("usuario: " + this.formLogin.usuario)
   console.log("password: " + this.formLogin.password)

   let datosEnviar : NavigationExtras = {

    queryParams : {usuario: this.formLogin.usuario}

   }


   this.router.navigate(['/home'], datosEnviar);

  }

}
