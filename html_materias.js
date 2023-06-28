function parse_html(mat_data){
    let all_html="";
    //llenar start
    
    let table_full="";
    //por cada mat_data.parciales
    let table_data=""
    for (let exam of mat_data.parciales){
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
    
    //Juntamos las partes de todo
    all_html+=gen_start+table_full+gen_end;
    
    return all_html;

    
}

//Parte de datos generales
let gen_start=`<div class="catedras" materia="87"><h3 class="titulo-corte">Algoritmos y Estructura de Datos (082021)</h3><div class="catedra" encurso="Aprobado"><div class="catedra_nombre"><span class=""><strong>En curso </strong> - Inicio de dictado 23/03/2022  <strong>(Vencida)</strong> - <a href="#" id="1" data-origen="EnCurso">Cerrar</a></span></div><div class="toggle_info_catedra" id="mat_1" style=""><div id="info_det_1">
    
    Comisión: K1193
            <h5>Evaluaciones parciales:</h5>`;

//Parte de parciales
//------ Inicio de class tabla -------
let table_start=`<table class="table table-condensed table-bordered table-optativas">
            <tbody><tr>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Tipo</th>
                <th>Nota</th>
                <th>Resultado</th>
            </tr>`

//----- Cada row ----------------
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

//----- Final de class tabla
let table_end="</tbody></table>"