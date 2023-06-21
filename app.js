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


let onpage=set_materias("en_curso",false);
console.log(onpage);