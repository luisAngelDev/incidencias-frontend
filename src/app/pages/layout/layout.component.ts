import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  constructor(
    private loginService: LoginService
  ){}

  ngOnInit(): void {

  }

  cerrarSesion(){
    this.loginService.cerrarSesion();
  }

}
