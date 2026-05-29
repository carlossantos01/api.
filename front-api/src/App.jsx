import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {

  return (
  <>
  <Header />
  <main>
    <Route>
      <Routes path='/' element={<HomePage />} />
    </Route>
  </main>
  <Footer />



    </>
  )
}

export default App
