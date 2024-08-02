function initAcc(elem, option){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .a-btn')) return;
        else{
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                    var elementList = document.querySelectorAll(elem+' .a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }            
                e.target.parentElement.classList.add('active');
            }else{
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}

initAcc('.accordion', false);


const words = ["Strategy", "Approach", "Plan", "Tactics"];
const textElement = document.getElementById('dynamic-text');
const cursor = document.querySelector('.cursor');
let currentIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const speed = 80;

function changeText() {
    const word = words[currentIndex];
    
    if (isDeleting) {
        textElement.textContent = word.substring(0, letterIndex--);
        if (letterIndex < 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
            setTimeout(changeText, 200); 
            return;
        }
    } else {
        textElement.textContent = word.substring(0, letterIndex++);
        if (letterIndex > word.length) {
            isDeleting = true;
            setTimeout(changeText, 500);
            return;
        }
    }
    
    setTimeout(changeText, speed);
}
changeText();
document.getElementById('hamburger-menu').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          backToTopButton.classList.add('show');
      } else {
          backToTopButton.classList.remove('show');
      }
  });

  backToTopButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});