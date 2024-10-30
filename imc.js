// Define as variáveis do projeto

const calcular = document.getElementById('calcular');

//Adiciona evento de clique que chama a função IMC

calcular.addEventListener('click', IMC)


// Função que define o cálculo que será utilizado ao clica no botão 'Calcular'

function IMC(){

    // Definindo variáveis locais
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;    
    const resultado = document.getElementById('resultado');

    if (nome !== ''){
        if (altura !== ''){
            if (peso !== ''){

                let classificacao = "";
                const valorIMC = (peso / (altura * altura)).toFixed(1);

                if (valorIMC < 18.5){
                    classificacao = 'Abaixo do peso.';
                } else if (valorIMC < 24.9 ){
                    classificacao = 'Peso normal.';
                }else if (valorIMC < 29.9){
                    classificacao = 'Sobrepeso.';
                }else if (valorIMC < 34.9){
                    classificacao = 'Obesidade grau I.';
                }else if (valorIMC < 39.9 ){
                    classificacao = 'Obesidade grau II.';
                }else{
                    classificacao = 'Obesidade grau III.';
                }

                resultado.textContent = `${nome}, seu IMC é: ${valorIMC}. Classificação: ${classificacao}`;


            }else{
                alert ('Favor, preencha o peso.');
            }
        }else{
            alert('Favor, preencha a altura.');
        }
    }else{
        alert('Favor, preencha o nome.');
    }
}