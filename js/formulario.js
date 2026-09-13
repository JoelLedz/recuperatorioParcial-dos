let intalaciones=[]
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
/*///////////////////// Accion del botones /////////////////////*/

btnConfirm.addEventListener('click',function(){
  if(Number(cantObra.value)>0 && Number(pagaH.value)>0){
     Formulario.disabled = false; /*desbloquea la segunda parte del formulario*/
   } else { alert("Los datos son invalidos")}
});

btnAgregar.addEventListener('click',function(){
  if (valiNombre(nombreObra.value) && validaHoras(horaXd.value) && valiPerso(persoNece.value) && validaDias(diasProdu.value)){
    let hola="hola Esta bien";
   console.log(hola);
  } else { alert("Los datos son invalidos")}})
