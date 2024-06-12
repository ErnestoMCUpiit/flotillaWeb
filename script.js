import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDKYVXlZuKkYFeYKYNAYEz393La5Erl12c",
    authDomain: "flotilla-d9efb.firebaseapp.com",
    databaseURL: "https://flotilla-d9efb-default-rtdb.firebaseio.com",
    projectId: "flotilla-d9efb",
    storageBucket: "flotilla-d9efb.appspot.com",
    messagingSenderId: "357309099599",
    appId: "1:357309099599:web:d449d44db6f602c2d9c43a"
};


const app = initializeApp(firebaseConfig);

import{getDatabase, ref,push, child, get,set,update,remove } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
const db = getDatabase();

let nombreInput = document.getElementById("nombre");
let edadInput = document.getElementById("edad");
let apellidosInput = document.getElementById("apellidos");
let licenceInput = document.getElementById("licence");
let celularInput = document.getElementById("phone")
let emailInput = document.getElementById("email")

//elementos conductor
let 


let readBtn = document.getElementById("read");
let updBtn = document.getElementById("update");
let delBtn = document.getElementById("delete");
let newBtn = document.getElementById("crear")


const idCond = push(child(ref(db), 'conductores')).key;

//leer conductor
readBtn.addEventListener("click", function() {
    readData(nombreInput.value);
});        

async function readData(nombreBuscado) {
    const dbRef = ref(db, 'conductores');

    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val().datos;
        if (childData.nombre === nombreBuscado) {
            console.log('Nombre: ' + childData.nombre);
            console.log('Apellidos: ' + childData.apellidos);
            console.log('Edad: ' + childData.edad);
            console.log('Licencia: ' + childData.licencia);
            console.log('celular: ' + childData.celular);
            console.log('email: ' + childData.email);
            alert("leyendo por nombre correctamente");
        }
        
    });
    } 
    else {
        console.log('No se encontraron datos');
    }
}

newBtn.addEventListener("click",nuevosDatos);
//añadir nuevo conductor
function nuevosDatos(){
    set(ref(db,"conductores/"+idCond+"/datos/"),{
        nombre: nombreInput.value,
        apellidos: apellidosInput.value,
        edad: edadInput.value,
        licencia :licenceInput.value,
        celular: celularInput.value,
        email: emailInput.value
    })
    .then(()=>{
        alert("conductores actualizada");
    }).catch(()=>{
        alert("Error");
        console.log(error);
    })
    const idAsignacion = push(child(ref(db), "conductores/"+idCond+"/asignaciones")).key;
    set(ref(db,"conductores/"+idCond+"/asignaciones/"+idAsignacion),{
        placa: "example"
    })
    .then(()=>{
        alert("asignaciones actualizada");
    }).catch(()=>{
        alert("Error");
        console.log(error);
    })
}

//añadir nuevo vehiculo

function nuevoVehiculo(){

}

