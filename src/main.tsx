import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LoansDataProvider } from './hooks/useLoanData.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoansDataProvider>
      <App />
    </LoansDataProvider>
  </StrictMode>,
)
