const hamburger = document.querySelector('.hamburger')
const mobUl = document.querySelector('.another')
const mobileView = document.querySelector(".mob-view")

const links = document.querySelectorAll('.another li a')

hamburger.addEventListener('click', showHamburger)


function showHamburger(){
   mobUl.classList.toggle('mob-view')
   links.forEach( (link, index) => link.style.animation = `navLinkFade 5s ease forwards ${index / 7  +0.6}s `)

}


//To be deleted

function Cars(name, model, year){
   this.name = name,
   this.model = model, 
   this.year = year
}


