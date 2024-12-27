import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  
  usuario: string;
  clave: string;
  mensaje: string;
  error: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){ }
  
  ngOnInit(): void {
    
  }

  iniciarSesion(){//se almacena el token en memoria
    
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
      
      sessionStorage.setItem(environment.TOKEN_NAME, data.token);
      sessionStorage.setItem(environment.USER_NAME, data.user.username);
      console.log("soy el token")
      console.log(data.token, data.user)
      this.router.navigate(['/pages/inicio'])

      
    });

  }

  /* ngAfterViewInit(){
    (window as any).initialize();
  }
 */

}
