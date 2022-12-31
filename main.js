var teste = document.querySelector(".texto");
teste.textContent = "alterando o texto";
// dependendo do elemento deve ser usado teste.value = "alterando o texto"; para alterar o texto
var caixa = document.querySelector(".caixa");
var caixa2 = document.querySelector(".caixa2");

var menos = document.querySelector(".botao__menos");
var container = document.querySelector(".container__valor");
var mais = document.querySelector(".botao__mais");

var controle = document.querySelectorAll(".controle__ajuste");

//LÓGICA PARA CLICAR NA CAIXA E DIZER OI-----------------------------------------
//função normal
let dizOi = () => {
  alert("OI");
};

//arrow function
// function dizOi() {
//   console.log("OI");
// }

caixa.addEventListener("click", dizOi);

caixa2.addEventListener("click", () => {
  console.log("OI");
});

//LÓGICA PARA CLICAR NA CAIXA E DIZER OI--------------------------------------------
// Mesma coisa do exemplo anterior, porém, utilizando função anônima

// mais.addEventListener("click", () => {
//   container.value = parseInt(container.value) + 1;
// });

// menos.addEventListener("click", () => {
//   container.value = parseInt(container.value) - 1;
// });

//LÓGICA PARA FUNCIONAR SOMENTE O PRIMEIRO BOTÃO-------------------------------------------------------
// mais.addEventListener("click", () => {
//   manipulaDados("somar");
// });

// menos.addEventListener("click", () => {
//   manipulaDados("subtrair");
// });

// var manipulaDados = (operacao) => {
//   if (operacao === "subtrair") {
//     container.value = parseInt(container.value) - 1;
//   } else {
//     container.value = parseInt(container.value) + 1;
//   }
// };

//LÓGICA PARA FUNCIONAR TODOS OS BOTÕES DINÂMICAMENTE---------------------------------------------------
controle.forEach((elemento) => {
  //elemento é uma variável qualquer que irá receber o valor do array de acordo com a posicao que ele se encontra
  elemento.addEventListener("click", (evento) => {
    //evento faz a mesma coisa que o elemento mas no caso ele é uma variável de uma variável
    manipulaDados(evento.target.textContent, evento.target.parentNode);
  });
});

var manipulaDados = (operacao, container) => {
  var contador = container.querySelector(".container__valor");

  if (operacao === "-") {
    contador.value = parseInt(contador.value) - 1;
  } else {
    contador.value = parseInt(contador.value) + 1;
  }
};
