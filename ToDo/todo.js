let createBtn = document.querySelector('.create__btn')
    todoList = document.querySelector('.todo__list')
    tegs = document.getElementById('tegs')
    text = document.getElementById('todo__text')
    number = 1
    deleteAllBtn = document.querySelector('.delete__all__btn')

let tasks 

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))


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
            <span class="text">${task.text}</span>
            <span class="tag"> ${task.tag}</span>
            <span class="date">${task.date}</span>
            <button onclick="deleteTask(${index})" class="delete__btn" id="delete__btn">Удалить</button> 
        </li>`
}   




// const creator = ) => {
//     const item = {
//         number: numberValue,
//         text: textValue,
//         tag: tagValue,
//         date: dateValue
//     }

//      tasks.push(item)
// }




const fillList = () => {
    todoList.innerHTML = ''
    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            todoList.innerHTML += creatorElement(item, index)
        })
    }
}

fillList()

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
}


const deleteTask = index => {
    tasks.splice(index, 1)
    addLocal()
    fillList()
} 


deleteAllBtn.addEventListener("click", () => {
    tasks = []
    addLocal()
    fillList()
} )

