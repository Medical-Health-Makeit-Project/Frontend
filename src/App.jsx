import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { RequireAuth } from '@components/requireAuth';
import { Home } from './pages/home';
import { Login } from './pages/login/Login.page';
import { Register } from './pages/register';
import { Shop } from './pages/shop';
import { Doctors } from './pages/doctors/Doctors.page';
import { Checkout } from './pages/checkout';
import { Payment } from './pages/payment';
import { Unauthorized } from './pages/unauthorized';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*Public Routes*/}
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="home/login" element={<Login />} />
          <Route path="home/register" element={<Register />} />
          <Route path="home/unauthorized" element={<Unauthorized />} />
          {/*Private Routes */}
          <Route element={<RequireAuth allowedRoles={[1993, 1000]} />}>
            <Route path="home/shop" element={<Shop />} />
            <Route path="home/shop/:category" element={<Shop />} />
            <Route path="home/checkout" element={<Checkout />} />
            <Route path="home/payment" element={<Payment />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[2023, 1000]} />}>
            {/*Rutas habiles para doctores*/}
            <Route path="home/test" element={<div>Test</div>} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
