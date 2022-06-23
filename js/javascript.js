if (document.readyState === 'loading') {
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
}
