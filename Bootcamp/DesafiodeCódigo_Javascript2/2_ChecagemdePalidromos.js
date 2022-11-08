let resultado = "ovo"

function reverseString(resultado){
   const newString = resultado.split("").reverse().join("")
   
   if(newString == resultado){
      console.log("TRUE")
   }else{console.log("FALSE")}

}
reverseString(resultado)