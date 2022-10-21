import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import SignupPage from './pages/SignupPage'

function App() {
  // const [goToLogInPage, setGoToLogInPage] = useState(false)
  // //setNavToLogInPage state here, pass down to SignupPage componenet

  // console.log(goToLogInPage)

  return (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage/>} />
  </Routes>
  )
}

export default App;

