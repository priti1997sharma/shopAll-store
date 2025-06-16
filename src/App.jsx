// import { Router } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import { AppRoutes } from './Routes/AppRoutes'
import { AppProvider } from './Utils/AppContext'

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AppProvider>
    </>
  )
}

export default App
