const materias_objs=
    {"analisis_1":{
        type:"promocionada",
        key_name:"analisis_1",
        start_data:{
          name:"Analisis 1",
          num_id:"4342",
          nota_gen:"8 (OCHO)",
          fecha:"23/03/2022",
          libro:"XVIISASI",
          folio:"321312231",
          periodo_lectivo:"Anual 2022",
          comision:"K1093"
        },
        examenes:[]
      },

      "fisica_1":{
        type:"en_curso",
        key_name:"fisica_1",
        start_data:{
          name:"Fisica 1",
          num_id:"32432",
          fecha:"23/03/2023",
          libro:undefined,
          folio:undefined,
          periodo_lectivo:"Anual 2023",
          comision:"Z1025"
        },
        examenes:[]
      }
}

function promocionada_parseStart(name,data){
  let start_html=`<div class="catedras" materia="87"><h3 class="titulo-corte">${data.name} (${data.num_id})</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>Promocion </strong> - ${data.nota_gen} - Promocionado ${data.fecha}  <strong></strong> - <a href="#" id="1" onclick="show_hide_exams('${name}')" data-origen="EnCurso">Cerrar</a></span></div>
  <div id="${name}_exams"></div>`
  
  return start_html;
}


function aprobada_parseStart(name,data){
  let start_html=`<div class="catedras" materia="87"><h3 class="titulo-corte">${data.name} (${data.num_id})</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>Promocion </strong> - ${data.nota_gen} - Promocionado ${data.fecha}  <strong></strong> - <a href="#" id="1" onclick="show_hide_exams('${name}')" data-origen="EnCurso">Cerrar</a></span></div>
  <div id="${name}_exams"></div>`
  
  return start_html;
}


function enCurso_parseStart(name,data){
  let start_html=`<div class="catedras" materia="87"><h3 class="titulo-corte">${data.name} (${data.num_id})</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>En curso </strong> - ${data.nota_gen} - Inicio de dictado ${data.fecha}  <strong></strong> - <a href="#" id="1" onclick="show_hide_exams('${name}')" data-origen="EnCurso">Cerrar</a></span></div>
  <div id="${name}_exams"></div>`
  
  return start_html;
}


const parseStart_functions={
  "promocionada":promocionada_parseStart,
  "aprobada":aprobada_parseStart,
  "en_curso":enCurso_parseStart,
}

export {materias_objs,parseStart_functions};