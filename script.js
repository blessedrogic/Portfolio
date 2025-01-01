const scrollActive = document.querySelector('header');
window.addEventListener('scroll', addActiveToScroll);

function addActiveToScroll(){
    if(window.scrollY > 200) {
        scrollActive.classList.add('active');
    } else{
        scrollActive.classList.remove('active');
    }
}

const collectActiveContainer = document.querySelector('ul');
const collectActiveElement = document.querySelector('.toggle-arrow');

collectActiveElement.addEventListener('click', () => {
    collectActiveContainer.classList.toggle('active');
});

const allElements = document.querySelectorAll('.portfolio-hero, .about-me, .other-skill, .contact');
const allHrefs = document.querySelectorAll('li a');
let currentSection = 'Home';

window.addEventListener('scroll', () => {
    allElements.forEach(els => {
        if(window.scrollY >= els.offsetTop) {
            currentSection = els.id;
        }
    })

    allHrefs.forEach(refs => {
        if(refs.href.includes(currentSection)){
            document.querySelector('li .active').classList.remove('active');
            refs.classList.add('active');
        }
    })
})