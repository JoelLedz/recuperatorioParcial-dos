let intalaciones=[]
let contador = 1
/*/////////////////// Captura de los primeros datos///////////////////// */
let cantObra = document.querySelector("#cant_instalaciones");
let pagaH = document.querySelector("#paga_hora");
let btnConfirm = document.querySelector("#bt-confir");
let inicio = document.querySelector("#config");
/*////////////////// Captura de los segundos datos  ////////////////////// */
 let nombreObra = document.querySelector ("#nombre_obra");
 let persoNece = document.querySelector ("#perNece");
 let diasProdu = document.querySelector("#dProdu");
 let horaXd = document.querySelector ("#hXdia");
 let btnAgregar = document.querySelector ("#btn-agregar");
 let btnCalcular = document.querySelector("#btn-calcular");
 let btnReset = document.querySelector("#btn-reset");
 let Formulario =document.querySelector("#datos");
 let totalDias =document.querySelector(".totalDia");
 let largaDia =document.querySelector(".instalarLarga");
 let Costo = document.querySelector(".persentajeCosto");

/*///////////////////// Funciones de validacion //////////////////////// */ 
function valiNombre (nombreObra){
  if(String(nombreObra)==""){
    alert ("El nombre es invalido.");
    return false; 
  } else {return true}  
}
function validaDias (diasProdu){
  if(Number(diasProdu)<= 0){
    alert ("Los dias de produccion deben ser un número mayor a 0.");
    return false; 
  } else {return true}
}
function valiPerso (persoNece){
  if(Number(persoNece)<= 0){
    alert ("Los perosonas para la produccion deben ser un número mayor a 0.");
    return false; 
  } else {return true}
}
function validaHoras (horaXd){
  if ( Number(horaXd)<= 0 || Number(horaXd)>24){
    alert ("Las horas por día deben ser un número mayor a 0 y menor a 24.");
    return false;
  } else {
    return true;
  }    
}
/*//////////////////// Funcion para el array de objetos /////////////////////*/
function agregarObra(){
  let obra = {
    nombre:nombreObra.value,
    personas:Number(persoNece.value),
    dias:Number(diasProdu.value),
    horas: Number (horaXd.value),
  }
  intalaciones.push(obra)
};

/*///////////////////// Accion del botones /////////////////////*/

btnConfirm.addEventListener('click',function() {
  if(Number(cantObra.value)>0 && Number(pagaH.value)>0){
     Formulario.disabled = false; /*desbloquea la segunda parte del formulario*/
     inicio.disabled = true;
}else { alert("Los datos son invalidos")}});

btnAgregar.addEventListener('click',function(){
  if (valiNombre(nombreObra.value) && validaHoras(horaXd.value) && valiPerso(persoNece.value) && validaDias(diasProdu.value)){
             console.log(intalaciones);
              if (contador<=Number(cantObra.value)){
              agregarObra()
              contador++ }
              else if (contador = Number(cantObra.value)){
                alert("Ya cargaste todas las instalaciones.");
                btnAgregar.disabled = true;
                btnCalcular.disabled = false;
              }
              else {
              btnAgregar.disabled = true;
              } 
  }});

/*//////////////// Funcion de total del costo ///////////////////////////// */


/*//////////////// Boton calcular ///////////////////////////// */
btnCalcular.addEventListener('click',function(){
    let todoBien="Calcular esta piola";
    console.log(todoBien)
    totalDias.innerText ="hola";
    largaDia .innerText ="como estas?";
    Costo.innerText ="Bien, Funciona";
});