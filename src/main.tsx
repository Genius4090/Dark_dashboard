import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
     <GlobalContext>
     <Toaster position="top-center" reverseOrder={false}/>
         <App />
    </GlobalContext>
</BrowserRouter>)
