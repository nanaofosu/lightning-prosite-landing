// Smooth scroll and interactive behaviour
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Sticky header shrink on scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  }
  window.addEventListener('scroll', handleScroll);

  // Mobile navigation toggle
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('nav-open');
  });

  // Close nav when clicking a link (for mobile)
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', false);
      }
    });
  });

  // Handle form submission
  const form = document.getElementById('contact-form');
  const responseEl = document.getElementById('form-response');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    responseEl.textContent = '';
    const formData = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });
      if (res.ok) {
        form.reset();
        responseEl.textContent = 'Thank you! Your submission has been received.';
        responseEl.style.color = 'green';
      } else {
        responseEl.textContent = 'Oops! Something went wrong. Please try again later.';
        responseEl.style.color = 'red';
      }
    } catch (err) {
      responseEl.textContent = 'An error occurred. Please try again later.';
      responseEl.style.color = 'red';
      console.error(err);
    }
  });
});