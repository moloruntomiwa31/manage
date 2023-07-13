const menuBtn = document.getElementById("menubtn")
const menu = document.getElementById("menu")
const theme = document.getElementById("theme")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})
theme.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
})