import { GlobalStyles } from "./styles/globals";
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes/light';
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/cartContext";
import { CatalogContext, CatalogContextProvider } from "./contexts/catalogContext";

export function App() {
 

  return (
  
      <ThemeProvider theme={ lightTheme }>
        <BrowserRouter>
          <CatalogContextProvider>
            <CartContextProvider>
              <Router />
            </CartContextProvider>
          </CatalogContextProvider>
        </BrowserRouter>
        <GlobalStyles/>
      </ThemeProvider>
   
  )
}


