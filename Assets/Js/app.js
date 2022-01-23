const menuBtn = document.querySelector('.menu_btn')
const closeBtn = document.querySelector('.close_btn')
const nav = document.querySelector('nav')

menuBtn.addEventListener('click', ()=> {
    nav.classList.add('open')
})

closeBtn.addEventListener('click', ()=> {
    nav.classList.remove('open')
})