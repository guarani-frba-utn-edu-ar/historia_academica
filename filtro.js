
const filtros={
    "promocionadas":["analisis_1","algoritmos","arquitectura","ing_y_soc","discreta","sis_y_org","quimica"],
    "aprobadas":["analisis_1"],
    "desaprobadas":[],
    "ausente":[],
    "en_curso":["fisica_1","ingles_1","analisis_de_sist","analisis_2","sintax_y_semant"]
}

//Materias que estan en la pagina
let materias_onPage=[];
let materias_inFiltro=[];



function add(onPage_arr,filtro_arr){
     let added_arr=[];
     let repeated=false;

     for (let i of filtro_arr){
          repeated=false;
          let filtro_mat=i;
          
          for (let j of onPage_arr){
              let onPage_mat=j;
              
              //si ya esta en el onPage_arr, ponemos repeated=true
              if (filtro_mat==onPage_mat){
                 repeated=true;
                 break;
              }
          }
          //Si llega aca sin un "repeat=true" lo añadimos a added_arr
          if (!repeated){
            added_arr.push(filtro_mat);
          }
     }
     //Al final concatenamos onPageArr con added_arr;
     return onPage_arr.concat(added_arr);
}

//HAay un problema, de q pasa si una materia esta en varios filtros
//Al remover uno solo de ellos, removeriamos todos
function remove(onPage_arr,filtro_arr){
     
    for (let i of filtro_arr){
        let filtro_mat=i;

        for (let j=0;j<onPage_arr.length;j++){
            let onPage_mat=onPage_arr[j];
            
            //Si esta en onPage_arr, la sacamos 
            if (filtro_mat==onPage_mat){
                onPage_arr.splice(j,1);
                break;
            }
        }
    }
    return onPage_arr;
}


function set_materias(filtro_id,on){
    console.log("hola");
    materias_inFiltro=filtros[filtro_id];
    
    if (on){
        materias_onPage=add(materias_onPage,materias_inFiltro);
    }
    else{
        materias_onPage=remove(materias_onPage,materias_inFiltro)
    }
    //alert("hi")
    return materias_onPage.sort();
}

export {set_materias};