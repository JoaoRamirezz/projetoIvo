import './App.css';
import Home from './pages/home/home';
import { Route, Router, Routes, RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  );
}


export default App;
