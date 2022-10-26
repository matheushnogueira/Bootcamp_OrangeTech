// 1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 5
for (let i = 1; i <= 10; i++) {
   console.log(i*numero)
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

function array(n) {
   let numerosPares = [];
   for (let i = 0; i < n; i++) {
     numerosPares.push(2 * i);
   }
   return numerosPares;
 }
 
 console.log(array(10));

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]