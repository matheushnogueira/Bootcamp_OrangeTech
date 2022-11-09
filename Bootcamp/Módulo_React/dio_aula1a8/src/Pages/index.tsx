import { useState, useCallback } from "react"

const Teste = () => {

   const [age, setAge] = useState(21); 
   const [name, setName] = useState("Matheus"); 

   const handleChangeName = useCallback(() => {
      setName(prev => prev === "Matheus" ? "Nogueira" : "Matheus") 
   }, [])
   const handleChangeAge = useCallback(() => {
      const newAge = 10 * age
      console.log("age atual", age, newAge)
      setAge(prev => prev === 21 ? 32 : 21) 
   }, [age])

   // useMemo = referencia em variaveis(const, var, let)
   // useCallback = referencia de função

   // const calculo = useMemo (() => {
   //    console.log("calculou", age)
   //    return  10 * age
   // }, [age])  

   // useEffect(() => {
   // handleChangeName();
   // }, [])

  return (
    <div>
      <h1>Idade: {age}</h1>
      <h1>Nome: {name}</h1>
      <button onClick={handleChangeAge}>Alterar idade</button>
      <button onClick={handleChangeName}>Alterar nome</button>
    </div>
  )
}

export {Teste}