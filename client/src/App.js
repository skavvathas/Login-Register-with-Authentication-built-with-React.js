import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate,  useNavigate } from "react-router-dom"; // navigate is for the redirecting
import { useAuthContext } from "./hooks/useAuthContext";

// pages and components
import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Select from "./pages/Select";


export default function App() {
  // null if nobody is logged in or the user value of the logged in user
  const {user} = useAuthContext(); 
  // !user -> not logged in
  // user -> logged in

  //const navigate = useNavigate();


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Select /> : <Navigate to="/home"/>} />
        <Route path="/login" element={!user ? <Login/> : <Navigate to="/home"/>} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/home"/>} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
    
      </Routes>
    </BrowserRouter>
  );
}
