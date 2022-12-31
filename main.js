var teste = document.querySelector(".texto");
teste.textContent = "alterando o texto";
// dependendo do elemento deve ser usado teste.value = "alterando o texto"; para alterar o texto
var caixa = document.querySelector(".caixa");
var caixa2 = document.querySelector(".caixa2");
let dizOi = () => {
  alert("OI");
};

// function dizOi() {
//   console.log("OI");
// }

caixa.addEventListener("click", dizOi);

caixa2.addEventListener("click", () => {
  console.log("OI");
});
// Mesma coisa do exemplo anterior, porém, utilizando função anônima
