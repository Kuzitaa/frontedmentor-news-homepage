const menuButton = document.querySelector('.menu-icon')
const closeMenu = document.querySelector('.close-menu')
const navBar = document.querySelector('.navbar')
const darken = document.querySelector('.darken')

menuButton.addEventListener('click', menuDeploy)
closeMenu.addEventListener('click', menuDeploy)

function menuDeploy() {
    navBar.classList.toggle('inactive')
    darken.classList.toggle('inactive')
}