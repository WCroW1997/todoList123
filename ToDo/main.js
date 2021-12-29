let todoList = document.querySelector('.todo__list')
let trashBox = document.querySelector('.trash__box')
let createBtn = document.querySelector('.create__btn')
let tegs = document.getElementById('tegs')
let text = document.getElementById('todo__text')
let number = 1
let deleteBtn = document.getElementsByClassName('delete__btn')
let deleteAllBtn = document.querySelector('.delete__all__btn')

let tasks
let trash = []

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))


createBtn.addEventListener("click", function() {
    let tegValue = tegs.value
    let todotextValue = text.value
    text.value = ''
    creator(number, todotextValue, tegValue, setDate())
    render(tasks)
    number++
    addLocal()

})




function moveTrash (element) {
    let strs = element.id.split('+')
        index = Number(strs[1])
    trash.push(tasks[index])
    tasks.split(index, 1)
}

// deleteBtn.addEventListener("click", moveTrash)

// deleteAllBtn.addEventListener("click", function() {
//     let list = document.getElementsByClassName('.todo__item')
//     list.remove()
// })

const creator = (numberValue, textValue, tagValue, dateValue) => {
    const item = {
        number: numberValue,
        text: textValue,
        tag: tagValue,
        date: dateValue
    }

    tasks.push(item)
}



// const render = (tasks , index) => {
//     todoList.innerHTML = ''
//     tasks.forEach(element => {
//         const liElement = document.createElement('li')
//               liElement.className = 'todo__item'
//               liElement.id = `todo__item`
//               liElement.insertAdjacentHTML('afterbegin', `
//                           <span class="number"> ${element.number}</span>
//                           <span class="text">${element.text}</span>
//                           <span class="tag"> ${element.tag}</span>
//                           <span class="date">${element.date}</span>
//                           <button onclick="deleteTask(${index})" class="delete__btn" id="delete__btn">Удалить</button> 
//             `)
//         todoList.append(liElement)
//     });
// }

// const creatorElement = (tasks, index) => {
//     let liElement.insertAdjacentHTML('afterbegin', `
//                             <li class="todo__item">
//                               <span class="number"> ${element.number}</span>
//                               <span class="text">${element.text}</span>
//                               <span class="tag"> ${element.tag}</span>
//                               <span class="date">${element.date}</span>
//                               <button onclick="deleteTask(${index})" class="delete__btn" id="delete__btn">Удалить</button> 
//                             </li>
//                 `)
// }


const fillList = () => {
    todoList.innerHTML = ''
    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            todoList.innerHTML += creatorElement(tasks, index)
        })
    }
}


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
    console.log(index)
} 