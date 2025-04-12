<script>
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalIcon = document.getElementById("modalIcon");
  const closeBtn = document.querySelector(".close-btn");

  const projectDetails = [
    {
      title: "Chat App",
      desc: "Full-stack real-time messaging app with socket.io and React.",
      icon: "💬"
    },
    {
      title: "Discord Clone",
      desc: "Voice and text chat app using WebRTC and Firebase.",
      icon: "🎧"
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather from OpenWeatherMap API.",
      icon: "☁️"
    },
    {
      title: "Portfolio",
      desc: "This site – built from scratch with custom animations and layout.",
      icon: "🧑‍💻"
    },
    {
      title: "To-Do App",
      desc: "Productivity tool to organize your day with sleek UI.",
      icon: "✅"
    },
    {
      title: "Snake Game",
      desc: "Classic snake game built using HTML Canvas.",
      icon: "🐍"
    },
    {
      title: "API Server",
      desc: "RESTful API built with Node.js and MongoDB.",
      icon: "🔌"
    },
    {
      title: "Image Gallery",
      desc: "Responsive dynamic grid gallery with modal previews.",
      icon: "🖼️"
    }
  ];

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = projectDetails[index].title;
      modalDescription.textContent = projectDetails[index].desc;
      modalIcon.textContent = projectDetails[index].icon;
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
</script>
