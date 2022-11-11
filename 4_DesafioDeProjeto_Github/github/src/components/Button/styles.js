import styled from 'styled-components';

export const ButtonContainer = styled.button`
   background-color: #fafafa;
   border 1px solid #fafafa;
   border-radius 20px;

   height: 35px;
   width: 120px;

   margin: 10px;

   font-family: 'Roboto';
   font-size: 15px;
   font-weight: 500;

   &: hover{
      background-color: #fafafa40;
      cursor: pointer;
      color: #fff;
   }
`