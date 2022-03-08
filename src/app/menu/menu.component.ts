import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerService } from '../services/spinner.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Login Start
      id:any;
      subscriptions:Subscription[]=[];
      username: any;
      nombre: any;
      apellido: any;
      roles: any;
      users:any = [];
      iniciar:any;
      perfil:any;
      idUser:any;
      registered: any;
      rolName: any;
      last_login: any;
  // Login End

    constructor(

      private ApiService: ApiService,
      private SpinnerService: SpinnerService,
      private spinner: NgxSpinnerService,

    ) { }

    ngOnInit() {



      // login
        if(localStorage.getItem('token')){
          this.iniciar = false;
          this.perfil = true;
          this.getInfo()


        }else{
          this.iniciar = true;
          this.perfil = false;
        }

        this.idUser = localStorage.getItem('id');
    }


    getInfo(){
      // console.log("entro o no")
      this.id = localStorage.getItem("id")
      this.subscriptions.push(
          this.ApiService.getDataByID(this.id)
          .subscribe((r: any) => {
             // console.log(r);
             this.roles = localStorage.getItem('rol');
             this.username = r[0].username
             this.last_login = r[0].last_login
            // this.apellido = r.apellido registered
  
             //console.log(this.roles)
             this.users.push({
               "id":r[0].id,
               "username":r[0].username,
               "last_login":r[0].last_login,
            //   "apellido":r.apellido,
            //   "correo":r.correo,
            //   "dni":r.dni,
            //   "telefono":r.telefono,
            //   "direccion":r.direccion,
               "rol":r[0].rol,
             })
             //console.log(this.users)
             if(this.roles === "1"){
  
              this.rolName = "Administrador"
  
             }else if(this.roles === "2"){
              
              this.rolName = "Soporte"
  
             }else if(this.roles === "3"){
              
              this.rolName = "Cliente"
             
             }else{
  
               /*==============================================
                     Dirigir a Login
                /*==============================================*/
                  window.location.href = '/login';
  
  
             }
          }
  
          ));
        }


        logout(){
          Swal.fire({
            title: '¿Estas seguro que desea cerrar sesion?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Cerrar Sesion!',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem('rol');
              localStorage.removeItem('token');
              localStorage.removeItem('id');
      
              window.location.href = '/'
            }
          });
          ;
        }
}
