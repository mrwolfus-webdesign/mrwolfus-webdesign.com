$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
    var hash = this.hash;
  
    $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
      }
    });
});

myID = document.getElementById("scroll__navbar");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    myID.className = "show"
  } else {
    myID.className = "hide"
  }
};
window.addEventListener("scroll", myScrollFunc);

const d = new Date();
let age = d.getFullYear() - 1999;
let year = d.getFullYear();
document.getElementById("age").innerHTML = age;
document.getElementById("year").innerHTML = year;

const n=document.querySelector("[data-age]"),
o=document.querySelector("[data-year]");
if(n){const e=new Date("03/08/1999"),t=Date.now()-e.getTime(),o=new Date(t);
n.innerHTML=Math.abs(o.getUTCFullYear()-1970)}o&&(o.innerHTML=(new Date).getFullYear());


(function(){
    emailjs.init("0Jila7RMB6nYYtRIH");
})();

function sendMail(){ 
    var thename = document.getElementById('nameform').value;
    var themail = document.getElementById('emailform').value;
    var themsg = document.getElementById('textform').value;
    var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (thename == "") {
        document.getElementById("emailerror").innerHTML = ("Please enter name!");
        setTimeout(function(){ 
            document.getElementById("emailerror").innerHTML = "";
        }, 3000);
    }
    else if (themail == "" || themail.match(!validmail)) {
        document.getElementById("emailerror").innerHTML = ("Please enter valid email!");
        setTimeout(function(){ 
            document.getElementById("emailerror").innerHTML = "";
        }, 3000);
    }

    else if (themsg == "") {
        document.getElementById("emailerror").innerHTML = ("Please enter message!");
        setTimeout(function(){ 
            document.getElementById("emailerror").innerHTML = "";
        }, 3000);
    }
    else {
    emailjs.sendForm('service_ol7g9k4', 'template_t4z47xi', '#formemail')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById("emailsend").innerHTML = ("Email send!");
        setTimeout(function(){ 
            document.getElementById("emailsend").innerHTML = "";
        }, 2000);
        }, function(error) {
        console.log('FAILED...', error);
        document.getElementById("emailerror").innerHTML = ("Something wrong - try again.");
        setTimeout(function(){ 
            document.getElementById("emailerror").innerHTML = "";
        }, 3000);
    });
}
}

const btn = document.getElementById('submitform');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById('nameform');
  const secondNameInput = document.getElementById('emailform');
  const thirdNameInput = document.getElementById('textform');

  console.log(firstNameInput.value);
  console.log(secondNameInput.value);
  console.log(thirdNameInput.value);

  firstNameInput.value = '';
  secondNameInput.value = '';
  thirdNameInput.value = '';
});


const menuLinks = document.querySelector(".navlinks__scroll").querySelectorAll("a i");
const sections = document.querySelectorAll('body > section');

window.addEventListener('scroll', () => {
  sections.forEach((section, key) => {
    const bounding = section.getBoundingClientRect();
    if ((bounding.bottom >= 0 && bounding.bottom <= window.innerHeight + 100)
      || (bounding.top >= -window.innerHeight && bounding.top <= 0)) {
      menuLinks.forEach(i => i.classList.remove('active'));
      const link = document.querySelector(".navlinks__scroll").querySelector(`a[href="#${section.id}"] i`);
      link.classList.add('active');
    }
  });
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show__section');
        }
        /*else {
            entry.target.classList.remove('show__section');
        }*/
    });
});

const hiddenElements = document.querySelectorAll('.hidden__section');
hiddenElements.forEach((el) => observer.observe(el));