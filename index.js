anime({
  targets: "#dark_smile",
  translateX: 1200,
  duration: 500,
});

anime({
  targets: "#I",
  translateX: 1200,
  duration: 500,
  delay: 1000,
});

anime({
  targets: "#L",
  translateX: 1200,
  duration: 500,
  delay: 2000,
});

anime({
  targets: "#O1",
  translateX: 1200,
  duration: 500,
  delay: 3000,
});

anime({
  targets: "#F",
  translateX: 1200,
  duration: 500,
  delay: 4000,
});

anime({
  targets: "#T",
  translateX: 1200,
  duration: 500,
  delay: 5000,
});

anime({
  targets: "#R",
  translateX: 1200,
  duration: 500,
  delay: 6000,
});

anime({
  targets: "#O2",
  translateX: 1200,
  duration: 500,
  delay: 7000,
});

anime({
  targets: "#P",
  translateX: 1200,
  duration: 500,
  delay: 8000,
});

anime({
  targets: "#char1",
  translateX: 1200,
  duration: 500,
  delay: 9000,
});

anime({
  targets: "#Y",
  translateX: 1200,
  duration: 500,
  delay: 10000,
});

anime({
  targets: "#M",
  translateX: 1200,
  duration: 500,
  delay: 11000,
});

anime({
  targets: "#brick1",
  translateX: 1200,
  duration: 3000,
  delay: 12000,
});

anime({
  targets: ".clover",
  translateX: 1500,
  duration: 3000,
  delay: 1000,
});

anime({
  targets: "#backend",
  translateX: 1400,
  duration: 3000,
  delay: 1000,
});

anime({
  targets: "#frontend",
  translateY: -900,
  translateX: 1200,
  duration: 3000,
  delay: 1000,
});

anime({
  targets: ".brick",
  translateX: 1630,
  duration: 3000,
});

anime({
  targets: ".love",
  translateX: 1400,
  duration: 3000,
});

anime({
  targets: ".react",
  translateX: 1000,
  translateY: 1000,
  duration: 3000,
});
anime({
  targets: ".web_develop",
  translateX: 1000,
  duration: 3000,
});

anime({
  targets: ".brick2",
  translateX: -1000,
  translatey: -1000,
  duration: 3000,
});

anime({
  targets: ".leaf",
  translateX: 1190,
  duration: 3000,
});

anime({
  targets: ".third",
  translateX: 1210,
  duration: 4000,
});

// play song
var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.src = "asset/DARK/play.png";
  } else {
    mysong.pause();
    icon.src = "asset/DARK/pause.png";
  }
};

// light mode
var smile = document.getElementById("smile");
var container1 = document.getElementById("container1");
var navbar = document.getElementById("navbar");
var clover = document.getElementById("clover");
var brick = document.getElementById("brick");
var brick1 = document.getElementById("brick1");
var brick2 = document.getElementById("brick2");
var dark_smile = document.getElementById("dark_smile");
var body = document.getElementById("body");
var web_develop = document.getElementById("web_develop");
var frontend = document.getElementById("frontend");

smile.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    smile.src = "asset/LIGHT/smile-white.png";
    dark_smile.src = "asset/LIGHT/smile-white.png";
    clover.src = "asset/LIGHT/clover-white.png";
    brick.src = "asset/LIGHT/single brick-white.png";
    brick1.src = "asset/LIGHT/brick-white.png";
    brick2.src = "asset/LIGHT/single brick-white.png";
    frontend.style.borderColor = "#eae7e1";
    frontend.style.color = "#eae7e1";
  } else {
    smile.src = "asset/DARK/smile.png";
    dark_smile.src = "asset/DARK/smile.png";
    clover.src = "asset/DARK/clover.png";
    brick.src = "asset/DARK/SINGLE_BRICK.png";
    brick1.src = "asset/DARK/brick.png";
    brick2.src = "asset/DARK/SINGLE_BRICK.png";
    frontend.style.borderColor = "#131313";
    frontend.style.color = "#131313";
  }
};



var clickElement = document.getElementById("CLICK");
var textElements = document.querySelectorAll(".text_section4");

var animation = anime({
  targets: textElements,
  translateY: 900,
  delay: function (el, i) {
    return i * 100;
  },
  easing: "easeInOutSine",
  autoplay: false,
});

var click = document.getElementById("CLICK");

document.querySelector(".CLICK").onclick = function () {
  animation.play();
  click.style.display = "none"; // Hide the CLICK element
};

