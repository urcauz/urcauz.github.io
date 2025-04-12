<script>
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close-btn");

  const projectDetails = [
    { title: "Chat App", desc: "Full-stack real-time messaging app with socket.io and React." },
    { title: "Discord Clone", desc: "Voice and text chat app using WebRTC and Firebase." },
    { title: "Weather App", desc: "Fetches real-time weather from OpenWeatherMap API." },
    { title: "Portfolio", desc: "This site – built from scratch with custom animations and layout." },
    { title: "To-Do App", desc: "Productivity tool to organize your day with sleek UI." },
    { title: "Snake Game", desc: "Classic snake game built using HTML Canvas." },
    { title: "API Server", desc: "RESTful API built with Node.js and MongoDB." },
    { title: "Image Gallery", desc: "Responsive dynamic grid gallery with modal previews." }
  ];

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = projectDetails[index].title;
      modalDescription.textContent = projectDetails[index].desc;
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Scroll Reveal Animation
  const sections = document.querySelectorAll('.section');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 1.2;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
</script>
