function calcularMedia(){
    event.preventDefault();

    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;

    nota1 = parseFloat(nota1.replace(',', '.'));
    nota2 = parseFloat(nota2.replace(',', '.'));

    let media = (nota1 + (nota2 * 2)) / 3;

    let resultElement = document.getElementById('result');
    resultElement.innerText = 'Sua média é: ' + media.toFixed(2);

    if (media >= 9) {
        resultElement.innerText += "\nUAU!! Você passou com êxito 🫡. Parabéns!! 🎉🥳";
        resultElement.style.color = '#31B404';
    } else if (media >= 6 && media < 9) {
        resultElement.innerText += "\nVocê passou, parabéns! 🎉";
        resultElement.style.color = '#2E9AFE';
    } else if (media >= 5 && media < 6) {
        resultElement.innerText += "\nUffa 😅. Essa foi por pouco, mas você conseguiu 👏🏼.";
        resultElement.style.color = '#FE9A2E';
    } else if (media >= 3 && media < 5) {
        resultElement.innerText += "\nVocê não passou direto 😳. Mas calma, ainda há uma chance. Boa sorte na RE! 😉";
        resultElement.style.color = '#FFFF00';
    } else if (media >= 0 && media < 3) {
        resultElement.innerText += "\nTenho uma má notícia 😢. Infelizmente você terá que realizar DP desta matéria.";
        resultElement.style.color = '#FF0000';
    }

    if (isNaN(nota2)){
        let nota2Minima = ((5 * 3) - nota1 * 1) / 2;
        resultElement.innerText = "Para passar com média = 5.0, sua Nota 2 precisa ser no mínimo = " + nota2Minima.toFixed(2) + ".";
        resultElement.style.color = '#F6F6F6';
    }

    if (isNaN(nota1)){
        resultElement.innerText = "Preencha pelo menos a Nota 1 para que eu possa te ajudar 😉.";
        resultElement.style.color = '#F6F6F6';
    }

    if(isNaN(nota1) && nota2 >= 0){
        resultElement.innerText = "Opa! Você precisa preencher a Nota 1.";
        resultElement.style.color = '#F6F6F6';
    }
}


window.onload = function () {
    document.getElementById("customAlert").style.display = "block";
  };
  
  function fecharAlerta() {
    document.getElementById("customAlert").style.display = "none";
  }