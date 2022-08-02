import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  margin-top: 2.5rem;
  gap: 2rem;
  justify-content: space-between;

  font-family: 'Ballo 2', cursive;
  font-size: 1.175rem;
  font-weight: 700;
  line-height: 130%;

  color: ${props => props.theme["base-subtitle"]};


  >div:first-child{
    flex: 1;
   
  }

  >div:last-child{
    width: 28rem;
  
 }
`