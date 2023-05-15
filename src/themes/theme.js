import { ThemeProvider } from 'styled-components'

import defaultTheme from '../themes/defaultTheme.js'
import GlobalStyles from '../styles/globals.js'




const Theme = ({ children }) => (
  <ThemeProvider theme = {theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider >
)

export default Theme
