import { BrowserRouter,Routes,Route } from 'react-router-dom'
import  './App.css'
import Home from "./pages/home/Home"
import About from './pages/about/About'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>



      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/promts/:id' element={<About></About>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>    
    </div>
  )
}

export default App
