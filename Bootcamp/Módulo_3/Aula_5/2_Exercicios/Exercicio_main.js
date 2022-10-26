const { gets , print } = require("./Exercicio");

// 1 - EXERCÍCIO

// const numero = gets()

// for (let i = 1; i <= 10; i++) {
//    const element = (i * numero);
//    print(element)
// }

// 2 - EXERCÍCIO

// const numeros = gets();

// let numeroMaior = 0
// let numeroMenor = 200

// for (let i = 0; i < numeros; i++) {
//    const numero = gets()
//    if(numero > numeroMaior){
//       numeroMaior = numero
//    }  
//    if(numero < numeroMenor){
//       numeroMenor = numero
//    }
// }
// print(`Maior número: ${numeroMaior}`)
// print(`Menor número: ${numeroMenor}`)

// 3 - EXERCÍCIO

const numeros = gets()

for (let i = 0; i < numeros; i++) {
   const numero = gets()

   if(numero % 2 === 0){
      print(numero)
   }
}