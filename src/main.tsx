import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext.tsx'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
     <GlobalContext>
         <App />
    </GlobalContext>
</BrowserRouter>)
