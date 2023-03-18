import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages/home';
import { Login } from './pages/login/Login.page';
import { Register } from './pages/register';
import { Shop } from './pages/shop';
import { Doctors } from './pages/doctors/Doctors.page';
import { DoctorDetail } from './pages/doctors/components/DoctorDetail.doctors';
import { Checkout } from './pages/checkout';
import { Payment } from './pages/payment';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="home/login" element={<Login />} />
          <Route path="home/register" element={<Register />} />
          <Route path="home/shop" element={<Shop />} />
          <Route path="home/shop/:category" element={<Shop />} />
          <Route path="home/our-doctors/*" element={<Doctors />} />
          <Route path="home/checkout" element={<Checkout />} />
          <Route path="home/payment" element={<Payment />} />
        </Routes>
      </Layout>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
