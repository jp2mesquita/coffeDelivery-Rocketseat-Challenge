import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 2rem;

  max-width: 1120px;
  /* min-width: 1120px; */

  a:last-child{
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.5rem;
    background-color: ${(props) => props.theme["yellow-light"]};

    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    position: relative;
    text-decoration: none;
  }

`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  
  gap: .875rem;

  div{
    
    display: flex;
    flex-shrink: 0;
    align-items: center;
    background-color: ${props => props.theme["purple-light"]};
    padding: .5rem;
    border-radius: 6px;
    gap: 6px;

    color: ${props => props.theme["purple-dark"]};

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
`

export const AmountItemInCartIcon = styled.span`
  position: absolute;
  top: -.5rem;
  right: -.5rem;
  border-radius: 50%;
  color: ${props => props.theme['background']};

  display: flex;
  background-color: ${(props) => props.theme["yellow-dark"]};
  /* align-items: center; */
  /* justify-content: center; */

  font-size: .75rem;
  letter-spacing: -0.06em;
  font-weight: 700;
  span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
  }
`