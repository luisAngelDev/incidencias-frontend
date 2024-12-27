import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = `${environment.HOST}/login/`

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  
  login(usuario: string, contrasena: string){
    
    const body = `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(contrasena)}`;

    return this.http.post<any>(this.url, body,{
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')

    });
  }

  estaLogueado(){
    let token = sessionStorage.getItem(environment.TOKEN_NAME);
    return token != null;
  }

  cerrarSesion() {
    console.log('Entrando a cerrar sesión...');
    
    let token = sessionStorage.getItem(environment.TOKEN_NAME);
    console.log("SOY EL TOKEN GURDADO PARA CERRAR SESION")
    console.log(token)
  
    if (token) {
      this.http.post(`${environment.HOST}/logout/`, {}, {
        headers: new HttpHeaders().set('Authorization', `Token ${token}`)
      }).subscribe(() => {
        console.log('Sesión cerrada exitosamente.');
        sessionStorage.clear();
        this.router.navigate(['login']);
      }, error => {
        console.error('Error cerrando sesión:', error);
      });
    } else {
      console.warn('No hay token disponible en sessionStorage.');
      this.router.navigate(['login']);
    }
  }
  

}

 