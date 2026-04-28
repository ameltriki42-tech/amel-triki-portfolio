const words = ["Textile Engineer", "LCA Researcher", "Sustainability Student"];

let i = 0;
let index = 0;
let current = "";
let isDeleting = false;

function type() {
  current = words[i];

  document.getElementById("typing").textContent =
    current.substring(0, index);

  if (!isDeleting) {
    index++;
  } else {
    index--;
  }

  if (index === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (index === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, 120);
}

type();
