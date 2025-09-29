document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Botão "Saiba Mais"
  document.getElementById("saibaMais").addEventListener("click", () => {
    document.getElementById("modelos").scrollIntoView({ behavior: "smooth" });
  });