import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

`

export const InputContainer = styled.div`
  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;

  b{

    color: red;
    font-size: 1rem;
  }
`

const BaseHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: .5rem;
  margin-bottom: 2rem;
  

  span{
    display: flex;
    flex-direction: column;
    gap: .175rem;

    p{
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400; 
      color: ${props => props.theme["base-subtitle"]};
      line-height: 130%;
    }

    p:last-child{
      font-size: .875rem;
    }
  }
`

export const FormHeader = styled(BaseHeader)`
  color: ${props => props.theme["yellow-dark"]};

`
const BaseInput = styled.input`
  padding: .875rem;
  background-color: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 1rem;
`

export const CEPInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
  width: 35rem;
`
export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
  margin-right: .75rem;

`
export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
`
export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
  margin-bottom:0;
  margin-right: .75rem;
`
export const CityInput = styled(BaseInput)`
  width: 17.25rem;
  margin-bottom: 0;
  margin-right: .75rem;

`
export const UFInput = styled(BaseInput)`
  width: 3.75rem;
  margin-bottom: 0;
`

export const PaymentChoice = styled.div`
  background-color: ${props => props.theme["base-card"]};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;

  div{
    display: flex;
    align-items: left;
    /* justify-content: space-between; */
    gap: .75rem;
  }

`

export const PaymentHeader = styled(BaseHeader)`
  color: ${props => props.theme["purple"]};

`

const BaseChoiceButton = styled.button`
  padding: 1rem;
  width: 11.166875rem;
  height: 3.1875rem;
  display: flex;
  align-items: center;
  gap: .75rem;

  background-color: ${props => props.theme["base-button"]};
  border: none;
  border-radius: 6px;

  color: ${props => props.theme["purple"]};


  text-transform: uppercase;

  p{
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;
    line-height: 160%;
    font-weight: 400; 
    color: ${props => props.theme["base-text"]};

  }

  transition: border-color .2s;

  &:hover{
    border: 1px solid ${(props) => props.theme["purple"]};
    background: ${(props) => props.theme["base-hover"] };
    cursor: pointer;
  }

`

interface CreditCardButtonProps{
  active: boolean
}

export const CreditCardButton = styled(BaseChoiceButton)<CreditCardButtonProps>`
  border: 1px solid ${(props) => {
    if(props.active){
      return  props.theme["purple"]
    }else{
      return props.theme["background"]
    }
  }};
`
export const DebitCardButton = styled(BaseChoiceButton)<CreditCardButtonProps>`
  border: 1px solid ${(props) => {
    if(props.active){
      return  props.theme["purple"]
    }else{
      return props.theme["background"]
    }
  }};
`
export const CashButton = styled(BaseChoiceButton)<CreditCardButtonProps>`
  border: 1px solid ${(props) => {
    if(props.active){
      return  props.theme["purple"]
    }else{
      return props.theme["background"]
    }
  }};
`