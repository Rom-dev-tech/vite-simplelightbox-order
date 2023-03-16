const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// add this script
(() => {
  const images = document.querySelectorAll('.uk-inline');
  images.forEach(el => {
    const img = el.querySelector('img');
    el.href = img.src;
  });
})();
