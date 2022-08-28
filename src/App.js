import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home/Home';
import Login from './Login/Login/Login';
import SingUp from './Login/SingUp/SingUp';
import Header from './Page/Header/Header';
import Book from './Page/Book/Book'
import RequireAuth from './Login/RequireAuth/RequireAuth'


function App() {
  return (
    <div>
      <Header></Header>
      
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/service/:serviceId" element={<RequireAuth>
        <Book></Book>
      </RequireAuth>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="singUp" element={<SingUp></SingUp>}></Route>
     </Routes>
     <Footer></Footer>
     
      
    </div>
  );
}

export default App;
