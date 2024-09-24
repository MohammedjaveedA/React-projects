
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
 
  return (
    <Usercontextprovider>
     <Login/>
     <Profile/>
    </Usercontextprovider>
  )
}

export default App
