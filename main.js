let Personas = []

let tabla = document.getElementById('tabla')
function llenarTabla(){
    tabla.innerHTML = ''
    Personas.forEach((usuario, index)=>{
        tabla.innerHTML += `
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

addButton.addEventListener('click', addStudent)


function addUsuario(){
    let usuario = {
        name: inputName.value,
        task: inputCourse.value
    }
    Personas.push(usuario)
    llenarTabla()
}

// let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
// deleteButtons.forEach((button)=>{
//     button.addEventListener('click', (event)=>deleteUser(event.target.id))
// })

function deleteUser(name){
    Personas = Personas.filter((usuario)=>usuario.name!==name)
    llenarTabla()
}


