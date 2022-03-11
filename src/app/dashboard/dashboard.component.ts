import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType, ChartDataset, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerService } from '../services/spinner.service'; 
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  

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
  idSensors: any;
  infoMirrors: any;
  idRasp: any;
  nameRasp: any;
  sitioRasp: any;
  ubiRasp: any;
  statusRasp: any;
  infoResp: any;
  getInfoRasp: any = [];
  stacts: any = [];
  staticTrue: any;
  staticFalse: any;
  staticWarning: any;
  impactosMes: any;
  impactosUp: any;
  idSite: any;
  impactosSites: any;
  idName: any;
historico: any = [];
label:any;
  fechaAlarma: any;
  raspberryFalse: any;
  idEspejoFalse: any;
  cp: number = 1;
  

  
  constructor(

    private ApiService: ApiService,
    private SpinnerService: SpinnerService,
    private spinner: NgxSpinnerService,

  ) { 

    // this.ApiService.getUser().subscribe(resp=>{
    //   console.log("Esta es la respuesta del api",resp)
    // })

  }

  ngOnInit(): void {

    this.getMirrorSiteInfo();
    this.getMirrorInfo();
    this.getStacts();
    this.getImpactosMes();
    this.getImpactosSite();
    this.getHistorico();
    this.getAlarmasStats();
    

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

  paginado(event: number):void{
    this.spinner.show();
    this.cp = event;

    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
    }, 1000);

  }

  onPageChange(event: number):void{
    this.spinner.show();
    this.cp = event;

    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
    }, 1000);

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




      getMirrorSiteInfo(){
        //console.log(this.id);
      this.subscriptions.push(
      this.ApiService
      .getSensors(this.idSensors)
      .subscribe((r: any) => {
        let i;
        for(i in r){
          //console.log(r[i].arduino === "True")
         
          let count = Object.keys(r[i].arduino === "true").length;

          //console.log("arduino",count)

        
      }
    }
      ));
    }

    

    

    getMirrorInfo(){ 
      this.ApiService
      .getInfoMirror() 
      .subscribe((resp : any) =>{
        let i;
        for(i in resp){
          this.getInfoRasp.push({

            "id":resp[i].id_espejo,
            "nombre":resp[i].nombre,
            "sitio":resp[i].id_sitio,
            "acomodacion":resp[i].ubicacion,
            "estado":resp[i].estado,
          })
          //  console.log(this.getInfoRasp);

        }

      }
     );


    }

    getStacts(){ 
      this.ApiService
      .getStacs() 
      .subscribe((resp : any) =>{
        let i;
        for(i in resp){
          if(resp[i].sensores === "True"){

            this.staticTrue = {
            "sensores":resp[i].sensores,
            "total":resp[i].total
            }

          }if(resp[i].sensores === "False"){

            this.staticFalse = {
            "sensores":resp[i].sensores,
            "total":resp[i].total
            }

          }if(resp[i].sensores === "Warning"){

            this.staticWarning = {
            "sensores":resp[i].sensores,
            "total":resp[i].total
            }

          }else if(resp[i].sensores === "NULL"){
          }
          

        }

      }
     );


    }
    async     getHistorico(){ 
      this.ApiService
      .getHistorico() 
      .subscribe((resp : any) =>{
        let i;
        for(i in resp){
          this.historico.push({
            data: [resp[i].impactos],
            label:new Date(resp[i].ult_actualizacion).toLocaleString()
          })  
           console.log("Esto es el historico",this.historico)
            
          


        }

      }
     );


    }

    getImpactosMes(){
    // console.log(id)
    //console.log(t his.id);
    this.subscriptions.push(
      this.ApiService
      .getImpactos() 
        .subscribe((r: any) => {
          this.impactosMes = r[0].impactos
          this.impactosUp =r[0].ult_actualizacion
          //console.log(r[0].impactos)
        
        }
      ));

  }






  getImpactosSite(){
    // console.log("entro o no")
    this.idSite = "1"
    this.subscriptions.push(
        this.ApiService.getImpactosSite(this.idSite)
        .subscribe((r: any) => {
            // console.log(r);
           this.impactosSites =  r[0].impactos;
          // this.apellido = r.apellido registered

           //console.log(this.roles)
           this.users.push({
             "impactosSites":r[0].impactos
           })
           //console.log(this.users)
           if(this.idSite === "1"){

            this.idName = "Unicentro"
           

           }else if(this.idSite === "2"){
            
            this.idName = "Soporte"
            console.log("no entra")
           }
        }

        ));
      }





      getAlarmasStats(){ 
        this.ApiService
        .getStatsAlarma() 
        .subscribe((resp : any) =>{
          
          let i;
          for(i in resp){

            if(resp[i].raspberry === "False"){
              
          
              

              this.fechaAlarma = resp[i].ult_actualizacion;
              this.raspberryFalse = (resp[i].televisor).length
              this.idEspejoFalse= resp[i].id_espejo;

            }else if(resp[i].oferta === "True"){
              
              console.log("No entra")
    
            }
            
            // console.log(this.historico)
          }
  
        }
       );
  
  
      }



      //Chart
      public barChartOptions: ChartConfiguration['options'] = {
        elements: {
          line: {
            tension: 0.4
          }
        },
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
          x: {
           
          },
          y: {
           
            
          }
        },
        plugins: {
          legend: { display: true },
          
        },

      

        
      };
      public barChartLabels: string[] = [ 'impactos'];
      public barChartType: ChartType = 'bar';
    
      public barChartData: ChartData<'bar'> = {
        labels: this.barChartLabels,
        datasets: this.historico,
        
      };


      // Define colors of chart segments
      
    

      public barChartNOTOptions: ChartConfiguration['options'] = {
        elements: {
          line: {
            tension: 0.4
          },
          
        },
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
          x: { grid: {
            color: '#fff',
          },
          ticks: {
            color: 'white'
          }
        },
          y: {
            grid: {
              color: '#fff',
            },
            ticks: {
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'white'
            }
          }
        },
        
      };
      public barChartNOTLabels: string[] = ['00:00', '08:00', '13:00', '22:00'];
      public barChartNOYType: ChartType = 'line';
    
      public barChartNOTData: ChartData<'bar'> = {
        labels: this.barChartNOTLabels,
        datasets: [
          { data: [11, 10, 10, 15], label: 'Caidos' },
          { data: [19, 15, 15, 15], label: 'Ejecución' },
          { data: [10, 10, 15, 11], label: 'Advertencia' },
        ]
      };
      public changeChart(): void {
        this.barChartNOYType = this.barChartNOYType === 'line' ? 'bar' : 'line';
      }


      // events
      public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
        // console.log(event, active);
      }
    
      public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
        // console.log(event, active);
      }
      public randomize(): void {
        this.barChartType = this.barChartType === 'bar' ? 'polarArea' : 'bar';
      }
    

    
     
      
    
     
    
      
}


