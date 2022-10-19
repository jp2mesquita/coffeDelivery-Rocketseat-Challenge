import styled from "styled-components";

export const LayoutWrapper = styled.div`
  /* min-width: 1120px; */
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 10rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1440px){
    max-width: 1180px;
    padding-inline: 6rem;
  }

  @media (max-width: 1180px){
    max-width: 980px;
    padding-inline: 4rem;
  }

  @media (max-width: 500px){
    max-width: 980px;
    padding-inline: 2rem;
  }
 
`