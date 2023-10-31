import NavBar from './components/NavBar/NavBar';
import {Form,Detail, Home, Landing} from './views'
import {Route, Routes, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation();

  return (
    <div className='App'>
        {location.pathname != '/' && <NavBar/>}
      <Routes>
        <Route exact path='/' Component={Landing}/>
        <Route path='/home' Component={Home}/>
        <Route path='/detail' Component={Detail}/>
        <Route path='/form' Component={Form}/>
        
      </Routes>
    </div>
  )
}

export default App
