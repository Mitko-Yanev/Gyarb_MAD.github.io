var random = new Array()

random[0] = "https://www.youtube.com"
random[1] = "https://twitter.com"

function generator() {
    window.location = random[Math.floor(Math.random() * random.length)];
  }