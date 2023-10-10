function openMedia(element) {
    const media = element.querySelector('img, source');
    if (media) {
      const src = media.getAttribute('src');
      window.open(src);
    }
  }

  function playVideo() {
    var video = document.getElementById('mijnVideo');
    video.play();
  }