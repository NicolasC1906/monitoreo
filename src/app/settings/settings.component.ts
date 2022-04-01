import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatAccordion} from '@angular/material/expansion';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerService } from '../services/spinner.service'; 
import {NgxPaginationModule} from 'ngx-pagination';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jsonEval } from '@firebase/util';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  id:any;
  subscriptions:Subscription[]=[];
  username: any;
  nombreuser: any;
  apellido: any;
  roles: any;
  users:any = [];
  iniciar:any;
  perfil:any;
  idUser:any;
  registered: any;
  rolName: any;
  last_login: any;

  step = 0;

  cp: number = 1;
  getCiudades: any = [];

  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;
  isEditable = false;
  nombre: any;
  lat: any;
  lng: any;
  err: any;


  

  constructor(
    private ApiService: ApiService,
    private SpinnerService: SpinnerService,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
    
  ) { }
  


  onPageChange(event: number):void{
    this.spinner.show();
    this.cp = event;

    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
    }, 1000);

  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  myControl = new FormControl();
  options: string[] = ['Bogotá', 'Bucaramanga', 'Medellin', 'Madrid'];
  



  


  openSnackBar(message: string, action: string){
   let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

   snackBarRef.afterDismissed().subscribe(() =>{
     console.log("Accion Ejecutada")
   });

   snackBarRef.onAction().subscribe(() =>{
    console.log("Cancelar Accion")
  });
      
  }

  tabLoadTimes: Date[] = [];

  hide = true;

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  
  

  ngOnInit() {

    this.getCity();

    if(localStorage.getItem('token')){
      this.iniciar = false;
      this.perfil = true;
      this.getInfo()


    }else{
      this.iniciar = true;
      this.perfil = false;
    }

    this.idUser = localStorage.getItem('id');


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

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



      getCity(){ 
        this.ApiService
        .getCitys() 
        .subscribe((resp : any) =>{
          let i;
          //console.log(resp)
          for(i in resp){
            this.getCiudades.push({
  
              "id":resp[i].id_ciudad,
              "nombre":resp[i].nombre,
              "longitud":resp[i].lat,
              "latitud":resp[i].lng,
            })
              //  console.log(this.getCiudades);
  
          }
  
        }
       );
  
  
      }

      SetCity() {

        let city =JSON.stringify({
          "nombre": "Cucuta",
          "lat": "6.230833",
          "lng": "-75.590553"
        }) 
        
        this.subscriptions.push(
          this.ApiService
          .CiudadesPost(city)
          .subscribe((r : any) => {
            console.log(r)
           
          })
        )
      }


}
