/*JS for preloader*/
var loader=document.getElementById("preloader");
	window.addEventListener("load",function(){
		loader.style.display = "none";
		})
/* end of JS for preloader*/

// Get the top to up button://
let mybutton = document.getElementById("myScrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}	

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//end of Get the top to up button://


/*js for navbar*/
		const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.childNodes.forEach(child => {
        if (child.classList && child.classList.contains('line1')) {
            child.classList.toggle('rotate-down');
        } else if (child.classList && child.classList.contains('line2')) {
            child.classList.toggle('fade-out');
        } else if (child.classList && child.classList.contains('line3')) {
            child.classList.toggle('rotate-up');
        }
    });
});
/*end of js for navbar*/