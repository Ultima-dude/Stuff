"use strict"

const lazyBg = document.querySelectorAll("section");

function loadLazyBg(entries, observer) {
  for(const entry of entries) {
    if(entry.isIntersecting) {
      console.log(`Поехали!! Гружу ${entry.target.classList[0]}`);
      const img = document.createElement("img");
      img.setAttribute("src", entry.target.dataset.src);
      img.onload = () => {
        console.log("Загрузилось");
        entry.target.style.backgroundImage = `url(${entry.target.dataset.src})`;
        observer.unobserve(entry.target);
      }
    }
  }
}

const obsOptions = {
  rootMargin: "0px 0px 100px 0px",
  threshold: 0
}

const observer = new IntersectionObserver(loadLazyBg, obsOptions);

lazyBg.forEach(image => {
  observer.observe(image);
});
