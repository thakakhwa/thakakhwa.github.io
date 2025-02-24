function createFallingStar() {
  const star = document.createElement("div");

  const positionChoice = Math.random();
  let leftPosition;
  let topPosition;

  if (positionChoice < 0.33) {
    leftPosition = Math.random() * window.innerWidth;
    topPosition = -10;
  } else if (positionChoice < 0.66) {
    leftPosition = -10;
    topPosition = Math.random() * window.innerHeight;
  } else {
    leftPosition = window.innerWidth - Math.random() * window.innerWidth;
    topPosition = window.innerHeight + 10;
  }

  const animationDuration = Math.random() * 3 + 2;

  star.classList.add("falling-star");
  star.style.left = `${leftPosition}px`;
  star.style.top = `${topPosition}px`;
  star.style.animation = `fall ${animationDuration}s linear forwards`;

  const container = document.getElementById("movingBlocks");
  container.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, animationDuration * 1000);
}

setInterval(createFallingStar, 50);
const toggleswitch = document.querySelector("#toggleSwitch");
const switchlabelcolor = document.querySelector("#switchlabelcolor");
const bodydivtext = document.querySelector("#bodydiv");
const link = document.querySelector("#b11");
const restofthelinks = document.querySelectorAll("#b1");
const sociallinks = document.querySelectorAll("#links");
const resumebutton=document.querySelector("#resumebutton");
const bdiv=document.querySelector("#bdiv");
const header=document.querySelector("#header");
let intervalId;

function startDotAnimation(color) {
  const bodyDiv2 = document.getElementById("bodydiv2");
  let dotCount = 1;
  clearInterval(intervalId);
  bodyDiv2.style.color = color;
  intervalId = setInterval(() => {
    bodyDiv2.innerHTML = `{${".".repeat(dotCount)}}`;
    dotCount = dotCount < 8 ? dotCount + 1 : 1;
  }, 500);
}

toggleswitch.addEventListener("change", function () {
  if (this.checked) {
    document.body.style.backgroundColor = "white";
    switchlabelcolor.style.color = "black";
    bodydivtext.style.color = "#6120f8";
    resumebutton.style.color="black"
    bdiv.style.color="black"
    bdiv.style.border="1px solid rgba(97, 32, 248, 0.6)"
    header.style.backgroundColor="rgba(255, 255, 255, 0.6)"
    header.style.border="1px solid rgba(115, 0, 255, 0.36)"
    header.style.boxShadow="0 0 25px rgba(97, 32, 248, 0.6)"
    resumebutton.style.boxShadow="0 0 25px rgba(97, 32, 248, 0.6)";
    resumebutton.addEventListener("mouseover", function () {
      resumebutton.style.boxShadow="0 0 25px rgb(97, 32, 248)";
    });
    resumebutton.addEventListener("mouseout", function () {
      resumebutton.style.boxShadow="0 0 25px rgba(97, 32, 248, 0.6)";
    });

    startDotAnimation("#6120f8");
    link.addEventListener("mouseover", function () {
      link.style.color = "black";
    });
    link.addEventListener("mouseout", function () {
      link.style.color = "#6120f8";
    });
    restofthelinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = "black";
      });
      link.addEventListener("mouseout", function () {
        link.style.color = "#6120f8";
      });
    });
    sociallinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = "black";
      });
      link.addEventListener("mouseout", function () {
        link.style.color = "#6120f8";
      });
    });
    
  }
  if (!this.checked) {
    startDotAnimation("white");
    document.body.style.backgroundColor = "black";
    bodydivtext.style.color = "white";
    switchlabelcolor.style.color = "white";
    resumebutton.style.color="white"
    bdiv.style.color="#bababa"
    bdiv.style.border="1px solid rgba(97, 32, 248, 0.2)"
    header.style.backgroundColor="rgba(255, 255, 255, 0)"
    header.style.border="1px solid rgba(97, 32, 248, 0.2)"
    header.style.boxShadow="0 0 25px rgba(97, 32, 248, 0.1)"
    resumebutton.style.boxShadow="0px 0px 18px 4px rgba(97, 32, 248, 0.4)";
    //for the first link(about me)
    link.addEventListener("mouseover", function () {
      link.style.color = "white";
    });
    link.addEventListener("mouseout", function () {
      link.style.color = "#6120f8";
    });

    //links under the about me
    restofthelinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = "white";
      });
      link.addEventListener("mouseout", function () {
        link.style.color = "#6120f8";
      });
    });


    //for the social media links
    sociallinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = "white";
      });
      link.addEventListener("mouseout", function () {
        link.style.color = "#6120f8";
      });
    });
  }
});

function updateButtonStyles() {
  if (toggleswitch.checked) {
      resumebutton.style.color = "black";
      resumebutton.style.backgroundColor = "white";
  } else {
      resumebutton.style.color = "white";
      resumebutton.style.backgroundColor = "black";
  }
}
toggleswitch.addEventListener("change", updateButtonStyles);
resumebutton.addEventListener("mousedown", function () {
  if (toggleswitch.checked) {
      this.style.backgroundColor = "black";
      this.style.color = "#6120f8";
  } else {
      this.style.backgroundColor = "white";
      this.style.color = "#6120f8";
  }
});
resumebutton.addEventListener("mouseup", updateButtonStyles);
toggleswitch.addEventListener("change", function () {
  updateButtonStyles();
});
startDotAnimation("white");


