document.querySelectorAll(".card img").forEach(img => {
  img.addEventListener("click", () => {
    alert(`Você clicou em ${img.alt}`);
  });
});

