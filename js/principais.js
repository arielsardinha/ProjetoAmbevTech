(() => {
  const txt_continuar = document.getElementById("txt_continuar");
  const box_central = document.querySelector(".box_central");
  const box_continue1 = document.querySelector(".box_continue1");

  txt_continuar.addEventListener("click", () => {
    box_central.classList.add("continue");
    box_continue1.style.display = "block";
    setTimeout(() => {
      box_central.style.display = "none";
      box_continue1.classList.add("continue");
    }, 2000);
  });
})();
