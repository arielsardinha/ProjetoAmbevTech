(() => {
  const btn = document.getElementById("btn_txt");
  const texto = document.getElementById("txt");
  const body = document.querySelector(".box_central");
  const txt_continuar = document.getElementById("txt_continuar");
  // função para trocar as cores
  let valor = false;
  btn.addEventListener("click", () => {
    if (valor == false) {
      texto.classList.add("click");
      body.classList.add("click");
      txt_continuar.classList.add("click");
      valor = true;
    } else if (valor == true) {
      texto.classList.remove("click");
      body.classList.remove("click");
      txt_continuar.classList.remove("click");
      valor = false;
    }
  });
})();
