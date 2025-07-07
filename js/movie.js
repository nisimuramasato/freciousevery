  const video = document.getElementById("bgVideo");
  const sources = ["images/Movie5.webv", "images/Movie2.webv"];
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
