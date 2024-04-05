const anchors = [].slice.call(document.querySelectorAll('a[href^="#"]'));
anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.hash);
    const targetPosition = window.pageYOffset + target.getBoundingClientRect().top;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    e.preventDefault();
  });
});