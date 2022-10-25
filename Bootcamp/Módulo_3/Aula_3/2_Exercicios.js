/* 1) Crie uma classe para representar carros. 
   Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
   Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
   gasto em reais para realizar este percurso.*/

class carro{
   marca;
   cor;
   gastoKmRodado;

   constructor(marca, cor, gastoKmRodado){
      this.marca = marca;
      this.cor = cor;
      this.gastoKmRodado = gastoKmRodado;
   }

   gastoPercurso(distancia, precoCombustivel){
      return distancia * this.gastoKmRodado * precoCombustivel
   }
}   

const corsa = new carro("Chevrolet", "vinho", 1/12)
console.log(corsa.gastoPercurso(70, 5))

/* 2) Crie uma classe para representar pessoas.
   Para cada pessoa teremos os atributos nome, peso e altura.
   As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
   Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
   do seu IMC;*/

class pessoas{
   nome;
   peso;
   altura;
   imc;

   constructor(peso, altura){
      this.peso = peso
      this.altura = altura
      this.imc = peso / (altura * altura)
   }
}

const José = new pessoas(70,1.75)

console.log(José.imc)

