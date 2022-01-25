gsap.registerPlugin(ScrollTrigger);

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

const feature1 = document.querySelector('.feature_1_img');

feature1.addEventListener('mouseenter', ()=> {
    gsap.to('.overlay', {
        duration: .8,
        opacity: 1
    })
})