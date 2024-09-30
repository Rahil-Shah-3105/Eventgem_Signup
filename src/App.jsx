import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Signup from './components/Signup'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Helmet>
            <title>Eventgem - Home</title>
            <meta name="description" content="EventGem is your ultimate platform for managing all types of events, from vibrant festivals like Garba and Utrayan to exclusive cultural celebrations." />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
