const menuBtn = document.querySelector('.menu_btn')
const closeBtn = document.querySelector('.close_btn')
const nav = document.querySelector('nav')

const header = document.querySelector('header');
const sectionOne = document.querySelector('.hero');

menuBtn.addEventListener('click', ()=> {
    nav.classList.add('open')
})

closeBtn.addEventListener('click', ()=> {
    nav.classList.remove('open')
})

const sectionOneOptions = {
    rootMargin: '-250px 0px 0px 0px'
 }

const sectionOneObserver = new IntersectionObserver(function(
    entries, sectionOneObserver) 
{
    entries.forEach(entry => {

        if(!entry.isIntersecting) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);