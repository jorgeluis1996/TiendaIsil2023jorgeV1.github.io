import './App.css';

import MainFooter from './common/MainFooter';
import MainNav from './common/MainNav';
import Inicio from './pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Proveedores from './pages/Proveedores';
import Empleados from './pages/Empleados';
import Tienda from './pages/Tienda';


function App() {//Comentario JavaScript
  return (
    <>{/* Comentario */}
      <BrowserRouter>
        
        <MainNav />
        <main id="main-content">

          <Routes>
            <Route path="/" element={<Inicio/>} />
            
            <Route path="/proveedores" element={<Proveedores/>} />
            <Route path="/empleados" element={<Empleados/>} />
            <Route path="/tienda" element={<Tienda/>} />
          </Routes>

        </main>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;