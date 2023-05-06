//=================================================================================================================================
// Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
const studentAgeList = [22, 19, 23, 19, 21, 22, 26, 19, 21, 22, 26, 19]
let mapStudent = new Map()
for (const age of studentAgeList) {
  let countAge = mapStudent.get(age) || 0
  mapStudent.set(age, countAge + 1)
}
let max = Math.max(...studentAgeList)
mapStudent.set("max", max)
console.log("Задача 5")
console.log(mapStudent)
console.log("==========================")

//===============================================================================================================================================
//Задача 6.  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
const bookList = [
  {
    title: "War and Peace",
    year: 1920,
    author: "Lev Tolstoy",
  },
  {
    title: "The India Story",
    year: 1998,
    author: "Bimal Jalal",
  },
  {
    title: "Гроздья гнева",
    year: 1939,
    author: "Джон Стейнбек",
  },
  {
    title: "Манхэттен",
    year: 1925,
    author: "Джон Стейнбек",
  },
  {
    title: "Властелин колец",
    year: 1955,
    author: "Дж. Р. Р. Толкин",
  },
  {
    title: "Some book",
    year: 1965,
    author: "Дж. Р. Р. Толкин",
  },
]

let books = new Map()
for (const authors of bookList) {
  let countBooks = books.get(authors.author) || 0
  books.set(authors.author, countBooks + 1)
}
console.log("Задача 6")
console.log(books)
console.log("==========================")

//=======================================================================================================================================
//Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
const visiters = [
  {
    login: "user1",
  },
  {
    login: "user2",
  },
  {
    login: "user3",
  },
  {
    login: "user1",
  },
  {
    login: "user2",
  },
  {
    login: "user1",
  },
  {
    login: "user3",
  },
  {
    login: "user2",
  },
]

let siteVisit = new Map()

for (const visiter of visiters) {
  let userCountVisited = siteVisit.get(visiter.login) || 0
  siteVisit.set(visiter.login, userCountVisited + 1)
}
console.log("Задача 7")
console.log(siteVisit)
console.log("==========================")

//=======================================================================================================================================
//Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
const studentList = [
  {
    name: "Danilov Ivan",
    facultet: "history",
    course: 2,
  },
  {
    name: "Zubov Nikolay",
    facultet: "history",
    course: 4,
  },
  {
    name: "Shutova Olga",
    facultet: "sport",
    course: 1,
  },
  {
    name: "Lunin Oleg",
    facultet: "it",
    course: 5,
  },
  {
    name: "Shishkina Mariy",
    facultet: "language",
    course: 2,
  },
  {
    name: "Djon Week",
    facultet: "language",
    course: 3,
  },
  {
    name: "John Travolta",
    facultet: "history",
    course: 2,
  },
]

const facultets = new Map()
const courses = new Map()

for (const student of studentList) {
  let facultetCount = facultets.get(student.facultet) || 0
  let courseCount = courses.get(student.course) || 0
  facultets.set(student.facultet, facultetCount + 1)
  courses.set(student.course, courseCount + 1)
}
console.log("Задача 8")
console.log(facultets)
console.log(courses)
console.log("==========================")
//============================================================================================================
// Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
let result = new Map()
for (const temp of temperatures) {
  let tempNum = result.get(temp) || 0
  result.set(temp, tempNum + 1)
}
let newArrTemp = temperatures.map((tmp) => Math.ceil(tmp))
let quantityDiffTemp = new Set(newArrTemp).size
console.log("Задача 9")
console.log(result)
console.log(" Кількість входжень температури: " + quantityDiffTemp)
console.log("==========================")
//================================================================================================================
// Задача 10 Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
const studentHistoryFaculet = ["Ivan", "John", "Tommy", "Ira", "Olga", "Garry"]
const studentMathFaculet = ["Tommy", "Garry", "Sveta", "Nikolay", "Ira"]
const allSsutents = [...studentHistoryFaculet, ...studentMathFaculet]
let map = new Map()
for (const student of allSsutents) {
  let countSrudent = map.get(student) || 0
  map.set(student, countSrudent + 1)
}
let howStudenGoTwoGroups = 0
for (const std of map.values()) {
  if (std === 2) howStudenGoTwoGroups++
}
console.log("Задача 10")
console.log(map)
console.log(
  "Кількість студентів які відвідують два гуртки: " + howStudenGoTwoGroups + " студента"
)
console.log("==========================")
