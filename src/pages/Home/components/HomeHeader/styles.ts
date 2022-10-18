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
    
  }
  div:first-child{
    img{
      display: none;
    }
  }

  @media (max-width: 1440px){
    padding-top: 4.75rem;
    margin-bottom: 4.75rem;

    div{
      img{
        width:27.5rem;
      }
    }
  }

  @media (max-width: 1180px){
    padding-top: 3.75rem;
    margin-bottom: 3.75rem;

    div{
      img{
        width:23rem;
      }
    }
  }
  @media (max-width: 980px){
    padding-top: 3.75rem;
    margin-bottom: 3.75rem;

    div{
      img{
        width:22rem;
      }
    }
  }
  @media (max-width: 890px){
    padding-top: 3.75rem;
    margin-bottom: 3.75rem;

    div{
      img{
        width:18rem;
      }
    }
  }


  @media (max-width: 800px){
    padding-top: 2rem;
    margin-bottom: 1rem;

    flex-flow: column;
    
    >div:last-child{
      
      img{
        display: none;
       
      }
    }
    div:first-child{
      align-self: flex-start;
      width: 100%;
      img{
        display: flex;
        width: 12rem;
      }
    }
  }

  @media (max-width: 700px){
    
    div:first-child{
      align-self: flex-start;
      width: 100%;
      img{
        display: none;
      }
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Title  = styled.p`
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${props => props.theme["base-title"]};
    margin-bottom: 1rem;

    @media (max-width: 1440px){
      font-size: 2.25rem;
    }
    @media (max-width: 1180px){
      font-size: 1.75rem;
    }
    @media (max-width: 980px){
      font-size: 1.5rem;
    }

    @media (max-width: 800px){
      
      font-size: 1.2rem;
    }
`
export const Subtilte  = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};
    @media (max-width: 1440px){
      font-size: 1rem;
    }
    @media (max-width: 1180px){
      font-size: .85rem;
    }
    @media (max-width: 980px){
      font-size: .8rem;
    }
    @media (max-width: 800px){
      
      font-size: .75rem;
    }
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

  @media (max-width: 1440px){
    margin-top: 3.125rem;
    gap: 2rem;
    ul{
      li{
        font-size: .85rem;
      }
    }
  }
  @media (max-width: 1180px){
    margin-top: 1.5rem;
    gap: 1.5rem;
    ul{
      li{
        font-size: .75rem;
      }
    }
  }
  @media (max-width: 980px){
    margin-top: 1rem;
    gap: 1.25rem;
    ul{
      li{
        font-size: .7rem;
      }
    }
  }

  @media (max-width: 800px){
    /* width: 100%; */
    gap: 0;
    justify-content: space-between;
    padding-inline: 0rem;
  }

  @media (max-width: 700px){
    display: flex;
    align-self: flex-start;
    width: 100%;
    align-items: flex-start;
    
    padding-inline: 0rem;
  }
`
