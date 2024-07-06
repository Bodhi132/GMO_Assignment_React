import './App.css'
import UserDetails from './pages/UserDetails'
import Display from './pages/Display'
import Navigation from './components/Navigation'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UserProvider } from './context/ErrorContext'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="display/*" element={<Display />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
