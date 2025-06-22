const signUpModal = document.getElementById("signup-modal");
const signupButton = document.querySelector(".btn-signup");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const modalBody = document.querySelector(".modal-container");
const cardX = document.querySelector(".card-x");
const mobileMenuBtn = document.querySelector(".mobile-menu");
const mobileMenuIcon = document.querySelector(".menu-icon");
const mobileNavLinks = document.querySelector(".mobile-nav");

signUpModal.style.display = "none";

function setCardTransform(card, transform) {
  card.style.transform = transform;
}

function resetCardTransform(card, transform) {
  setTimeout(() => {
    card.style.transform = transform;
  }, 1200);
}

card1.addEventListener("mouseover", () =>
  setCardTransform(
    card1,
    "rotateX(50deg) rotateY(-8deg) rotateZ(10deg) scaleY(1.2) translateX(-1em)"
  )
);
card1.addEventListener("mouseleave", () =>
  resetCardTransform(
    card1,
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) translate(0)"
  )
);

card2.addEventListener("mouseover", () =>
  setCardTransform(card2, "rotateX(40deg) rotateY(0deg) rotateZ(0deg)")
);
card2.addEventListener("mouseleave", () =>
  resetCardTransform(
    card2,
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)"
  )
);

card3.addEventListener("mouseover", () =>
  setCardTransform(
    card3,
    "rotateX(-50deg) rotateY(-8deg) rotateZ(-10deg) scaleY(1.2) translateX(1em)"
  )
);
card3.addEventListener("mouseleave", () =>
  resetCardTransform(
    card3,
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) translate(0)"
  )
);

cardX.addEventListener("mouseover", () =>
  setCardTransform(
    cardX,
    "rotateX(50deg) rotateY(-8deg) rotateZ(10deg) scaleY(1.2) translateX(-1em)"
  )
);
cardX.addEventListener("mouseleave", () =>
  resetCardTransform(
    cardX,
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1) translate(0)"
  )
);

signupButton.addEventListener("click", () => {
  signUpModal.style.display = "flex";
  signUpModal.showModal();
});

signUpModal.addEventListener("close", () => {
  signUpModal.style.display = "none";
  signUpModal.close();
});

modalBody.addEventListener("click", (e) => e.stopPropagation());

signUpModal.addEventListener("click", () => {
  signUpModal.close();
});

mobileMenuBtn.addEventListener("click", () => {
  mobileNavLinks.style.animationName = "none";
  void mobileNavLinks.offsetWidth;

  const isHidden = getComputedStyle(mobileNavLinks).display === "none";
  if (isHidden) {
    mobileNavLinks.style.animationName = "widthFill";
    mobileNavLinks.style.display = "flex";
    mobileMenuIcon.classList.replace("la-bars", "la-times");
  } else {
    mobileNavLinks.style.animationName = "widthShrink";
    setTimeout(() => (mobileNavLinks.style.display = "none"), 300);
    mobileMenuIcon.classList.replace("la-times", "la-bars");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    mobileNavLinks.style.display = "none";
    mobileMenuIcon.classList.replace("la-times", "la-bars");
  }
});
