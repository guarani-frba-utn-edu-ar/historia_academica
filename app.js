import { set_materias } from "./filtro.js";
import { materias_objs } from "./materias.js";
import {exams_objs} from "./examenes.js";
import { parse_start,parse_exams } from "./html_materias.js";
import { set_html_menuInicial,set_html_filtroAño, remove_html_filtroAño, show_loadingDiv } from "./html_fijos.js";

window.show_hide_exams=show_hide_exams;


let afterFiltro_mats=[];
let materia_data;
async function apply_filtros(filtro_id,on){
    afterFiltro_mats=set_materias(filtro_id,on);
    
    //Si se esta usando alguno de los filtros
    if (afterFiltro_mats.length!=0){
      set_html_filtroAño();
      
      let html_mats="";

      for (let mat_name of afterFiltro_mats){
         materia_data=materias_objs[mat_name];
         html_mats+=parse_start(materia_data);
    }
    await show_loadingDiv();
    materias_container.innerHTML=html_mats;
    }
    
    //Si no se esta usando ninguno
    else{
      remove_html_filtroAño();
      set_html_menuInicial(materias_container);
    }

}

async function show_hide_exams(mat_name){
    //Traemos el exam container de la materia
    let exams_div=document.getElementById(`${mat_name}_exams`);
    
    let html_toInsert;
    
    //Si el div de los exams de la mat no tiene nada, significa que la accion es para mostar(show)
    if (exams_div.innerHTML==""){
      materia_data=materias_objs[mat_name];
      
      let exams=exams_objs[materia_data.key_name]
      if (!exams){exams=[]};
      
      html_toInsert=parse_exams(materia_data.start_data,exams)
      
      await show_loadingDiv();

    }
    
    //Si tiene algo(osea que se hizo el "show" antes), la accion es para ocultar(hide)
    else{
      html_toInsert="";
    }
    
    exams_div.innerHTML=html_toInsert;
}


//div donde van las materias
let materias_container=document.getElementById("listado");

//Inicialmente sacamos el filtro año y mostramos el menu inicial(comportamiento de la pag original)
remove_html_filtroAño();
set_html_menuInicial(materias_container);

//Tomar checkboxes del filtro
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
-Hacer todo un toq mas prolijo

-Poner el coso de cargando. (meter un div dentro del div "navbar user-navbar clearfix")

-Solucionar que desaparezcan las materias al sacar un filtro(aun perteneciendo a otro activo)

-Hacer q se puedan ver los iconos que faltan

*/

/*----------- ATTRS A AGREGAR -------------

//----- Generales ------

  //En el inicio:
    -Numero entre () despues del nombre de la mat

  //Dentro de la parte de examenes
    -Periodo lectivo: anual/cuat y año (arriba de comision) (solo lo ponemos si hay examenes) (osea la encurso q no tienen no lo ponemos)

//Particulares:
  //En el inicio:
    -Tipo (En curso,Promocion,Regularidad)
    -Tipo para la fecha de q se hizo (Inicio de dictado,Promocionado,Aprobado,Reprobado,Ausente)
    -nota_gen (para promocion, y aprobado) (es la nota promedio con la q se paso)
    -Libro (para todos menos "en curso")
    -Folio (para todos menos "en curso")

*/

/*------ Separacion de tabla de exams ---------
A partir del div de "togle info catedra" empiezan las notas
que incluyen lo de periodo lectivo y comision.(si es que hay algo)
Para cerrar la parte de exams se necesitan los 2 primeros divs de los de gen_end.


*/