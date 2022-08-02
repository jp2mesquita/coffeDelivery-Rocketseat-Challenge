import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/globals";
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes/light';
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/cartContext";

export function App() {
 

  return (
  
      <ThemeProvider theme={ lightTheme }>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
        <GlobalStyles/>
      </ThemeProvider>
   
  )
}


