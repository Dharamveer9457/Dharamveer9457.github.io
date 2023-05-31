import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
    
    
    // Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }


    // Light Mode
    let lightmode = document.querySelector("#lightmode")

    lightmode.onclick = ()=>{
        if(lightmode.classList.contains("bx-sun")){
            lightmode.classList.replace('bx-sun','bx-moon');
             document.body.classList.remove('active');
        }else{
            lightmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }
    }




