let students = []

let tabla = document.getElementById('tabla')
function llenarTabla(){
    tabla.innerHTML = ''
    students.forEach((student, index)=>{
        tabla.innerHTML += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>
                    <button type="button" class="btn btn-primary editar" id=${student.name}>Editar</button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger eliminar" id=${student.name}>
                        Eliminar
                    </button>
                </td>
            </tr>`
    })

    let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
    deleteButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>deleteUser(event.target.id))
})
    let editButtons = Array.from(document.getElementsByClassName('btn btn-warning editar'))
    deleteButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>editUser(event.target.id))
})
}

llenarTabla()

let inputName = document.getElementById('name')
let inputCourse = document.getElementById('course')
let addButton = document.getElementById('add')

addButton.addEventListener('click', addStudent)


function addStudent(){
    let student = {
        name: inputName.value,
        course: inputCourse.value
    }
    students.push(student)
    llenarTabla()
}




function deleteUser(name){
    students = students.filter((student)=>student.name!==name)
    llenarTabla()
}
function editUser(name){
    listado = listado.filter(usuario=> usuario.name === name) 
    nombreEditado = inputName.value
    tareaEditada = inputCourse.value
}

//Esto que está debajo fue todo lo que estuve intentando hacer para incorporar el LocalStorage, pero por alguna razon me empezo no a tirar
//errores, si no que me dejo de funcionar por completo, sin poder agregar, sin poder eliminar ni menos editar. Tuve que volver atrás,
//preferí entregar algo a tiempo en vez de perder la oportunidad de recorrección, además de poder aclarar dudas con los días de PonteAldía.



//let listado = []

// let tabla = document.getElementById('tabla')
// function llenarTabla(){ //Esta función realizará la tarea automática, usamos forEach para que pase por cada objeto del array.
//     let TareasGuardadas = localStorage.getItem('lista')
//         if(TareasGuardadas == null){
//         listado = []
//         }else{
//             listado = JSON.parse(TareasGuardadas)
//         }   
//     tabla.innerHTML = '' // Se deja vacío como truco para entregar la tabla en 0 y solo con los elementos que quiero mostrar y agregar. Evitar duplicaciones
//     listado.forEach((usuario, index)=>{
//         tabla.innerHTML +=  //aquí se usa con "backSticks" (``)<-- en vez de otro tipo de comillas ni simples ni dobles. 
//         //Es un requerimiento de innerHTML
//         `
//             <tr>
//                 <th scope="row">${index+1}</th>
//                     <td>${usuario.name}</td>
//                     <td>${usuario.task}</td>
//                     <td><button type="button" class="btn btn-warning editar" id=${usuario.name}>Editar</button></td>
//                     <td><button type="button" class="btn btn-danger eliminar" id=${usuario.name}>Eliminar</button></td>
//             </tr>`
//     })


//     let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
//     deleteButtons.forEach((button)=>{
//     button.addEventListener('click', (event)=>deleteUser(event.target.id))
// })
//     let editButtons = Array.from(document.getElementsByClassName('btn btn-warning editar'))
//     deleteButtons.forEach((button)=>{
//     button.addEventListener('click', (event)=>editUser(event.target.id))
// })
// }

// llenarTabla()

// let inputName = document.getElementById('name')
// let inputTask = document.getElementById('task')

// let addButton = document.getElementById('add')
// addButton.addEventListener('click', (event)=>addTask(event)) //esta funcion recibe 2 parametros, y realizará alguna tarea al momento de hacer click en este caso.


// function addTask(event){
//     event.prevenDefault()
//     let TareasGuardadas = localStorage.getItem('lista')
//         if(TareasGuardadas == null){
//         listado = []
//         }else{
//             listado = JSON.parse(TareasGuardadas)
//         }   
//     let id = listado[listado.length-1]?.id || 0;
//     let nuevaTarea = {
//         id: id+1,
//         name: inputName.value,
//         task: inputTask.value
//     }
//     listado.push(nuevaTarea)
//     localStorage.setItem('lista',JSON.stringify(listado))
//     llenarTabla()
//     inputName.value = ''
//     inputTask.value = ''     
//     }




// function deleteUser(name){
//     listado = listado.filter(usuario=> usuario.name != name) //con esto estoy devolviendo todos los que son distintos al que estoy seleccionando y se lo asocio al Array (lo sobreescribo)
//     localStorage.setItem('lista', JSON.stringify(listado))
//     llenarTabla()
// }
// function editUser(name){
//     listado = listado.filter(usuario=> usuario.name === name) 
//     inputName.value = valorEditado.name
//     inputTask.value = valorEditado.task
// }
// let updateButton = document.getElementById('Confirma')
// updateButton.addEventListener('click', (event)=>actualizarTarea(event.target.id))

// function actualizartarea(name){
//     listado.forEach(usuario=>{
//         if(usuario.name === name){
//             usuario.name = inputName.value
//             usuario.task = inputName.task
//         }
//     }) 
// }

