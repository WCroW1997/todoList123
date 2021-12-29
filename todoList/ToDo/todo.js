let createBtn = document.querySelector('.create__btn')
    todoList = document.querySelector('.todo__list')
    tegs = document.getElementById('tegs')
    text = document.getElementById('todo__text')
    number = 1
    deleteAllBtn = document.querySelector('.delete__all__btn')
    trashBox = document.querySelector('.trash__box')
    textChange = document.querySelectorAll('text')
let tasks
let trash 

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))
!localStorage.tasks ? trash = [] : trash = JSON.parse(localStorage.getItem('trash'))

function task(numberValue, textValue, tagValue, dateValue){
    this.number = numberValue
    this.text = textValue
    this.tag = tagValue
    this.date = dateValue
}



createBtn.addEventListener("click", () => {
    let tegValue = tegs.value
    let todotextValue = text.value
    tasks.push(new task(number, todotextValue, tegValue, setDate()))
    text.value = ''
    number++
    addLocal()
    fillList()
})


const creatorElement = (task, index) => {
    return `
        <li class="todo__item">
            <span class="number"> ${task.number}</span>
            <span class="text" onclick="showModal(${index})">${task.text}</span>
            <span class="tag"> ${task.tag}</span>
            <span class="date">${task.date}</span>
            <button onclick="deleteTask(${index})" class="delete__btn" id="delete__btn">Удалить</button> 
        </li>`
}   


const creatorTrashElement = (task, index) => {
    return `
        <li class="todo__item">
            <span class="number"> ${task.number}</span>
            <span class="text" onclick="showModal(${index})">${task.text}</span>
            <span class="tag"> ${task.tag}</span>
            <span class="date">${task.date}</span>
            <button onclick="removeTask(${index})" class="delete__btn" id="delete__btn">Востановить</button> 
            <button onclick="deleteTaskEver(${index})" class="delete__btn" id="delete__btn">Удалить</button> 
        </li>`
}   




const fillList = () => {
    todoList.innerHTML = ''
    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            todoList.innerHTML += creatorElement(item, index)
        })
    }
}


const trashList = () => {
    trashBox.innerHTML = ''
    if(trash.length > 0){
        trash.forEach((item, index) => {
            trashBox.innerHTML += creatorTrashElement(item, index)
        })
    }
}

fillList()
trashList()

const setDate = () => {
    let today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    let dateNow = `${dd}-${mm}-${yyyy} ` 
    return dateNow
}

const addLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('trash', JSON.stringify(trash))
}


const deleteTask = index => {
    trash.push(tasks[index])
    tasks.splice(index, 1)
    addLocal()
    fillList()
    trashList()
} 


const deleteTaskEver = index => {
    trash.splice(index, 1)
    addLocal()
    trashList()
}


const removeTask = index =>{
    tasks.push(trash[index])
    trash.splice(index, 1)
    addLocal()
    trashList()
    fillList()
}




const moveTrash = index => {
    addLocal()
    fillList()
}


deleteAllBtn.addEventListener("click", () => {
    tasks = []
    trash = []
    addLocal()
    fillList()
    trashList()
} )

// modal


const showModal = index => {
    let modalWindow = document.querySelector('.modal')
    let closeModalWindow = document.querySelector('.modal__close__btn')
    modalWindow.classList.add('modal__show')
    closeModalWindow.addEventListener("click", ()  => {
        modalWindow.classList.remove('modal__show')
    })  
    // addAttribute()
}

// const chageText = index => {
//     console.log(tasks[index])
// }


// const addAttribute = () => {
//     let chegeBtn = document.querySelector('.modal__btn')
//     chegeBtn.setAttribute('onclick', 'newTaskValue(this)')

// }


const newTaskValue = index => {
    console.log(tasks[index])
}