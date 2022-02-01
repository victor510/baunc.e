const menuBtn = document.querySelector('.menu_btn')
const closeBtn = document.querySelector('.close_btn')
const nav = document.querySelector('nav')

const sectionalOverlay = document.querySelector('.sectional_overlay')
const shoeDetailDisplaySection = document.querySelector('.full_shoe_display')

// const displayShoeDetailsBtn = document.getElementsByClassName('.shop_shoe')
const displayShoeDetailsBtn = document.querySelectorAll('.shop_shoe')
const closeShoeDisplayBtn = document.querySelector('.full_shoe_display .close_btn')

menuBtn.addEventListener('click', ()=> {
    nav.classList.add('open')
})

closeBtn.addEventListener('click', ()=> {
    nav.classList.remove('open')
})


for( var element of displayShoeDetailsBtn) {
    element.addEventListener('click', ()=> {
        shoeDetailDisplaySection.classList.add('active')
        sectionalOverlay.classList.add('active')
    })
}

closeShoeDisplayBtn.addEventListener('click', ()=> {
    shoeDetailDisplaySection.classList.remove('active')
    sectionalOverlay.classList.remove('active')
})