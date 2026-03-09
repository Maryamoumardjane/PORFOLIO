// Attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function () {

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== ANIMATION AU SCROLL =====
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  });

  // ===== AJOUT DE TÉMOIGNAGE =====
  const form = document.getElementById('testimonial-form');
  const testimonialsList = document.getElementById('testimonials-list');

  if (form && testimonialsList) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const text = document.getElementById('testimonial-text').value.trim();
      const name = document.getElementById('testimonial-name').value.trim();

      if (text && name) {
        const newTestimonial = document.createElement('div');
        newTestimonial.classList.add('testimonial');

        const p = document.createElement('p');
        p.textContent = `"${text}"`;

        const h4 = document.createElement('h4');
        h4.textContent = `— ${name}`;

        newTestimonial.appendChild(p);
        newTestimonial.appendChild(h4);

        testimonialsList.prepend(newTestimonial);

        form.reset();
      }
    });
  }

 
});


alert("Merci pour ton témoignage !");


let btn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  window.scrollTo({top:0, behavior:'smooth'});
};