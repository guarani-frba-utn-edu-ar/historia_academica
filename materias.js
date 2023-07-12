const materias_objs=
    {"analisis_1":{
        type:"promocionada",
        inicio_data:{
          name:"Analisis 1 (4342)",
          nota_gen:"8 (OCHO)",
          fecha:"23/03/2022",
          periodo_lectivo:"Anual 2022",
          comision:"K1093"
        },
        examenes:[]
      },
      
      "fisica_1":{
        type:"en_curso",
        inicio_data:{
          name:"Fisica 1 (4342)",
          fecha:"23/03/2023",
          periodo_lectivo:"Anual 2022",
          comision:"Z1025"
        },
        examenes:[]
      }
}

function promocionada_parseStart(){
  `<div class="catedras" materia="87"><h3 class="titulo-corte">${mat_data.name} (082021)</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>Promocion </strong> -${mat_data.nota_gen} -Promocionado ${mat_data.fecha}  <strong></strong> - <a href="#" id="1" data-origen="EnCurso">Cerrar</a></span></div><div class="toggle_info_catedra" id="mat_1" style=""><div id="info_det_1">
    
  Periodo Lectivo:${mat_data.periodo_lectivo} Comisión: ${mat_data.comision}`
}

function aprobada_parseStart(){
  
}


function enCurso_parseStart(){
  `<div class="catedras" materia="87"><h3 class="titulo-corte">${mat_data.name} (082021)</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>En curso </strong> -${mat_data.nota_gen} - Inicio de dictado ${mat_data.inicio}  <strong></strong> - <a href="#" id="1" data-origen="EnCurso">Cerrar</a></span></div><div class="toggle_info_catedra" id="mat_1" style=""><div id="info_det_1">
    
  Periodo Lectivo:${mat_data.periodo_lectivo} Comisión: ${mat_data.comision}`
}

export {materias_objs};