// usando classList y toggle

let ham = document.querySelector(".ham");
ham.addEventListener('click', function(){

  let links = document.querySelector(".links");
  let arrow = document.querySelector(".arrow");
  let h1 = document.querySelector(".nav-title");
  
  links.classList.toggle('activado');
  arrow.classList.toggle('desactivado');
  h1.classList.toggle('desactivado');

})