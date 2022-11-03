let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 67;

for (let i = 0; i < elementos.length; i++) {
   const element = elementos[i];

   if(valor == element) {
      console.log(`Achei ${valor} na posicao ${i}`)
   }
}