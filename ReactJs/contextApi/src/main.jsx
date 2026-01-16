import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProviderComponent } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <ProviderComponent>
    <App />
  </ProviderComponent>,
)
