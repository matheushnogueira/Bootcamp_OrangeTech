// Styles
import { 
   InputContainer, 
   InputText, 
   IconContainer 
} from './styles';

const Input = ({leftIcon, ...rest}) => {


  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null} 
        <InputText {...rest}/>
    </InputContainer>
  )
}

export { Input }; 