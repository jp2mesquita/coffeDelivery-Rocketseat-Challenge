import styled from "styled-components";

export const CheckoutContainer = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */

  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
  
  font-family: 'Ballo 2', cursive;
  font-size: 1.175rem;
  font-weight: 700;
  line-height: 130%;
  
  color: ${props => props.theme["base-subtitle"]};
  
  
  >div:first-child{
    grid-column: span 2;
   
  }

  @media (max-width: 980px){
    display: flex;
    flex-direction: column;
  }
`