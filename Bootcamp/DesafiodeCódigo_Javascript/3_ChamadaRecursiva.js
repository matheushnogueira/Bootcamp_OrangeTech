let n = 10

function somatorio(n){
   
   if( n == 0){
      return 0
   }else{return (n + somatorio(n-1))}

}
console.log(somatorio(n));


