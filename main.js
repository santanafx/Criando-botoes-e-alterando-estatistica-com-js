var teste = document.querySelector(".texto");
teste.textContent = "alterando o texto";
// dependendo do elemento deve ser usado teste.value = "alterando o texto"; para alterar o texto
var caixa = document.querySelector(".caixa");

let dizOi = () => {
  alert("OI");
};

// function dizOi() {
//   console.log("OI");
// }

caixa.addEventListener("click", dizOi);
