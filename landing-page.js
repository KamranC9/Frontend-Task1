function removeBrTags() {
  const paragraphs = document.querySelectorAll(".row-2 p,.row-3 p");
  paragraphs.forEach((p) => {
    p.innerHTML = p.innerHTML.replace(/<br\s*\/?>/gi, " ");
  });
}

function checkScreenSize() {
  if (window.innerWidth >= 768 && window.innerWidth <= 785) {
    removeBrTags();
  }
}

window.addEventListener("resize", checkScreenSize);
window.addEventListener("load", checkScreenSize);
