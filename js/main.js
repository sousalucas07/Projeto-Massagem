//Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

//Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.8;
    } else {
        document.querySelector("#navbar").style.opacity = 0.9;
    }
});

//MENU MOBILE

/*const navbarItems = document.querySelector('#navbar-itens li')*/
const btnMobile = document.querySelector('#btn-mobile');
/*const btnMobile = document.getElementById('btn-mobile');*/

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
  const active = navbar.classList.contains ('active');
  event.currentTarget.setAttribute('aria-expanded',active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
  
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

//SLIDER CAROUSEL

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
    items[currentItem].scrollintoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    });
  });
});

// O QUE FAZEMOS

function exibirTexto(elemento) {
  if (elemento.style.display === "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
}

//ENVIO DO FORMULÁRIO

const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nome = document.getElementById('nome').value; 
        let queixas = document.getElementById('queixas').value; 
        let atv = document.getElementById('atv').value; 
        let condiçao = document.getElementById('condição').value; 
        let alergia = document.getElementById('alergia').value; 
        let pergunta = document.getElementById('resposta').value; 
        let numero = 5583987328810
var win= window.open(`https://wa.me/${numero}?text=Ola%20meu%20nome%20é%20${nome}! %0D%0AMinhas%20queixas são:%20${queixas}; %0D%0AAtividade%20física:%20${atv}; %0D%0ALesão:%20${condiçao}; %0D%0AAlergia:%20${alergia}; %0D%0APergunta:%20${pergunta}.`, '_blank');
}
evento.addEventListener('click', enviarFormulario)


window.sr = ScrollReveal({ reset: true});

sr.reveal('#clients', { rotate: {x: 0, y: 80, z: 0},duration: 1000});
sr.reveal('#features, #product', { rotate: {x: 0, y: 80, z: 0}, duration:2000});
sr.reveal('#feedbacks, #gallery, #contact, footer', { rotate: {x: 0, y: 80, z: 0}, duration:2000});


