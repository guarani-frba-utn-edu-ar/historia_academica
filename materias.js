const materias_objs=
   //-------------------- 2022 ----------------------------------- 
   {"analisis_1":{
        type:"promocionada",
        key_name:"analisis_1",
        start_data:{
          name:"Analisis Matematico I",
          num_id:"950702",
          nota_gen:"8 (OCHO)",
          fecha:"30/11/2022",
          libro:"PR098",
          folio:"78",
          periodo_lectivo:"Grado Anual 2022",
          comision:"K1093"
        },
    },
    
    "algoritmos":{
        type:"promocionada",
        key_name:"algoritmos",
        start_data:{
          name:"Algoritmos y Estructura de Datos",
          num_id:"082021",
          nota_gen:"8 (OCHO)",
          fecha:"30/11/2022",
          libro:"PR089",
          folio:"238",
          periodo_lectivo:"Grado Anual 2022",
          comision:"K1193"
        },
    },

    "arquitectura":{
        type:"promocionada",
        key_name:"arquitectura",
        start_data:{
          name:"Arquitectura de Computadores",
          num_id:"082022",
          nota_gen:"9 (NUEVE)",
          fecha:"30/11/2022",
          libro:"PR090",
          folio:"178",
          periodo_lectivo:"Grado Anual 2022",
          comision:"K1093"
        },
    },

    "ing_y_soc":{
        type:"promocionada",
        key_name:"ing_y_soc",
        start_data:{
          name:"Ingenieria y Sociedad",
          num_id:"951604",
          nota_gen:"8 (OCHO)",
          fecha:"30/11/2022",
          libro:"PR091",
          folio:"19",
          periodo_lectivo:"Grado Segundo Cuatrimestre 2022",
          comision:"K1093"
        },
    },

    "discreta":{
        type:"promocionada",
        key_name:"discreta",
        start_data:{
          name:"Matematica Discreta",
          num_id:"082020",
          nota_gen:"8 (OCHO)",
          fecha:"30/11/2022",
          libro:"PR095",
          folio:"221",
          periodo_lectivo:"Grado Anual 2022",
          comision:"K1093"
        },
    },

    "sis_y_org":{
        type:"promocionada",
        key_name:"sis_y_org",
        start_data:{
          name:"Sistemas y Organizaciones",
          num_id:"082023",
          nota_gen:"9 (NUEVE)",
          fecha:"30/11/2022",
          libro:"PR081",
          folio:"100",
          periodo_lectivo:"Grado Anual 2022",
          comision:"K1093"
        },
    },

    "quimica":{
        type:"promocionada",
        key_name:"quimica",
        start_data:{
          name:"Quimica",
          num_id:"082023",
          nota_gen:"9 (NUEVE)",
          fecha:"15/07/2022",
          libro:"PR087",
          folio:"229",
          periodo_lectivo:"Grado Primer Cuatrimestre 2022",
          comision:"K1093"
        },
    },

//------------------------ 2023 ----------------------------
    "fisica_1":{
        type:"en_curso",
        key_name:"fisica_1",
        start_data:{
          name:"Fisica I",
          num_id:"950605",
          nota_gen:undefined,
          fecha:"15/03/2023",
          libro:undefined,
          folio:undefined,
          periodo_lectivo:"Grado Anual 2023",
          comision:"S1091"
        },
    },
    
    "ingles_1":{
        type:"en_curso",
        key_name:"ingles_1",
        start_data:{
          name:"Ingles Tecnico I",
          num_id:"951602",
          nota_gen:undefined, //8 (OCHO)
          fecha:"15/03/2023",
          libro:undefined,
          folio:undefined,
          periodo_lectivo:"Grado Primer Cuatrimestre 2023",
          comision:"Z2043"
        },
    },

    "analisis_de_sist":{
        type:"en_curso",
        key_name:"analisis_de_sist",
        start_data:{
          name:"Analisis de Sistemas",
          num_id:"951701",
          nota_gen:undefined, //8 (OCHO)
          fecha:"15/03/2023",
          libro:undefined,
          folio:undefined,
          periodo_lectivo:"Grado Anual 2023",
          comision:"K2041"
        },
    },

    "analisis_2":{
        type:"en_curso",
        key_name:"analisis_2",
        start_data:{
          name:"Analisis Matematico II",
          num_id:"952612",
          nota_gen:undefined, //8 (OCHO)
          fecha:"15/03/2023",
          libro:undefined,
          folio:undefined,
          periodo_lectivo:"Grado Anual 2023",
          comision:"Z2053"
        },
    },

    "sintax_y_semant":{
        type:"en_curso",
        key_name:"sintax_y_semant",
        start_data:{
          name:"Sintaxis y Semantica de Los Lenguajes",
          num_id:"952632",
          nota_gen:undefined, //8 (OCHO)
          fecha:"15/03/2023",
          libro:undefined,
          folio:undefined,
          periodo_lectivo:"Grado Anual 2023",
          comision:"K2064"
        },
    },

    "paradigmas_prog":{
      type:"en_curso",
      key_name:"paradigmas_prog",
      start_data:{
        name:"Paradigmas de Programacion",
        num_id:"952422",
        nota_gen:undefined, //8 (OCHO)
        fecha:"24/07/2023",
        libro:undefined,
        folio:undefined,
        periodo_lectivo:"Grado Segundo Cuatrimestre 2023",
        comision:"K2144"
      },
  },

  "ingles_2":{
    type:"en_curso",
    key_name:"ingles_2",
    start_data:{
      name:"Ingles Tecnico II",
      num_id:"951603",
      nota_gen:undefined, //8 (OCHO)
      fecha:"24/07/2023",
      libro:undefined,
      folio:undefined,
      periodo_lectivo:"Grado Segundo Cuatrimestre 2023",
      comision:"Z3673"
    },
},



    
}

//<a href="#" id="1" onclick="show_hide_exams('${name}')" data-origen="EnCurso">Cerrar</a>
//<p onclick="show_hide_exams('${name}')">Detalle</p>
function promocionada_parseStart(name,data){
  let start_html=`<div class="catedras" materia="87"><h3 class="titulo-corte">${data.name} (${data.num_id})</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>Promocion </strong> - ${data.nota_gen} - Promocionado ${data.fecha} - Libro ${data.libro} - Folio - ${data.folio}  <strong></strong> - <button class="showHide_exams_btn" onclick="show_hide_exams('${name}')">Detalle</button></span></div>
  <div id="${name}_exams"></div>`
  
  return start_html;
}


function aprobada_parseStart(name,data){
  let start_html=`<div class="catedras" materia="87"><h3 class="titulo-corte">${data.name} (${data.num_id})</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>Regularidad </strong> - ${data.nota_gen} - Aprobado ${data.fecha} - Libro ${data.libro} - Folio - ${data.folio}  <strong></strong> - <button class="showHide_exams_btn" onclick="show_hide_exams('${name}')">Detalle</button></span></div>
  <div id="${name}_exams"></div>`
  
  return start_html;
}


function enCurso_parseStart(name,data){
  let start_html=`<div class="catedras" materia="87"><h3 class="titulo-corte">${data.name} (${data.num_id})</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>En curso </strong> - Inicio de dictado ${data.fecha}  <strong></strong> - <button class="showHide_exams_btn" onclick="show_hide_exams('${name}')">Detalle</button></span></div>
  <div id="${name}_exams"></div>`
  
  return start_html;
}


const parseStart_functions={
  "promocionada":promocionada_parseStart,
  "aprobada":aprobada_parseStart,
  "en_curso":enCurso_parseStart,
}

export {materias_objs,parseStart_functions};