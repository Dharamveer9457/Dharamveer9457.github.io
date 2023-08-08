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

   let blackColor = document.querySelector(".blackcolorText");
   

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


    // ---------hamburger menu--------------


// ---------------Welcome text change----------------

window.addEventListener("scroll", function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0) {
      // At the top of the page, show "Welcome"
      document.querySelector(".logo").innerText = "Welcome";
  } else {
      // Scrolled down, show "Dharamveer"
      document.querySelector(".logo").innerHTML = `<span style="color: red;">Dharam</span><span style="color: white;">veer</span>`;
  }
});



// -----------------Animated and running text---------------------

    const textLines = [
        "A Full Stack Web Developer",
        "A NodeJS Developer"
      ];
      
      const animatedText = document.querySelector(".animated-text");
      let lineIndex = 0;
      let charIndex = 0;
      
      function typeText() {
        if (lineIndex < textLines.length) {
          if (charIndex < textLines[lineIndex].length) {
            animatedText.textContent += textLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50); // Adjust the typing speed here
          } else {
            // Move to the next line after a short delay
            setTimeout(function() {
              animatedText.textContent = "";
              charIndex = 0;
              lineIndex = (lineIndex + 1) % textLines.length; // Loop back to the first line when reaching the last line
              typeText();
            }, 1500); // Adjust the delay before moving to the next line
          }
        }
      }
      
      typeText();
      
// --------------Form submission---------------------
const uname = document.getElementById("yourName");
const email = document.getElementById("yourEmail");
const msg = document.getElementById("yourMsg");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", ()=>{

    if(uname.value==""||email.value==""||msg.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Fill All the Fields',
            text: 'Please fill all the fields before sending the message.',
            confirmButtonText: 'OK'
          });
        } else {

          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            confirmButtonText: 'OK'
        })
    }
})
    
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })






