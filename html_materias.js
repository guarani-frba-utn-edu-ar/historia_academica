//Parte de parciales
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

//----- Final de la materia "general" -----
const gen_end="</div></div></div></div>"


function parse_html(mat_data){
    let all_html="";
    
    //llenar start
    let gen_start=parse_start(mat_data.type,mat_data.inicio_data)
    
    let table_full=""
    //Si ya hay examenes, llenamos la tabla
    if (mat_data.examenes.length!=0){
       table_full+="<h5>Evaluaciones parciales:</h5>";
    
       //por cada mat_data.examenes
       let table_data=""
       for (let exam of mat_data.examenes){
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
    
    else{ //Si no, mostramos este msje
        table_full="<p>No hay informacion sobre evaluaciones</p>"
    }
    
    //Juntamos las partes de todo
    all_html+=gen_start+table_full+gen_end;
    
    return all_html;

    
}

export {parse_html};