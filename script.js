<script>
  // Selecting the modal and its components
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalIcon = document.getElementById("modalIcon");
  const closeBtn = document.querySelector(".close-btn");

  // Array of project details
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

  // Querying all project cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      // Show the details of the selected project in the modal
      modalTitle.textContent = projectDetails[index].title;
      modalDescription.textContent = projectDetails[index].desc;
      modalIcon.textContent = projectDetails[index].icon;
      modal.style.display = "block"; // Display the modal
    });
  });

  // Close modal when the "close-btn" button is clicked
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal when clicked outside of it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
</script>
