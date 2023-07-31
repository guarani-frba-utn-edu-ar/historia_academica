import { parseStart_functions } from "./materias.js";

//------------------------ PARTE DE DATA GENERAL DE LA MATERIA --------------------

//----- Final de la materia "general" -----
const gen_end="</div></div>"

function parse_start(mat_data){
    let all_html="";
    
    //Tomamos la funcion segun el tipo de materia
    let partic_parse_start=parseStart_functions[mat_data.type];
    
    //llenamos el start
    let gen_start=partic_parse_start(mat_data.key_name,mat_data.start_data);
    
    //Juntamos las partes de todo
    all_html+=gen_start+gen_end;
    
    return all_html;

    
}

//----------------- PARTE DE EXAMENES DE CADA MATERIA-----------------------------------
//------ Inicio de class tabla -------
const table_start=`<table class="table table-condensed table-bordered table-optativas">
            <tbody><tr>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Tipo</th>
                <th>Nota</th>
                <th>Resultado</th>
            </tr>`

/*----- Cada row de la tabla----------------
`<tr>
                    <td>22/08/2022</td>
                    <td>1º Parcial</td>
                    <td>Parcial</td>
                    <td>
                                                6 (SEIS)
                                        </td>
                    <td>
                                                Aprobado
                                        </td>
                </tr>`
*/
//----- Final de class tabla -----
const table_end="</tbody></table>"

function parse_exams(mat_data,exams){
    let all_html;
    let head=`<div class="toggle_info_catedra" id="mat_1" style=""><div id="info_det_1">
    
  Periodo Lectivo:${mat_data.periodo_lectivo} <br> Comisión: ${mat_data.comision}`;
    let end=`</div></div>`

    let table_full=""
    
    //Si hay examenes disponibles, hacemos la tabla
    if (exams.length!=0){
       table_full+="<h5>Evaluaciones parciales:</h5>";
    
       //por cada mat_data.examenes
       let table_data=""
       for (let exam of exams){
           table_data+=`<tr>
          <td>${exam.fecha}</td>
          <td>${exam.descr}</td>
          <td>${exam.tipo}</td>
          <td>
                                    ${exam.nota}
                            </td>
          <td>
                                    ${exam.resultado}
                            </td>
          </tr>`
        
       }
       //Juntamos las partes de la tabla
       table_full+=table_start+table_data+table_end;
    }
    
    else{ //Si no, mostramos este msje en su lugar
        table_full="<p>No hay informacion sobre evaluaciones</p>"
    }

    all_html=head+table_full+end;

    return all_html;
}

export {parse_start,parse_exams};