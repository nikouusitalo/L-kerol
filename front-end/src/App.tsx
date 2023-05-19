import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'

function App() {

  return (
  <div>


 <Routes>
  <Route path="/" element={ <Home/> } />
  <Route path="login" element={ <Login/> } />
 </Routes>
  </div>
  )
}

export default App
