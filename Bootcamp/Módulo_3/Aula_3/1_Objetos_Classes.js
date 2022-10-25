class Pessoa {
   name;
   idade;
   anoNascimento;

   constructor(name, idade){
      this.name = name;
      this.idade = idade;
      this.anoNascimento = 2022 - idade
   }

   descrever(){
      console.log(`Meu nome é ${this.name} e minha idade é ${this.idade}`)
   }
}

function compararPessoa ( p1, p2 ){
   if(p1.idade>p2.idade){
      console.log(`${p1.name} é mais velho que ${p2.name}`)
   }else if(p2.idade>p1.idade){
      console.log(`${p2.name} é mais velho que ${p1.name}`)
   }else{
      console.log(`${p1.name} e ${p2.name} tem a mesma idade`)
   }
}
const vitor = new Pessoa("Vitor", 40)
const renan = new Pessoa("Renan", 40)

compararPessoa(vitor, renan);
