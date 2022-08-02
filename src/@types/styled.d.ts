import 'styled-components'
import { lightTheme/* , darkTheme */ } from '../styles/themes/light' 

type ThemeLight = typeof lightTheme
// type ThemeDark = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeLight {}
}