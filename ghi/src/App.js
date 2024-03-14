import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Nav';
import LoginPage from './Login';
import MainPage from './MainPage';

function App() {
  return (


    <div>
      <NavBar />

      <BrowserRouter>
      <Routes>

        <Route index element={<MainPage />} />

        <Route path="login" element={<LoginPage />} />



      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
