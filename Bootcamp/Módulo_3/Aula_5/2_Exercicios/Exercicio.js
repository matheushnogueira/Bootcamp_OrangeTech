/* 1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20 
*/

// const entrada = [2]
// let i = 0

// function gets(){
//    const valor = entrada[i];
//    i++;
//    return valor;
// }

// function print(texto){
//    console.log(texto);
// }

// module.exports = { gets, print };

/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

// const entrada = [4, 100, 150, 90, 200]
// let i = 0

// function gets(){
//    const valor = entrada[i];
//    i++;
//    return valor;
// }

// function print(texto){
//    console.log(texto);
// }

// module.exports = { gets, print };

/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const entrada = [5, 1, 3, 9, 10, 12]
let i = 0 

function gets(){
   const valor = entrada[i];
   i++;
   return valor;
}

function print(texto){
   console.log(texto);
}

module.exports = { gets, print };