
function createElement(value) {
  const div = document.createElement("div")
  div.className = "task"
  div.innerHTML = `${value}`
  return document.querySelector(".__container").append(div)
}
// Задача  1. Дано масив рядкових представлень чисел (тобто масив чисел у лапках (string). З використанням перевірки за допомогою регулярних виразів і груп підрахувати кількість тих, у яких перша і остання літери однакові.
const arrNum = ["232", "3456", "4874", "90", "210", "97809"]
const resultNum = arrNum.filter((el) => /(\d)(\d*)\1/g.test(el))
createElement(`<span class='num'>Задача 1.</span> Дано масив рядкових представлень чисел (тобто масив чисел у лапках (string). З використанням перевірки за допомогою регулярних виразів і груп підрахувати кількість тих, у яких перша і остання літери однакові
 -  <span>[${resultNum}]</span>`)

//===================================================================================
// Задача 2. Замінити номер розділяючи послідовності цифр дефісом згідно з форматом
// 0504546626   🡪  +380-50-45-466-26

const test = "0504546626"
const res = test.replace(
  /(\b0)(\d{2})(\d{2})(\d{3})(\d{2})/,
  "+38$1-$2-$3-$4-$5"
)
createElement(`<span class='num'>Задача 2.</span> Замінити номер розділяючи послідовності цифр дефісом згідно з форматом
0504546626   🡪  +380-50-45-466-26
 -  <span>[${res}]</span>`)
//=======================================================================================================
// Задача 3. Після кожного значення року після 2000 року додати «р.»
// «Я народився 2001, а в школі пішов 2007» 🡪 «Я народився 2001р., а в школі пішов 2007р.»
const text =
  "I born in 2001,and went to school in 2007. She liked these years 1998,2000,2011,2010"
const setSomeText = text.replace(/\b(200[1-9])|(20[1-9][0-9])\b/g, "$1$2p")
createElement(`<span class='num'>Задача 3.</span> Після кожного значення року після 2000 року додати «р.»
// «Я народився 2001, а в школі пішов 2007» 🡪 «Я народився 2001р., а в школі пішов 2007р.
 -  <span>${setSomeText}</span>`)
//=====================================================================================================
// Задача 4. Вводиться велике число. Кожні 3 розряди відділяти пробілом.
// 7457896524 🡪 7 457 896 524

const value = prompt('Введіть значення')
const resValue = value.replace(/(\d{3})\B/g,"$& ")
createElement(`<span class='num'>Задача 4.</span> Вводиться велике число. Кожні 3 розряди відділяти пробілом.
// 7457896524 🡪 7 457 896 524
7457896524 🡪 7 457 896 524.
 -  <span>${resValue}</span>`)

//   ===================================================================================



