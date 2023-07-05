import { set_materias } from "./filtro.js";

/*Asignar funciones a los html objs

let promocionadas_checkBox=document.getElementById("cursadasPromocionadas");
let aprobadas_checkBox=document.getElementById("cursadasAprobadas");
let desaprobadas_checkBox=document.getElementById("cursadasDesaprobadas");
let ausente_checkBox=document.getElementById("cursadasAusentes");
let enCurso_checkBox=document.getElementById("enCurso");

promocionadas_checkBox.addEventListener("click");
aprobadas_checkBox.addEventListener("click")
desaprobadas_checkBox.addEventListener("click")
enCurso_checkBox.addEventListener("click");*/

let materias_container=document.getElementById("listado");

let onpage=set_materias("promocionadas",true);
materias_container.innerHTML=onpage;


/*---------TODO----------------
-Poner html de inicio si ho hay ninguna mat
-Hacer bien las funciones del checkbox


*/