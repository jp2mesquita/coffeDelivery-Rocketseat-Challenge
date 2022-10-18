import styled from "styled-components";

interface Active{
  active: boolean,
}

export const HomeContainer = styled.div`
  /* min-width:1120px; */
  /* font-size: 2rem; */

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

  @media (max-width: 1440px){
    font-size: 1.5rem;
  }
  @media (max-width: 980px){
    font-size: 1.25rem;
  }
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

  @media (max-width: 1180px){
    font-size: .55rem;
  }
  @media (max-width: 980px){
    height: 1.25rem;
    font-size: .525rem;
  }
`
export const CatalogContainer = styled.div`

  >div:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
  } 

  @media (max-width: 800px){
    >div:first-child{
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
    }
  }
  @media (max-width: 800px){
    >div:first-child{
      aside{

        flex-wrap: wrap;
      }
    }
  }
`

export const CardWrapper = styled.div`
  /* margin-top: 3.375rem;
  display: flex;
  
  gap: 2rem;

  flex-wrap: wrap;
   */

  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  align-items: center;
  justify-content: center;
  

  @media (max-width: 1440px){
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.8rem;
    
  };
  @media (max-width: 1180px){
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.5rem;
    
  }
  @media (max-width: 980px){
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    
  }
  @media (max-width: 890px){
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    
  }

  @media (max-width: 800px){
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    
  }
  @media (max-width: 700px){
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    
  }
  
`