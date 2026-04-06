let video = document.querySelector(".video2");

let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    toggleBtn.textContent = "Pause";
  } else {
    video.pause();
    toggleBtn.textContent = "Play";
  }
});

let videoq = document.querySelector(".video3");

let toggleBtnq = document.getElementById("toggleBtn");

toggleBtnq.addEventListener("click", function() {
  if (videoq.paused) {
    videoq.play();
    toggleBtnq.textContent = "Pause";
  } else {
    videoq.pause();
    toggleBtnq.textContent = "Play";
  }
});

