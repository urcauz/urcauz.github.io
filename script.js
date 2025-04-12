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
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
    },
    {
      title: "Discord Clone",
      desc: "Voice and text chat app using WebRTC and Firebase.",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather from OpenWeatherMap API.",
      icon: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png"
    },
    {
      title: "Portfolio",
      desc: "This site – built from scratch with custom animations and layout.",
      icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png"
    },
    {
      title: "To-Do App",
      desc: "Productivity tool to organize your day with sleek UI.",
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006543.png"
    },
    {
      title: "Snake Game",
      desc: "Classic snake game built using HTML Canvas.",
      icon: "https://cdn-icons-png.flaticon.com/512/1057/1057246.png"
    },
    {
      title: "API Server",
      desc: "RESTful API built with Node.js and MongoDB.",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png"
    },
    {
      title: "Image Gallery",
      desc: "Responsive dynamic grid gallery with modal previews.",
      icon: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
    }
  ];

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = projectDetails[index].title;
      modalDescription.textContent = projectDetails[index].desc;
      modalIcon.src = projectDetails[index].icon;
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
