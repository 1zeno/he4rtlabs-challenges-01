function calcular() {
    let valorProjeto = document.getElementById("valorProjeto").value;
    let diasEfetivos = document.getElementById("diasEfetivos").value;
    let horasDiarias = document.getElementById("horasDiarias").value;
    let diasFerias = document.getElementById("diasFerias").value;
    
    
    console.log(valorProjeto+"/"+diasEfetivos+"/"+horasDiarias+"/"+diasFerias);
    let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
    if(isNaN(valorHora)){
      alert("Por favor, insira um valor válido");
    }else{
      document.getElementById("result").innerHTML = "R$ "+valorHora.toFixed(2);
      e.preventDefault();
    }
    
  }

  // função para maximizar e minimizar o conteúdo
  
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



