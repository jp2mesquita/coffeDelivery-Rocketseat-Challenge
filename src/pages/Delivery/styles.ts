import styled from "styled-components";

export const DeliveryContainer = styled.div`
  font-size: 2rem;
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-top: 5rem;
  gap: 6.375rem;
  /* justify-content: space-between; */
  
  >div:last-child{
    display: flex;
    flex:1;
    img{
      
      width: 100%;
      
    }
  }

  @media (max-width: 980px){
    flex-direction: column;
    align-items: center;
    div{
      width: 100%;
    }
  }
`

export const DeliveryHeader = styled.header`
  strong{
    font-family: 'Ballo 2' cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme["yellow-dark"]}
  }

  p{
    font-family: 'Roboto' sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]}
  }

  @media (max-width: 1180px){
    strong{
      font-size: 1.5rem;
    }
    p{
      font-size: 1rem;
    }
  }
`

export const DeliveryResume = styled.div`
  padding: 2.5rem;
  margin-top: 2.5rem;
  font-size: 1rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  gap: 2rem;

  /* Gradient in the border */
  background: 
    linear-gradient( ${props => props.theme["background"]},  ${props => props.theme["background"]}) padding-box, 
    linear-gradient(to right,  ${props => props.theme["yellow"]},  ${props => props.theme["purple"]}) border-box;

  border: solid 2px transparent;
  border-radius: 6px 36px;
 
  div{
    display: flex;
    align-items: center;
    gap: .75rem;
    
    p{
      color: ${props => props.theme["base-text"]};
      span{
      font-weight: bold;
      }
    }
  }
  
`