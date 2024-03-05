const input = document.getElementById("nome");
const invia = document.getElementById("invia");
const cancella = document.getElementById("cancella");
const nomeSalvato = document.getElementById("nomeSalvato");

invia.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.trim() == "") {
    return;
  }
  localStorage.setItem("nome", input.value);
  nomeSalvato.classList.remove("d-none");
  nomeSalvato.innerText = `Il nome salvato è ${input.value}`;
  input.value = "";
});

cancella.addEventListener("click", function (e) {
  e.preventDefault();
  if (localStorage.getItem("nome")) {
    localStorage.removeItem("nome");
    nomeSalvato.classList.add("d-none");
  }
  input.value = "";
});

const init = () => {
  if (localStorage.getItem("nome")) {
    nomeSalvato.classList.remove("d-none");
    nomeSalvato.innerText = `Il nome salvato è ${localStorage.getItem("nome")}`;
  }
  let tempo = sessionStorage.getItem("tempoSessione") || 0;
  const p = document.getElementById("tempoSessione");
  p.innerText = `Sei nella sessione da ${tempo} secondi`;
  setInterval(() => {
    tempo++;
    p.innerText = `Sei nella sessione da ${tempo} secondi`;
    sessionStorage.setItem("tempoSessione", tempo);
  }, 1000);
};

window.addEventListener("load", init);
