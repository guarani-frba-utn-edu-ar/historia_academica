import { set_materias } from "./filtro.js";

let afterFiltro_hmtl;

function apply_filtros(filtro_id,on){
    afterFiltro_hmtl=set_materias(filtro_id,on);
    
    materias_container.innerHTML=afterFiltro_hmtl;
     
      
}


let materias_container=document.getElementById("listado");

//Tomar checkboxes
let promocionadas_checkBox=document.getElementById("cursadasPromocionadas");
let aprobadas_checkBox=document.getElementById("cursadasAprobadas");
let desaprobadas_checkBox=document.getElementById("cursadasDesaprobadas");
let ausente_checkBox=document.getElementById("cursadasAusentes");
let enCurso_checkBox=document.getElementById("enCurso");

//Asignarles la funcion correspóndiente
promocionadas_checkBox.addEventListener("click",(e)=>{apply_filtros("promocionadas",e.target.checked)});
aprobadas_checkBox.addEventListener("click",(e)=>{apply_filtros("aprobadas",e.target.checked)})
desaprobadas_checkBox.addEventListener("click",(e)=>{apply_filtros("desaprobadas",e.target.checked)})
ausente_checkBox.addEventListener("click",(e)=>{apply_filtros("ausente",e.target.checked)});
enCurso_checkBox.addEventListener("click",(e)=>{apply_filtros("en_curso",e.target.checked)});



/*---------TODO----------------
-Poner html de inicio si ho hay ninguna mat
-Personalizar headers de arriba, si es en curso aprobada o promocionada
-Hacer una function u obj especifico segun de q tipo sea (en curso,aprobada,etc) para parsear
-bien los headers. Despues el contenido de la tabla es el mismo para todos


*/