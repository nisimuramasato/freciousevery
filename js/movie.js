  const video = document.getElementById("bgVideo");
  const sources = ["images/Movie1.mp4", "images/Movie2.mp4"];
  let current = 0;

  function playNextVideo() {
    video.src = sources[current];
    video.load();
    video.play();
    current = (current + 1) % sources.length;
  }

  video.addEventListener("ended", playNextVideo);

  // 初回再生
  playNextVideo();
