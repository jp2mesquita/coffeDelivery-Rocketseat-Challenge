import styled from "styled-components";

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;

  padding-inline: 1.25rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;


  /* align-items: center; */


  text-align: center;

  position: relative;

  strong{
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]};

    display: inline-block;
    margin-top: 1rem;
  }

  p{
    font-family: 'Roboto', sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme["base-label"]};

    margin-top: .5rem;
  }

  >div:last-child{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2.0625rem;
    margin-bottom: 1.25rem;
  }
`
export const CoffeeImage = styled.div`
  position: absolute;



  top: -1.25rem;
  left: 4.25rem;

  img{
    width: 7.5rem;
  }
`

export const Properties = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  text-align: center;

  margin-top: 7rem;
`

export const Prop = styled.h2`
  background-color: ${(props) => props.theme["yellow-light"]};
  display: flex;

  width: fit-content;
  padding: .25rem .5rem;

  border-radius: 100px;

  text-transform: uppercase;

  color: ${(props) => props.theme["yellow-dark"]};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: .625rem;
  line-height: 130%;
`

export const Price = styled.h2`
    text-align: left; 

    font-family: 'Roboto', sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme["base-text"]};

  span{
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
  }
` 

const BaseButton = styled.button`
  height: 2.375rem;
  border: none;
  border-radius: 6px;
 
  
  display: flex;
  justify-content: center;
  align-items: center;

  padding: .5rem;
  gap: .24rem;
`

export const ButtonControler = styled(BaseButton)`
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props)  => props.theme["purple"]};

  span{
    display: flex;
    
    &:hover{
      color: ${(props) => props.theme["purple-dark"]};
      cursor: pointer;
    }
  }

  div{
    width: 1.15rem;
    color: ${(props) => props.theme["base-title"]};

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`

export const AddToCartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["purple-dark"]};

  color: ${(props) => props.theme["background"]};

  transition: background .2s;

  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.theme.purple};
  }
`