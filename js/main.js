if (/Mobi/.test(navigator.userAgent) && !/iPad/.test(navigator.userAgent)) {

    const heroElement = document.querySelector('.hero-text');

    heroElement.classList.remove('hero-text');
    heroElement.classList.add('hero-text-mob');
  
  }
  