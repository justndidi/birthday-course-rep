const birthdayPerson = {
    name: "Okafor Emmanuel Chibuzor",
     message: `
        Happy Birthday! 🎉

        I just wanted to take a moment to wish you
        an amazing birthday and let you know that
        I really appreciate you.

        Thank you for always putting in the effort
        to keep things organized and making sure
        everyone gets the information they need.

        I hope this new chapter brings you happiness,
        success, beautiful memories, and everything
        you've been hoping for.

        Have an amazing birthday! 🥳💜
    `
};
const personName = document.getElementById("personName");

personName.textContent = birthdayPerson.name;
// const birthdayMessage =
//     document.getElementById("birthdayMessage");

//     birthdayMessage.innerHTML = `
//     <p>
//         ${birthdayPerson.message}
//     </p>
// `;

// =========================
// SURPRISE BUTTON
// =========================

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {
  document.querySelector(".birthday-section").scrollIntoView({
    behavior: "smooth",
  });
});

// =========================
// BLOW OUT THE CANDLES
// =========================

const blowBtn = document.getElementById("blowBtn");
const flames = document.querySelectorAll(".flame");
const wishMessage = document.getElementById("wishMessage");

let candlesBlown = false;

blowBtn.addEventListener("click", () => {
  if (candlesBlown) {
    return;
  }

  candlesBlown = true;

  // Put out the flames
  flames.forEach((flame, index) => {
    setTimeout(() => {
      flame.style.opacity = "0";

      flame.style.transform = "translateX(-50%) scale(0)";
    }, index * 150);
  });

  // Change button
  setTimeout(() => {
    blowBtn.textContent = "Wish Made! ✨";

    blowBtn.style.background = "#8d4d7e";
  }, 800);

  // Show wish message
  setTimeout(() => {
    wishMessage.classList.add("show");

    createConfetti();
  }, 1000);
});

// =========================
// CONFETTI
// =========================

function createConfetti() {
  const confettiCount = 80;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDelay = Math.random() * 2 + "s";

    confetti.style.background = getRandomColor();

    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// =========================
// CONFETTI COLORS
// =========================

function getRandomColor() {
  const colors = [
    "#c34e88",
    "#8d4d7e",
    "#f8d78d",
    "#f5c6d9",
    "#ffffff",
    "#6d4b8b",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

// =========================
// PHOTO LIGHTBOX
// =========================

const galleryPhotos =
    document.querySelectorAll(
        ".main-photo img, .small-photo img"
    );

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


galleryPhotos.forEach((photo) => {

    photo.addEventListener("click", () => {

        lightboxImage.src = photo.src;

        lightbox.classList.add("show");

    });

});


/* CLOSE WITH X */

lightboxClose.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


/* CLOSE BY CLICKING OUTSIDE THE PHOTO */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});
// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads

revealOnScroll();