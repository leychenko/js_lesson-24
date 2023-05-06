//================================= Задача 11 ==============================
// Задача 11. Користувач може змінювати колір фону, що вибирає користувач з використанням
// Зберігати цей колір і відновлювати при наступному відкритті. Також зберігати і відображати кількість змін протягом одного сеансу.


let input = document.querySelector("input")
const span = document.createElement("span")
sessionStorage.setItem("countChangeColor", 0)
document.querySelector(".task").append(span)

input.addEventListener("change", () => {
  let inp = document.querySelector("input").value
  localStorage.setItem('backgroundColor',inp)
  sessionStorage.countChangeColor++
  span.innerText = `Кількість змін кольору:  ${sessionStorage.getItem(
    "countChangeColor"
  )}`
})
