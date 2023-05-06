
function getInterval(min,max) {
	return min + Math.floor(Math.random() * max - min + 1)
}

function getRandomIndex(localStorage) {
	return Math.floor(Math.random() * localStorage.length)
}
function saveDataLocal(key,value) {
	localStorage.setItem(key,value)
}

if(localStorage){
   let interval = setInterval(() => {
     let task = localStorage.key(getRandomIndex(localStorage))
     let question = confirm(localStorage.getItem(task))
     if (question) localStorage.removeItem(task)
      if (localStorage.length === 0) {
        clearInterval(interval)
      }
   }, getInterval(2, 5) * 1000)
} 


let task1 = saveDataLocal("Задача 1", "Купити для жінки квіти	")
let task2 = saveDataLocal("Задача 2", "Помити машину")
let task3 = saveDataLocal("Задача 3", "Забрати дитину із садочка")
let task4 = saveDataLocal("Задача 4", "Подивитись фільм")
let task5 = saveDataLocal("Задача 5", "Урок англійської")
let task6 = saveDataLocal("Задача 6", "Час відпочивати")

//========================================================================================================================================================


