

// API ESPEJOS
// const API_URL = 'https://espejos-monitoreo-default-rtdb.firebaseio.com';

//  const API_URL = 'https://jsonplaceholder.typicode.com';

//  // Metodo #1  xhr -------------------------------------------------------------------------------- Metodo #1------
//  const xhr = new XMLHttpRequest();

//  // Manejador del request
//  function onRequestHandler(){
// //     // Comprobacion de respuesta
//      if(this.readyState === 4 && this.status === 200){
//          // console.log(this.response);

//          // Almacenar Info
//          const data = JSON.parse(this.response);
//          // console.log(data);

//          // Pintar el API
//          const HTMLResponse = document.querySelector("#app");

//          const tpl = data.map((user) => `<li>${user.name}</li>`);
//          HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//      }
//  }

//  // Escuchador de eventos
//  xhr.addEventListener('load', onRequestHandler );
//  // Endpoint de la API
//  xhr.open('GET', `${API_URL}/users`);
// // xhr.open('GET', `${API_URL}/Unicentro.json`);

//  xhr.send();

// Metodo #2 FECH -------------------------------------------------------------------------------- Metodo #2------

        //  const HTMLResponse = document.querySelector("#app");
         

        //      fetch(`${API_URL}/users`)
        //      .then((Response) => Response.json())
        //      .then((users) => {
        //          const tpl = users.map((user) => `<li>${user.name}</li>`);
        //          HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;

        //      });


            