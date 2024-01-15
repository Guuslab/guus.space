if (/Mobi/.test(navigator.userAgent) && !/iPad/.test(navigator.userAgent)) {

  const menuElement = document.querySelector('.menu-items');
  const iconElement = document.querySelector('.hamburger-icon');
  const logoElement = document.querySelector('.logo');
  const  skyContentElement = document.querySelector('.sky-content');
  const  artxContentElement = document.querySelector('.artx-content');

  menuElement.classList.remove('menu-items');
  menuElement.classList.add('menu-items-mob');

  iconElement.classList.remove('hamburger-icon');
  iconElement.classList.add('hamburger-icon-mob');

  logoElement.classList.remove('logo');
  logoElement.classList.add('logo-mob');
  
  skyContentElement.classList.remove('sky-content');
  skyContentElement.classList.add('sky-content-mob');

  artxContentElement.classList.remove('artx-content');
  artxContentElement.classList.add('artx-content-mob');
}


// window.addEventListener('resize', redrawCanvas, false);

// function redrawCanvas() {
//     var canvas = document.getElementById('space');
//     var context = canvas.getContext('2d');

//     // Clear the canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     // Set the canvas dimensions to the new window dimensions
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // Calculate the new center of the canvas
//     var centerX = canvas.width / 2;
//     var centerY = canvas.height / 2;

//     // Redraw the contents of the canvas
//     // (replace this with your own drawing code)
//     drawStuff(context, centerX, centerY);
// }