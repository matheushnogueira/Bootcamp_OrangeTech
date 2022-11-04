let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 20;

if(elementos.includes(valor)){
   const n = elementos.indexOf(valor)

   console.log(`Achei ${valor} na posicao ${n}`)
}else{console.log(`Numero ${valor} nao encontrado!`)}
