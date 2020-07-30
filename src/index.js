import React from 'react'
import { render } from 'react-snapshot'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'gsap/CSSPlugin'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import { StoreContextProvider } from './Containers/JoinUs/store'

render(
    <ThemeProvider theme={theme}>
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </ThemeProvider>,
    document.getElementById('root')
)

serviceWorker.unregister()
