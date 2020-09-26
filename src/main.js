let valorProjeto = "";
let diasEfetivos = "";
let horasDiarias = "";
let diasFerias = "";
let valorHora= "";

function calcular() {
console.log(valorHora);
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
  
  function infoClick( event ){
    const element = document.getElementById(event.target.id+"Text");
    const name = element.className;
    const search = name.split(" ").indexOf("open");
    search !== -1 ? element.classList.remove("open") : element.classList.add("open");

  }



