/* 
   1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

   Média = (nota 1 + nota 2 + nota 3) / 3;

   Classificação:
   - Média menor que 5, reprovação;
   - Média entre 5 e 7, recuperação;
   - Média acima de 7, passou de semestre;
*/
const nota1 = 10; 
const nota2 = 5;
const nota3 = 6;
const media = ( nota1 + nota2 + nota3 ) / 3

function classificação (media){
   if(media < 5){
      return ("Reprovado")
   }else if(media >= 5 && media <= 7 ){
      return ("Recuperação")
   }else if(media > 7){
      return("Aprovado")
   }
}
console.log(classificação(media))

/*
2) O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/
const peso = 85;
const altura = 1.75;
const IMC = peso / ( altura * altura );

function calcularIMC(IMC){
   if(IMC < 18.5){
      return ("Abaixo do peso")
   }else if(IMC >= 18.5 && IMC <= 25){
      return ("Peso normal")
   }else if(IMC >= 25 && IMC <= 30){
      return ("Acima do peso")
   }else if(IMC >= 30 && IMC <= 40){
      return ("Obeso")
   }else if(IMC > 40){
      return ("Obesidade Grave;")
   }
}
console.log(calcularIMC(IMC))

/*
 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 

 Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

 Código Condição de pagamento:
 - À vista Débito, recebe 10% de desconto;
 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const precoEtiqueta = 2400;
const parcelado = 3;
let formaPagamento = parcelado // Dinheiro PIX Débito

function calculoPagamento (precoEtiqueta, parcelado, formaPagamento){
if(formaPagamento === "Débito"){

   const desconto = (precoEtiqueta * 10) / 100
   const valoraPagar = precoEtiqueta - desconto

return (valoraPagar)

}else if(formaPagamento === "Dinheiro" || formaPagamento === "PIX"){
   
   const desconto = (precoEtiqueta * 15) / 100
   const valoraPagar = precoEtiqueta - desconto

return (valoraPagar)

}else if(formaPagamento === parcelado){
   if(parcelado === 2){
   
      return (precoEtiqueta)

}else if(parcelado > 2){
   
   const juros = (precoEtiqueta * 10) / 100
   const valoraPagar = precoEtiqueta + juros
   
return (valoraPagar)

}}}

console.log(calculoPagamento(precoEtiqueta, parcelado, formaPagamento))