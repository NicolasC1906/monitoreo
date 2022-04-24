import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { UserModel } from '../../app/models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AbstractControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://api-mirror-marketing.herokuapp.com/";

  private image: string = "https://api-mirror-marketing.herokuapp.com/infoespejo/pantalla/bano/3";

  private register: string = "https://secure-atoll-67302.herokuapp.com/api/usuario";

  private login: string = "https://api-mirror-marketing.herokuapp.com/sign-up";

  private userData: string = "https://api-mirror-marketing.herokuapp.com/";

  private citypost: string = "https://api-mirror-marketing.herokuapp.com/";

  //espejos por sitio
  private mirrorSite: string = "https://api-mirror-marketing.herokuapp.com/espejo/";

  constructor(private http:HttpClient) { }


  





  getData(){

    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

		return this.http.get(`${this.url}ciudades`,{
      headers: header
    });

	}

  registrer(){

    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

		return this.http.get(`${this.register}usuario`,{
      headers: header
    });

	}



  loginAuth(user: any): Observable<any> {
    return this.http.post("https://api-mirror-marketing.herokuapp.com/login", user);
  }


  CiudadesPost(city: any): Observable<any> {
    console.log(city)
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.post("https://api-mirror-marketing.herokuapp.com/ciudad", city, { headers } );
  }


  PostCity(){

    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

		return this.http.get(`${this.citypost}users`,{
      headers: header
    });

	}


  // Categorias
  categoryPost(category: any): Observable<any> {
    console.log(category)
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.post("https://api-mirror-marketing.herokuapp.com/categoria", category, { headers } );
  }

  getCategory(){

    return this.http.get(`${this.url}categoria`);
  }

  getCategoyById(id: any){

    return this.http.get(`${this.url}categoria/${id}`);
  }

  putCategory(category: any, id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.put("https://api-mirror-marketing.herokuapp.com/categoria/" + id, category, { headers } );
  }

  deleteCategory( id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.delete("https://api-mirror-marketing.herokuapp.com/categoria/" + id, { headers } );
  }

  // Categorias


  // API SITIOS START
  sitePost(site: any): Observable<any> {
    console.log(site)
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.post("https://api-mirror-marketing.herokuapp.com/sitio", site, { headers } );
  }

  getSite(){

    return this.http.get(`${this.url}sitio`);
  }

  getSiteyById(id: any){

    return this.http.get(`${this.url}sitio/${id}`);
  }

  putSite(site: any, id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.put("https://api-mirror-marketing.herokuapp.com/sitio/" + id, site, { headers } );
  }

  deleteSite( id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.delete("https://api-mirror-marketing.herokuapp.com/sitio/" + id, { headers } );
  }

  // API STIOS END

  // API GENERO START
  genderPost(gender: any): Observable<any> {
    console.log(gender)
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.post("https://api-mirror-marketing.herokuapp.com/genero", gender, { headers } );
  }

  getGender(){

    return this.http.get(`${this.url}genero`);
  }

  getGenderById(id: any){

    return this.http.get(`${this.url}genero/${id}`);
  }

  putGenero(gender: any, id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.put("https://api-mirror-marketing.herokuapp.com/genero/" + id, gender, { headers } );
  }

  deleteGender( id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.delete("https://api-mirror-marketing.herokuapp.com/bano/" + id, { headers } );
  }
  // API GENERO END

  // API BANOS START
  BANOSPost(bano: any): Observable<any> {
    console.log(bano)
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.post("https://api-mirror-marketing.herokuapp.com/bano", bano, { headers } );
  }

  getBanos(){

    return this.http.get(`${this.url}bano`);
  }

  getBanoById(id: any){

    return this.http.get(`${this.url}bano/${id}`);
  }

  putBano(bano: any, id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.put("https://api-mirror-marketing.herokuapp.com/bano/" + id, bano, { headers } );
  }

  deleteBano( id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.delete("https://api-mirror-marketing.herokuapp.com/bano/" + id, { headers } );
  }
  // API BANO END

  
  getUser(city: any): Observable<any> {

    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

		return this.http.get(`${this.userData}users`,{
      headers: header
    });

	}

  getDataByID(id: any){

    return this.http.get(`${this.userData}users/${id}`);
  }

  //espejos por sitio
  
  getmirrorSiteByID(id: any){

    return this.http.get(`${this.userData}sitio/${id}`);
  }

  //Sensores
  
  getSensors(id: any){

    return this.http.get(`${this.url}sensores/all`);
  }

  getCitys(){

    return this.http.get(`${this.url}ciudades`);
  }

  getCityById(id: any){

    return this.http.get(`${this.url}ciudad/${id}`);
  }

  putciudad(city: any, id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.put("https://api-mirror-marketing.herokuapp.com/ciudad/" + id, city, { headers } );
  }

  deleteCiudad( id:any): Observable<any> {
    const headers = {'Type-content':'aplication/json', 'responseType' : "text"}
    return this.http.delete("https://api-mirror-marketing.herokuapp.com/ciudad/" + id, { headers } );
  }
  //Tabla espejos
  
  getInfoMirror(){

    return this.http.get(`${this.url}espejo`);
  }

  //impactosMes
  
  getImpactos(){

    return this.http.get(`${this.url}estadisticas/impactos/mesactual`);
  }

  //impactos Sitios
  
  getImpactosSite(id: any){

    return this.http.get(`${this.url}sitio/impactos/${id}`);
  }

   //estadistica
  
   getStacs(){

    return this.http.get(`${this.url}estadistica`);
  }

  //estadistica
  
  getHistorico(){

    return this.http.get(`${this.url}estadisticas/impactos/dias`);
  }

  //estadistica/alarma
  
  getStatsAlarma(){

    return this.http.get(`${this.url}estadistica/alarma`);
  }

  getimage(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

		return this.http.get(`${this.image}`,{
      headers: header
    });

  }

  
            /*=============================================
              validar IdToken de usuarios
            =============================================*/
            authActivate(){

              return new Promise(resolve=>{

              /*=============================================
                Validamos que el token sea real
                =============================================*/

                if(localStorage.getItem("token")){

                        let body = {

                            token: localStorage.getItem('token')
                        }


                  /*=============================================
                    Validamos fecha de expiración
                    =============================================*/

                    if(localStorage.getItem("expiresIn")){

                      let expiresIn = Number(localStorage.getItem("expiresIn"));

                      let expiresDate = new Date();
                      expiresDate.setTime(expiresIn);

                      if(expiresDate > new Date()){

                        resolve(true)

                      }else{

                        localStorage.removeItem('token');
                          localStorage.removeItem('expiresIn');
                        resolve(false)
                      }

                    }else{

                      localStorage.removeItem('token');
                      localStorage.removeItem('expiresIn');
                      resolve(false)

                    }


                }
              })
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
                  localStorage.removeItem('IdRol');
                  localStorage.removeItem('expiresIn');
                  localStorage.removeItem('token');
                  localStorage.removeItem('userdata');
                  localStorage.removeItem('idUser');
                  window.location.href = '/tienda'
                }
              });
              ;
            }
}
