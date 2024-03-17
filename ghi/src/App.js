import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Nav';
import LoginPage from './Login';
import MainPage from './MainPage';
import Footer from './Footer';
import Portfolio from './Portfolio';

function App() {
  return (

  <BrowserRouter>
    <div>
      <NavBar />


      <Routes>

        <Route index element={<MainPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="portfolio" element={<Portfolio />} />



      </Routes>
      <Footer />
    </div>
  </BrowserRouter>

  );
}

export default App;
