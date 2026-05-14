// // NAVABAR COLOR CHANGE


window.addEventListener("scroll", function() {
  let nav = document.querySelector(".navbar-nav");

  if (window.scrollY > 25) {
    nav.style.background = "black";
  } else {
    nav.style.background = "transparent";
  }
});
// ALERT
document.getElementById("btn").onclick = function() {
  alert("Free trial started 🚀");
};

// ANIMATION
let elements = document.querySelectorAll(".five");
window.addEventListener("scroll", () => {
  let trigger = window.innerHeight * 0.8;

  elements.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("show");
    }
  });
});





