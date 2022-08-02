import styled from "styled-components";
// import backgroundImage from '../../../assets/header-background.svg'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5.75rem;
  gap: 3.5rem;
  margin-bottom: 5.75rem;

 /*  background-image: url() ; */

  div{
    display: flex; 
    align-self: center;
    img{
      width:fill;

    }
  }

`

export const TextContainer = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  
`

export const Title  = styled.p`
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${props => props.theme["base-title"]};
    margin-bottom: 1rem;
`
export const Subtilte  = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
`

export const AtributesList = styled.div`
  margin-top:4.125rem;

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 2.5rem;
  
  ul{
    display: flex;
    flex-direction: column;

    gap: 1.25rem;
    li{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${props => props.theme["base-text"]};
  
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 0.75rem;
      
    }
  }

`
