import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { connectorTheme } from "akeneo-design-system";
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={connectorTheme}>
      <App/>
    </ThemeProvider>
  </StrictMode>,
)


