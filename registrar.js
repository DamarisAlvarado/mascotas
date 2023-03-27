var bd;
var cajaContactos;

function IniciarBaseDatos()
  {
    cajaContactos = document.querySelector("#contenedordatos");
    var BtnGuardar = document.querySelector("#res");
    BtnGuardar.addEventListener("click", AlmacenarContacto);
    var solicitud = indexedDB.open("Club-de-mascotas");
    console.log('Se creo base')
    solicitud.addEventListener("error", MostrarError);
    solicitud.addEventListener("success", Comenzar);
    solicitud.addEventListener("upgradeneeded", CrearAlmacen);
  }

function MostrarError(evento)
  {
      alert("Tenemos un ERROR: " + evento.code + " / " + evento.message);
  }

function Comenzar(evento)
  {
      bd = evento.target.result;
  }

function CrearAlmacen(evento)
  {
      var basededatos = evento.target.result;
      var almacen = basededatos.createObjectStore("Clientes", {keyPath: "id"});
      almacen.createIndex("BuscarNombre", "nombre", {unique: false});
  }
window.addEventListener("load", IniciarBaseDatos);



function AlmacenarContacto()
{
  var N = document.querySelector("#email").value;
  var I = document.querySelector("#pass").value;
  var E = document.querySelector("#nombremascota").value;
  var R= document.querySelector('#raza').value;
  var ED= document.querySelector('#edad').value;
  var S= document.querySelector('#sexo').value;
  var T= document.querySelector('#tamaño').value;
  

  var transaccion = bd.transaction(["Clientes"], "readwrite");
  var almacen = transaccion.objectStore("Clientes");

  almacen.add({
               nombre: N,
               id: I,
               nomM: E,
               raza:R,
               edad:ED,
               sexo:S,
               tamaño:T
             });

  document.querySelector("#email").value = "";
  document.querySelector("#pass").value = "";
  document.querySelector("#nombremascota").value = "";
  document.querySelector('#raza').value= "0";
  document.querySelector('#edad').value="";
 document.querySelector('#sexo').value="0";
 document.querySelector('#tamaño').value="0";
 console.log('SE GUARDO BIEN')

 window.confirm('Se registro con exito dar clic en ENTRAR');
}

window.addEventListener('load',IniciarBaseDatos);

function entrar(){
    window.location="/paginas/Login.html"
}




  
