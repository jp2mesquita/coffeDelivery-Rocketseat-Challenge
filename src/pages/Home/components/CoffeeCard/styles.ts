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

  @media (max-width: 1440px){
    width: 14rem;
    height: 17.5rem;
    padding-inline: .95rem;
    strong{
      font-size: 1.25rem;
      margin-top: .75rem;
    };
    p{
      font-size: .75rem;
    }
    >div:last-child{

      margin-top: auto;
      margin-bottom: 1.25rem;
    }
  }
  


  @media (max-width: 1180px){
    width: 12.5rem;
    height: 16rem;
    padding-inline: .85rem;
    strong{
      font-size: 1.15rem;
      margin-top: .65rem;
    };
    p{
      font-size: .7rem;
    }
    >div:last-child{

      margin-top: auto;
      margin-bottom: 1.25rem;
    }
  }


  @media (max-width: 980px){
    width: 11.25rem;
    height: 14.5rem;
    padding-inline: .75rem;
    strong{
      font-size: 1rem;
      margin-top: .75rem;
    };
    p{
      font-size: .65rem;
    }
    >div:last-child{

      margin-top: auto;
      margin-bottom: 1.25rem;
    }
  }
  @media (max-width: 890px){
    width: 13.25rem;
    height: 15rem;
    padding-inline: 1rem;
    strong{
      font-size: 1.15rem;
      margin-top: .75rem;
    };
    p{
      font-size: .75rem;
    }
    >div:last-child{

      margin-top: auto;
      margin-bottom: 1.25rem;
    }
  }

  @media (max-width: 800px){
    width: 12rem;
    height: 14rem;
    padding-inline: 1rem;
    strong{
      font-size: .9rem;
      margin-top: .5rem;
    };
    p{
      font-size: .65rem;
    }
    >div:last-child{

      margin-top: auto;
      margin-bottom: 1.25rem;
    }
  }

  @media (max-width: 700px){
    width: auto;
    height: 8rem;
    padding-inline: .5rem;
    padding-bottom: 1rem;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    section{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left:1.5rem;
      text-align: left;
      padding-right: .5rem;
      flex: 1;
      div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        strong{
          font-size: 1rem;
          margin-top: .5rem;
        };
        p{
          font-size: .6rem;
          
        }
        
      }
    }

    >div:last-child{
      flex-direction: column;
      align-items: flex-start;
      
      justify-content: flex-start;
      width: 5rem;
      margin-block: 0;
      margin-right: 1rem;
      gap: .5rem;
    }

  }

`
export const CoffeeImage = styled.div`
  position: absolute;

  top: -1.25rem;
  left: 50%;
  transform: translateX(-50%);

  img{
    width: 7.5rem;
  }
  @media (max-width: 1440px){
    img{
      width: 7rem;
    }
  }
  @media (max-width: 1180px){
    img{
      width: 6.5rem;
    }
  }
  @media (max-width: 980px){
    img{
      width: 5.5rem;
    }
  }
  @media (max-width: 890px){
    img{
      width: 6rem;
    }
  }
  @media (max-width: 800px){
    img{
      width: 5rem;
    }
  }
  @media (max-width: 800px){

    
    img{
      width: 5rem;
    }
  }
  @media (max-width: 700px){
    position: relative;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 10%;
    img{
      width: 5rem;
    }
  }
 
`

export const Properties = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  text-align: center;
  
  /* flex-wrap: wrap; */

  margin-top: 7rem;
  @media (max-width: 1180px){
    margin-top: 6rem;
  }
  @media (max-width: 980px){
    margin-top: 5rem;
    

  }
  @media (max-width: 890px){
    margin-top: 5.5rem;
  }
  @media (max-width: 800px){
    margin-top: 4.5rem;
    flex-wrap: wrap;

  }
  @media (max-width: 700px){
    margin-top: 1rem;
    flex-wrap: nowrap;

  }
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

  @media (max-width: 1180px){
    font-size: .6rem;
  }
  @media (max-width: 980px){
    font-size: .55rem;
  }
  @media (max-width: 890px){
    font-size: .6rem;
  }
  @media (max-width: 800px){
    font-size: .5rem;
  }
`

export const Price = styled.h2`
    text-align: left; 

    font-family: 'Roboto', sans-serif;
    font-size: .875rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme["base-text"]};

  span{
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    
  }

  @media (max-width: 1440px){
    font-size: .85rem;
    span{
      font-size: 1.25rem;
    }
  }
  @media (max-width: 1180px){
    font-size: .8rem;
    span{
      font-size: 1.15rem;
    }
  }
  @media (max-width: 980px){
    font-size: .75rem;
    span{
      font-size: 1rem;
    }
  }
  @media (max-width: 890px){
    font-size: .8rem;
    span{
      font-size: 1.15rem;
    }
  }
  @media (max-width: 800px){
    font-size: .7rem;
    span{
      font-size: .9rem;
    }
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

  @media (max-width: 1440px){
    height: 2.175rem;
    padding: .4rem;
    gap: .2rem;
  }
  @media (max-width: 1180px){
    height: 2rem;
    padding: .35rem;
    gap: .175rem;
  }
  @media (max-width: 980px){
    height: 1.9rem;
    padding: .35rem;
    gap: .175rem;
  }
  @media (max-width: 890px){
    height: 2rem;
    padding: .35rem;
    gap: .175rem;
  }
  @media (max-width: 800px){
    height: 1.6rem;
    padding: .3rem;
    gap: .15rem;
  }
  @media (max-width: 700px){
    width: 100%;
    height: 1.6rem;
    padding: .3rem;
    gap: .15rem;
  }
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

  @media (max-width: 1440px){
    div{
      font-size: .9rem;
    }
  }
  @media (max-width: 1180px){
    div{
      font-size: .865rem;
    }
  }
  @media (max-width: 980px){
    div{
      font-size: .765rem;
    }
  }
  @media (max-width: 890px){
    div{
      font-size: .865rem;
    }
  }
  @media (max-width: 800px){
    div{
      font-size: .7rem;
    }
  }
  @media (max-width: 700px){
    div{
      font-size: .7rem;
    }
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
  
  @media (max-width: 1440px){
    svg{
      width: 20px;
    }
  }  
  @media (max-width: 1440px){
    svg{
      width: 18px;
    }
  } 
  @media (max-width: 980px){
    svg{
      width: 16px;
    }
  } 
  @media (max-width: 890px){
    svg{
      width: 18px;
    }
  } 
  @media (max-width: 800px){
    svg{
      width: 15px;
    }
  } 
`