import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row} from './styles'

import { useState } from 'react'


const App = () => {

   let [currentNumber, setCurrentNumber] = useState('0');
   const [firstNumber, setFirstNumber] = useState('0');
   const [operation, setOperation] = useState('');

   // Clear Input
   const handleClear = () => {
      setCurrentNumber('0')
      setFirstNumber('0')
   }

   // Adicionar número 
   const handleAddNumber = (num) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
   }

   // Soma
   const handleSumNumber = () => {
      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('+')  
      }else{
         const sum = Number(firstNumber) + Number(currentNumber)
         setCurrentNumber(String(sum))
         setOperation('')
      }
   }

   // Subtração
   const handleSubNumber = () => {
      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('-')  
      }else{
         const sub = Number(firstNumber) - Number(currentNumber)
         setCurrentNumber(String(sub))
         setOperation('')
      }
   }

   // Multiplicação
   const handleMultiNumber = () => {
      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('*')  
      }else{
         const multi = Number(firstNumber) * Number(currentNumber)
         setCurrentNumber(String(multi))
         setOperation('')
      }
   }

   // Divisão
   const handleDivNumber = () => {
      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurrentNumber('0')
         setOperation('/')  
      }else{
         const div = Number(firstNumber) / Number(currentNumber)
         setCurrentNumber(String(div))
         setOperation('')
      }
   }

   // Igual
   const handleEquals = () => {
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
         switch (operation) {
            case '+':
               handleSumNumber()
            break;
            case '-':
               handleSubNumber()
            break;
            case '*':
               handleMultiNumber()
            break;
            case '/':
               handleDivNumber()
            break;
            default:
               break;
         }   
      }
   }

   return (
   <Container>
      <Content>
         <Input value={currentNumber}/>
         <Row>
            <Button label="C" onClick={handleClear}/>
            <Button label="+/-" />
            <Button label="%" />
            <Button label="/" onClick={handleDivNumber}/>
         </Row>
         <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="*" onClick={handleMultiNumber}/>
            
         </Row>
         <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={handleSubNumber}/>
         </Row>
         <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumber}/>
         </Row>
         <Row>
            <Button label=";)" />
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="=" onClick={handleEquals}/>
         </Row>
      </Content>
   </Container>
   )
}

export default App
