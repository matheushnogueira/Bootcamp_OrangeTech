// Estruturas condicionais

/* Desafio
    
    Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis, sendo elas:
        1 - Preço do etanol;
        2 - Preço da gasolina;
        3 - O tipo de combustível que está no seu carro;
        4 - Gasto médio de combustível do carro por KM;
        5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const combustivel = "Gasolina";//"Gasolina" "Etanol"
const kmPorLitro = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;

if (combustivel == "Etanol"){
    const valorGastoEtanol = litrosConsumidos * precoEtanol;

    console.log(`R$${valorGastoEtanol}`)
}else if(combustivel == "Gasolina"){
    const valorGastoGasolina = litrosConsumidos * precoGasolina;

    console.log(`R$${valorGastoGasolina}`)
}