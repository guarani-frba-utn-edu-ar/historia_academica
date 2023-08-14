//################## FUNCIONES PARA PONER O SACAR HTMLS QUE SON ESTATICOS ############################


import {sleep} from "./helpers.js";

//-------------------------------- MENU INICIAL --------------------------------------------------
const menu_inicial=`<div class="alert cuadro_consultas_habituales"><h4>Consultas habituales:</h4><ul class="js-consultas_habituales"><li><a href="#" consulta="mats_en_curso">Materias en curso</a></li><li><a href="#" consulta="mats_aprobadas">Materias aprobadas</a></li><li><a href="#" consulta="curs_aprobadas">Cursadas aprobadas</a></li><li><a href="#" consulta="todo">Historia completa</a></li></ul></div>
<div class="alert cuadro_mensaje_vacio"><h4>O utilice los filtros para personalizar su búsqueda</h4><a class="hidden-desktop" id="ver_filtros" href="#" consulta="todo">Filtrar manualmente</a></div>`;

function set_html_menuInicial(container){
    container.innerHTML=menu_inicial;
}

//--------------------------- FILTRO AÑO --------------------------------------------
const filtro_año=`<div class="filtros"><span>Ver por</span><input id="filtro_modo" type="hidden" value="m" autocomplete="off"><div class="btn-group filtro" data-toggle="buttons-radio"><a href="#" id="orden_anio" data-valor="a" class="btn ">Año</a><a href="#" id="orden_materia" data-valor="m" class="btn active">Actividad/Reconocimiento</a></div><div class="filtro"><input type="text" value="" id="actividad_reconocimiento" placeholder="Ingrese texto a buscar..." autocomplete="off"></div></div>`;
let filtro_año_div=document.getElementsByClassName("filtros")[0];

function set_html_filtroAño(){
    filtro_año_div.innerHTML=filtro_año;
}

function remove_html_filtroAño(){
    filtro_año_div.innerHTML="";
}

//------------------------------ CARTEL CARGANDO ------------------------------------------
let loading_div=document.getElementById("loading_top")

async function show_loadingDiv(){
    //Lo mostramos y lo quitamos luego de cierto tiempo
    loading_div.style.display="block";
    await sleep(200);
    loading_div.style.display="none";
}

//--------------------------- ICONOS XLS Y PDF ----------------------------------------------

let pdf_icon_div=document.getElementById("pdf_div");
let excel_icon_div=document.getElementById("excel_div");

function set_html_iconos(){
    pdf_icon_div.innerHTML=`<div class="pull-right"><a id="pdf_btn" target="_blank" class="btn no-ajax" title="Generar pdf"><i class="g3w-icono-pdf"></i></a></div>`;
    excel_icon_div.innerHTML=`<div class="pull-right visible-desktop"><a id="xls_btn" target="_blank" class="btn no-ajax" title="Generar xls"><i class="g3w-icono-xls"></i></a></div>`;

}

function remove_html_iconos(){
    pdf_icon_div.innerHTML="";
    excel_icon_div.innerHTML="";

}


export{set_html_menuInicial,set_html_filtroAño,remove_html_filtroAño,
      show_loadingDiv,set_html_iconos,remove_html_iconos};