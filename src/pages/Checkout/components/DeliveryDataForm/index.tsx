import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CashButton, CEPInput, CityInput, ComplementInput, CreditCardButton, DebitCardButton, DistrictInput, FormContainer, FormHeader, InputContainer, NumberInput, PaymentChoice, PaymentHeader, StreetInput, UFInput } from "./styles";
import { useForm  } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from "react-router-dom";
import { zodResolver }  from "@hookform/resolvers/zod"
import * as zod from 'zod'
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/cartContext";

const completeOrderFormValidation = zod.object({
  CEP: zod.number({required_error: "Infome um CEP", invalid_type_error: "Informe um CEP válido"}).
    min(10000000, "CEP inválido").
    max(99999999, "CEP inválido"),
  adress: zod.string().min(1, "Informe a Rua"),
  number: zod.number({required_error: "Infome um número", invalid_type_error: "Informe um número válido"})
    .min(1)
    .max(9999),
  complement: zod.string().optional(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  UF: zod.string()
    .min(2, "Informe uma UF válida")
    .max(2, "Informe uma UF válida"),
})

type OrderFormData = zod.infer<typeof completeOrderFormValidation>

interface PaymentButtonActiveProps{
  creditCard: boolean,
  debitCard: boolean,
  cash: boolean,
}

export function DeliveryDataForm(){

  const { finishOrder, cartList, clearCartList,  changePaymentFormat, paymentFormat} = useContext(CartContext)

  const { register, handleSubmit, formState: { errors }, reset} = useForm<OrderFormData>({
    resolver: zodResolver(completeOrderFormValidation),
    defaultValues: {
      CEP: undefined,
      adress: '',
      number: undefined,
      complement: '',
      district: '',
      city: '',
      UF: '',
    }
  })

  const [ paymentButtonActive, setPaymentButtonActive ] = useState<PaymentButtonActiveProps>({
    creditCard: false,
    debitCard: false,
    cash: false,
  })
  

  function paymentChoice( newPaymentFormat: string){

   
    if( newPaymentFormat == "Cartão de Crédito"){
        setPaymentButtonActive(
          {
            creditCard: true,
            debitCard: false,
            cash: false,
          }
        )
    }
    if( newPaymentFormat == "Cartão de Débito"){
        setPaymentButtonActive(
          {
            creditCard: false,
            debitCard: true,
            cash: false,
          }
        )
    }
    if( newPaymentFormat == "Dinheiro"){
        setPaymentButtonActive(
          {
            creditCard: false,
            debitCard: false,
            cash: true,
          }
        )
    }
    changePaymentFormat( newPaymentFormat )
  }

  const navigate = useNavigate()


  function handleNewOrder(data: OrderFormData){
    const orderUserData = data
    
    if(paymentFormat && cartList.length > 0){
        finishOrder(orderUserData)

        setPaymentButtonActive({
          creditCard: false,
          debitCard: false,
          cash: false,
        })

        reset()
        clearCartList()
        changePaymentFormat('')
        navigate('../delivery')
      }else{
       if(cartList.length == 0 ){
        alert("O Carrinho está vazio")
       }else{
        alert("Escolha uma forma de pagamento")
       }
    }
  }


  return ( 
    <FormContainer>

      <InputContainer>
          <FormHeader>
            <MapPinLine size={22}/>
            <span>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço de onde deseja receber seu pedido</p>
            </span>
          </FormHeader>
          <form action="" onSubmit={handleSubmit(handleNewOrder)}  id="userDataForm">

            <CEPInput
              id="CEP"  
              placeholder="CEP"
              {...register('CEP', {valueAsNumber: true})}
            />
            <ErrorMessage 
              errors={errors} 
              name="CEP"
              render={({message}) => <b>{message} </b>}
            />

            <StreetInput 
              id='adress'
              placeholder="Rua"
              {...register('adress')}

            />
            <ErrorMessage 
              errors={errors} 
              name="adress"
              render={({message}) => <b>{message} </b>}
            />

            <NumberInput 
              id="number" 
              placeholder="Número"
              {...register('number', {valueAsNumber: true})}
            />
            <ErrorMessage 
              errors={errors} 
              name="number"
              render={({message}) => <b>{message} </b>}
            />

            <ComplementInput 
              id="complement" 
              placeholder="Complemento" 
              {...register('complement')}
            />

            <DistrictInput 
              id="district" 
              placeholder="Bairro" 
              {...register('district')}
            />
            <ErrorMessage 
              errors={errors} 
              name="district"
              render={({message}) => <b>{message} </b>}
            />

            <CityInput
              id="city" 
              placeholder="Cidade" 
              {...register('city')} 
            />
            <ErrorMessage 
              errors={errors} 
              name="city"
              render={({message}) => <b>{message}</b>}
            />
            
            <UFInput 
              id="UF" 
              placeholder="UF" 
              {...register('UF')}
            />
            <ErrorMessage 
              errors={errors} 
              name="UF"
              render={({message}) => <b>{message} </b>}
            />


          </form>

      </InputContainer>

      <PaymentChoice>
        <PaymentHeader>
              <CurrencyDollar size={22} />
              <span>
                <p>Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </span>
        </PaymentHeader>

        <div>
          <CreditCardButton 
            onClick={() => {paymentChoice('Cartão de Crédito')}}
            active={paymentButtonActive.creditCard}
          >
            <CreditCard size={16} />
            <p>Cartão de Cŕedito</p>
          </CreditCardButton>

          <DebitCardButton 
            onClick={() => {paymentChoice('Cartão de Débito')}}
            active={paymentButtonActive.debitCard}
          >
            <Bank size={16} />
            <p>Cartão de Débito</p>
          </DebitCardButton>

          <CashButton 
            onClick={() => {paymentChoice('Dinheiro')}}
            active={paymentButtonActive.cash}
          >
            <Money size={16} />
            <p>Dinheiro</p>
          </CashButton>
        </div>

      </PaymentChoice>
    </FormContainer>
  )
}