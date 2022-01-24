const menuBtn = document.querySelector('.menu_btn')
const closeBtn = document.querySelector('.close_btn')
const nav = document.querySelector('nav')

menuBtn.addEventListener('click', ()=> {
    nav.classList.add('open')
})

closeBtn.addEventListener('click', ()=> {
    nav.classList.remove('open')
})

gsap.from('.hero h1', {
    duration: 1.8,
    opacity: 0,
    transform: 'translateY(50px)',
    ease: 'Expo.2'
})
gsap.from('ul li', {
    delay: .4,
    duration: 1.8,
    opacity: 0,
    stagger: .4,
    transform: 'translateY(-2em)'
})