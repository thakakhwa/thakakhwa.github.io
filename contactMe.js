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

const header = document.querySelector("#header");
const toggleswitch = document.querySelector("#toggleSwitch");
const switchlabelcolor = document.querySelector("#switchlabelcolor");
const link = document.querySelector("#b11");
const restofthelinks = document.querySelectorAll("#b1"); 
const sociallinks = document.querySelectorAll("#links");

toggleswitch.addEventListener("change", function () {
    if (this.checked) {
        document.body.style.backgroundColor = "white";
        switchlabelcolor.style.color = "black";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        header.style.border = "1px solid rgba(115, 0, 255, 0.36)";
        header.style.boxShadow = "0 0 25px rgba(97, 32, 248, 0.6)";

        if (typeof startDotAnimation === "function") {
            startDotAnimation("#6120f8");
        }

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
    } if (!this.checked){
        document.body.style.backgroundColor = "black";
        switchlabelcolor.style.color = "white";
        header.style.backgroundColor="rgba(255, 255, 255, 0)"
    header.style.border="1px solid rgba(97, 32, 248, 0.2)"
    header.style.boxShadow="0 0 25px rgba(97, 32, 248, 0.1)"
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

