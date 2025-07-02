// scriptsHeader.js
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  if (window.scrollY > 80) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
});
