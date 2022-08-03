import styled from "styled-components";

interface Active{
  active: boolean,
}

export const HomeContainer = styled.div`
  min-width:1120px;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  /* margin-top: 2rem; */
  margin-bottom: 10rem;

`
export const Title = styled.p`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;

  color: ${(props) => props.theme["base-subtitle"]};
`

export const FilterButtons = styled.aside`
  display: flex;
  gap: .5rem;
`
export const BaseButton = styled.button<Active>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  border: 1px solid ${(props) => props.theme["yellow"]};
  border-radius: 100px;

  padding: .375rem .875rem;

  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => {
    if(props.active){
      return props.theme["yellow-light"]
    }else{
      return props.theme["background"]
    }
  }};

  font-family: 'Roboto';
  font-weight: 700;
  font-size: .625rem;

  text-transform: uppercase;

  cursor: pointer;

  transition: background .1s;
  
  :hover{
    background: ${(props) => props.theme["yellow-light"]}
  }

`
export const CatalogContainer = styled.div`

  >div:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
  } 
`

export const CardWrapper = styled.div`
  margin-top: 3.375rem;
  display: flex;

  gap: 2rem;

  flex-wrap: wrap;
`