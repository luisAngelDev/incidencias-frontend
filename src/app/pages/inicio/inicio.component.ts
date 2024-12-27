import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  usuario: string;

  constructor(

  ){}

  ngOnInit(): void{
    const helper = new JwtHelperService();

    let token = sessionStorage.getItem(environment.TOKEN_NAME);
    let username = sessionStorage.getItem(environment.USER_NAME)

    console.log("soy el token que esta en inicio")
    console.log(token)
    console.log(username)//testeo 

    this.usuario = username;
    
  }

}
