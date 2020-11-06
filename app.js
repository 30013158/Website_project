let navRect;
let nav;
let highlighter;

function setHighlight() {
  navRect = nav.getBoundingClientRect();
  highlighter = document.getElementById("highlighter");
  highlighter.style.setProperty("left", navRect.left + "px");
  highlighter.style.setProperty("top", navRect.top + "px");
  highlighter.style.setProperty("width", navRect.width + "px");
  highlighter.style.setProperty("height", navRect.height + "px");
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetNav = entry.target.dataset.nav;
        nav = document.querySelector(`[data-section="${targetNav}"]`);
        setHighlight();
        const visibleSection = document.querySelector(
          `[data-nav="${targetNav}"]`
        );
      }
    });
  },
  { threshold: 0.7 }
);

const sections = document.querySelectorAll(".section");
sections.forEach(s => observer.observe(s));
window.addEventListener("resize", setHighlight);


function myMap() {
  var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}