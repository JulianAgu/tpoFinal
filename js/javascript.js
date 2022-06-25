//Codigo js para el cambio automatico de las imagenes
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Cambia la imagen cada 5 seg
}

//Codigo viejo 

/*if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', SetFunctions());
  } else {
    SetFunctions();
  }

  function SetFunctions() {
    footerSetup();
    eventInput();
  }
function footerSetup() {
    const button = document.getElementById('footerButton')
    button.addEventListener("click", toggleStudents);
}
function eventInput() {
  const button = document.getElementById('eventInput');
  button.addEventListener("click", sendForm)
}
function sendForm() {
  console.log('form sent')
}
function toggleStudents() {
    const info = document.getElementById("studentsInformation")
    info.classList.toggle("hidden");
}*/
