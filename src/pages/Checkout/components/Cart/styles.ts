import styled from "styled-components";

export const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex:1;
  padding: 2.5rem;
  margin-top: 1rem;

  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  background-color: ${props => props.theme["base-card"]};

  a{
    text-decoration: none;
  }

  section{
    display:flex;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: .75rem;

    p{
      display: flex;
      justify-content: space-between;
      
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color:${props => props.theme["base-text"]};
    }
  
    p:nth-child(3){
      font-weight: 700;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 1180px){
    padding: 2rem;

    section{
      margin-top: 1.25rem;

      p{
        font-size: .85rem;
      }
      p:nth-child(3){
        font-size: 1rem;
      }
    }
  }
`

export const CartContent = styled.div`
  display: flex;
  align-items: flex-start;

  height: 8rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${props => props.theme["base-button"]};

  img{
    width: 4rem;
    margin-right: 1.25rem
  }

  p{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: .5rem;
  }

  >div:nth-child(2){
    flex: 1;
  }

  @media (max-width: 1180px){
    height: 7rem;

    img{
      width: 3.75rem;
      margin-right: 1rem;
    }

    p{
      font-size: .9rem;
    }
    >div:nth-child(3){
      span{
        font-size: 1rem;
      }
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: .5rem;
`
const BaseButton = styled.button`
  height: 2rem;
  width: fit-content;
  padding-inline: .5rem;
  gap: .25rem;


  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 6px;
  background-color: ${props =>  props.theme["base-button"]};
  color: ${props => props.theme["purple"]};
`

export const ControlerButton = styled(BaseButton)`

  #minus{
    cursor: pointer;
  }

  #plus{
    cursor: pointer;
  }

  span{
    padding-block: 0.34375rem;
    width: 1.25rem;
    color: ${props => props.theme["base-title"]};
  }

  &:hover{
    color: ${(props) => props.theme["purple-dark"]};
  }

  @media (max-width: 1180px){
    span{
      width: 1rem;
      font-size: .9rem;
    }
  }
`

export const RemoveButton = styled(BaseButton)`
  padding-block: 0.40625rem;
  cursor: pointer;
  span{
    font-size: 0.875rem;
    text-transform: uppercase;
    line-height: 160%;
    color: ${props => props.theme["base-subtitle"]};
  }

  &:hover{

    background-color: ${props =>  props.theme["base-hover"]};
    color: ${(props) => props.theme["purple-dark"]};
    
    
    span{
      color: ${(props) => props.theme["base-title"]};

    }
    
  }

  @media (max-width: 1180px){
    span{
      font-size: .75rem;
    }
    
  }
`

export const FinishOrderButton = styled.button`

  border: none;
  border-radius: 6px;

  background-color: ${props=> props.theme["yellow"]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .75rem .5rem;
  margin-top: 1.5rem;

  width: 100%;
  height: 2.875rem;

  color: ${props => props.theme["background"]};
  font-weight: 700;
  font-size: .875rem;
  line-height: 130%;
  text-transform: uppercase;

  transition: background .2s;

  &:hover{
  background-color: ${props=> props.theme["yellow-dark"]};
  cursor: pointer;
  }

`
