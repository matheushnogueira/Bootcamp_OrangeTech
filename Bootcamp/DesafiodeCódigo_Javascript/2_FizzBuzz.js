let res = 5;

if( (res % 3 === 0) && (res % 5 === 0)){
   console.log("FizzBuzz")
}else if( res % 3 === 0){
   console.log("Fizz")
}else if( res % 5 === 0){
   console.log("Buzz")
}else{console.log(res)}