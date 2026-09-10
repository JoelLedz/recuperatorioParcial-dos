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

/*///////////////////// Accion del boton confimar /////////////////////*/

btnConfirm.addEventListener('click',function(){
  if( Number(cantObra.value)> 0 && Number(pagaH.value)>0){
     Formulario.disabled = false; /*desbloquea la segunda parte del formulario*/
   } else { alert("Los datos son invalidos")}
});



