document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.NoticiasCards', { delay: 500 });
  ScrollReveal().reveal('.descuentosCards ', { delay: 500 });
  ScrollReveal().reveal('.ShowCase', { delay: 500 });
  ScrollReveal().reveal('ShowCase2', { delay: 500 });