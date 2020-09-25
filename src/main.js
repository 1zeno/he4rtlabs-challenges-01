let valorProjeto = "";
let diasEfetivos = "";
let horasDiarias = "";
let diasFerias = "";
let valorHora= "";

function calcular() {

  valorProjeto = document.getElementById("valorProjeto").value;
  diasEfetivos = document.getElementById("diasEfetivos").value;
  horasDiarias = document.getElementById("horasDiarias").value;
  diasFerias = document.getElementById("diasFerias").value;

    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
    if(isNaN(valorHora)){
      alert("Por favor, insira um valor válido");
    }
    document.getElementById("result").innerHTML = "R$ "+valorHora.toFixed(2);
  
  }
  
  function sinal(){
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
  }



