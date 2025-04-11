
const text = "All-time caffeinated, full stack & full style ☕";
let i = 0;
const speed = 50;
const el = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
