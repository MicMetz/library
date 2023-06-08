import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './defaultTheme.js'
import GlobalStyles from '../styles/GlobalStyles.js'




const Theme = ({ children }) => (
  <ThemeProvider theme = {defaultTheme} >
    <GlobalStyles />
    {children}
  </ThemeProvider >
)

export default Theme
