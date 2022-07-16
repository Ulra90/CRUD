let Personas = []

let tabla = document.getElementById('tabla')
function llenarTabla(){ //Esta función realizará la tarea automática, usamos forEach para que pase por cada objeto del array.
    tabla.innerHTML = '' // Se deja vacío como truco para entregar la tabla en 0 y solo con los elementos que quiero mostrar y agregar. Evitar duplicaciones
    Personas.forEach((usuario, index)=>{
        tabla.innerHTML +=  //aquí se usa con "backSticks" (``)<-- en vez de otro tipo de comillas ni simples ni dobles. 
        //Es un requerimiento de innerHTML
        `
            <tr>
                <th scope="row">${index+1}</th>
                    <td>${usuario.name}</td>
                    <td>${usuario.task}</td>
                    <td>
                        <button type="button" class="btn btn-warning">Editar</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger eliminar" id=${usuario.name}>
                        Eliminar
                        </button>
                    </td>
            </tr>`
    })


    let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
    deleteButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>deleteUser(event.target.id))
})
}

llenarTabla()

let inputName = document.getElementById('name')
let inputTask = document.getElementById('task')
let addButton = document.getElementById('add')

addButton.addEventListener('click', addUsuario) //esta funcion recibe 2 parametros, y realizará alguna tarea al momento de hacer click en este caso.


function addUsuario(){
    let usuario = {
        name: inputName.value,
        task: inputTask.value
    }
    Personas.push(usuario) //con esto llevo este objeto usuario con sus valores inpuntName e inputTask al Array Personas
    llenarTabla()
}


function deleteUser(name){
    Personas = Personas.filter((usuario)=>usuario.name!==name) //con esto estoy devolviendo todos los que son distintos al que estoy seleccionando y se lo asocio al Array (lo sobreescribo)
    llenarTabla()
}


