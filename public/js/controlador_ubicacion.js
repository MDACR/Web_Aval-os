'use strict';

const select_provincias = document.querySelector('#slt_provincias');
const select_cantones = document.querySelector('#slt_cantones');
const select_distritos = document.querySelector('#slt_distritos');

let llenar_provincias = () =>{
   
    for(let i = 0; i < provincias.length; i++){
        let nuevaOpcion = new Option(provincias[i]['nombre']);
        nuevaOpcion.value = provincias[i]['idProvincia'];
        select_provincias.appendChild(nuevaOpcion);
        select_cantones.innerHTML = '';
    }
};






let llenar_cantones = () =>{
    let provincia = select_provincias.value;
    select_cantones.innerHTML = '';
    select_distritos.innerHTML = '';
    
    for(let i = 0; i < cantones.length; i++){
        if(provincia == cantones[i]['Provincia_idProvincia']){
            let nuevaOpcion = new Option(cantones[i]['nombre']);
            nuevaOpcion.value = cantones[i]['idCanton'];
            select_cantones.appendChild(nuevaOpcion);
        }
       
    }
    
};


let empty=()=>{
    var node = document.createElement("OPTION");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);

    select_cantones.appendChild(node);


}

let llenar_distritos = () =>{
    
    let canton = select_cantones.value;
   select_distritos.innerHTML = ''; 
    
    for(let i = 0; i < distritos.length; i++){
        if(canton == distritos[i]['Canton_idCanton'] ){
            let nuevaOpcion = new Option(distritos[i]['nombre']);
            nuevaOpcion.value = distritos[i]['idDistrito'];
            select_distritos.appendChild(nuevaOpcion);
        }
        
    }
    
};

llenar_provincias();

select_provincias.addEventListener('change', llenar_cantones);
empty();

select_cantones.addEventListener('change', llenar_distritos);
llenar_cantones();








