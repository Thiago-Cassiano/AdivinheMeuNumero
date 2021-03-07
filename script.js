'use strict';

        const ds = {
          btnDeNovo: document.querySelector(".btnDeNovo"),
          adivinhe: document.querySelector(".adivinhe"),
          btnChecar: document.querySelector(".btnChecar"),
          mensagem: document.querySelector(".mensagem"),
          pontos: document.querySelector(".pontos"),
          recorde: document.querySelector(".recorde"),
          numeroDisplay: document.querySelector(".numeroDisplay"),
        };

let numeroInput;
const getNumeroInput = () => {
  numeroInput = Number(ds.adivinhe.value);
  return numeroInput;
};
let pontos = 20;
let recorde = 0;
let numeroGerado = Math.trunc(Math.random()*20)+1;
const checarNumero = () => {
    if (pontos === 0){
      ds.mensagem.textContent = "💥 Perdeu!";
      document.querySelector("body").style.backgroundColor = "red";
    } else {
      if (numeroInput === numeroGerado) {
        ds.mensagem.textContent = "🎉 Acerto, miseravi";
        ds.numeroDisplay.textContent = numeroGerado;
        recorde < pontos ? (recorde = pontos) : (recorde = recorde);
        ds.recorde.textContent = recorde;
        document.querySelector('body').style.backgroundColor = "#60b347";
        ds.numeroDisplay.style.width = "50rem";
      } else if (numeroInput !== numeroGerado) {
        ds.mensagem.textContent =
        numeroGerado < numeroInput ? "📈 Muito alto!" : "📉 Muito baixo!";
        pontos--;
      } else {
        ds.mensagem.textContent = "⛔️ Insira um número ⛔️";
      }
      ds.pontos.textContent = pontos;
    }
}
const deNovo = () => {
pontos = 20;
ds.pontos.textContent = pontos;
ds.mensagem.textContent = "Comece a adivinhar...";
ds.adivinhe.value = "";
ds.numeroDisplay.textContent = "?";
numeroGerado = Math.trunc(Math.random() * 20) + 1;
ds.numeroDisplay.style.width = '15rem';
document.querySelector('body').style.backgroundColor = '#222';
}
ds.adivinhe.addEventListener("input", getNumeroInput);
ds.btnChecar.addEventListener("click", checarNumero);
ds.btnDeNovo.addEventListener("click", deNovo);