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
                const valorIMC = (peso / (altura * altura)).toFixed(1);

                resultado.textContent = nome + ', seu IMC é: ' + valorIMC + '!';
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