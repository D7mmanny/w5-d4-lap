import {Routes,Route} from "react-router-dom" ;
import './App.css'
import Home from './pages/Home';
import NotFond from "./pages/NotFond";
import Login from "./pages/Login";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/hom" element={<Home/>}/>
    <Route path="*" element={<NotFond/>}/>
    </Routes>
    </>
  )
}

export default App
