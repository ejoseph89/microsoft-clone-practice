const toggleButton = document.querySelector('menu-btn');

toggleButton.addEventListener('click', menuToggle());


function menuToggle(){
  if (toggleButton.classList.contains('show')) {
    toggleButton.classList.remove('show')
  } else {
  
  }
}

