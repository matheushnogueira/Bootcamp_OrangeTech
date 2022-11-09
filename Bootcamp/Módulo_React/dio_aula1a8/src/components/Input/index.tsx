// Hooks
import { Controller } from "react-hook-form";
// Styles
import { 
   InputContainer, 
   InputText, 
   IconContainer 
} from './styles';
// Types
import { IInput } from './types';

const Input = ({leftIcon, name, control, ...rest}: IInput) => {


  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field: {value, onChange} }) =>  <InputText value={value} onChange={onChange} {...rest} />}
      /> 
    </InputContainer>
  )
}

export { Input }; 