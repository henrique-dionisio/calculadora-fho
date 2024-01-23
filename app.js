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
    } else if (media >= 6 && media < 9) {
        resultElement.innerText += "\nVocê passou, parabéns! 🎉";
    } else if (media >= 5 && media < 6) {
        resultElement.innerText += "\nUffa 😅. Essa foi por pouco, mas você conseguiu 👏🏼.";
    } else if (media >= 3 && media < 5) {
        resultElement.innerText += "\nVocê não passou direto 😳. Mas calma, ainda há uma chance. Boa sorte na RE! 😉";
    } else if (media >= 0 && media < 3) {
        resultElement.innerText += "\nTenho uma má notícia 😢. Infelizmente você terá que realizar DP desta matéria.";
    }

    if (isNaN(nota2)){
        let nota2Minima = ((5 * 3) - nota1 * 1) / 2;
        resultElement.innerText = "Para passar com média 5, você precisa tirar pelo menos " + nota2Minima.toFixed(2) + " na Nota 2.";
    }

    if (isNaN(nota1)){
        resultElement.innerText = "Preencha pelo menos a Nota 1 para que eu possa te ajudar 😉.";
    }

    if(isNaN(nota1) && nota2 >= 0){
        resultElement.innerText = "Opa! Você precisa preencher a Nota 1.";
    }
}