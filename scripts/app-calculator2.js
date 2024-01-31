function calcularMedia(){
    event.preventDefault();

    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;

    nota1 = parseFloat(nota1.replace(',', '.'));
    nota2 = parseFloat(nota2.replace(',', '.'));
    nota3 = parseFloat(nota3.replace(',', '.'));

    let media = (nota1 + (nota2 * 2) + nota3) / 4;
    let nota3Minima = (20 - nota1 - (nota2 * 2));
    let mediaSemSpa = (nota1 + (nota2 * 2)) / 4;

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

    if (isNaN(nota3) && nota3Minima > 0){
        resultElement.innerText = "Para passar com média 5, você precisa tirar pelo menos " + nota3Minima.toFixed(2) + " na Nota SPA.";
        resultElement.style.color = '#F6F6F6';
    }  
    
    if(isNaN(nota3) && nota3Minima <= 0){
        resultElement.innerText = "Você já passou, com média = " + mediaSemSpa.toFixed(2) + "👏🏼";
        resultElement.style.color = '#2E9AFE';
    }

    if (isNaN(nota1)){
        resultElement.innerText = "Preencha pelo menos a Nota 1 e a Nota 2 para que eu possa te ajudar 😉.";
        resultElement.style.color = '#F6F6F6';
    }

    if(isNaN(nota2)){
        resultElement.innerText = "Preencha pelo menos a Nota 1 e a Nota 2 para que eu possa te ajudar 😉.";
        resultElement.style.color = '#F6F6F6';
    }
}