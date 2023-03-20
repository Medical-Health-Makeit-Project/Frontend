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
import { Appointments } from './pages/appointments';
import { Unauthorized } from './pages/unauthorized';
import { PublicRoutes, PrivateRoutes } from './routes/routes.routes';
import { roles } from './utils/roles/roles.utils';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.REGISTER} element={<Register />} />
          <Route path={PublicRoutes.UNAUTHORIZED} element={<Unauthorized />} />
          <Route path={PublicRoutes.DOCTORS} element={<Doctors />} />

          <Route element={<RequireAuth allowedRoles={[roles.ADMIN, roles.USER, roles.DOCTOR]} />}>
            <Route path={PrivateRoutes.SHOP} element={<Shop />} />
            <Route path={PrivateRoutes.CATEGORY} element={<Shop />} />
            <Route path={PrivateRoutes.CHECKOUT} element={<Checkout />} />
            <Route path={PrivateRoutes.PAYMENT} element={<Payment />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[roles.ADMIN, roles.DOCTOR]} />}>
            <Route path="home/test" element={<div>Test</div>} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
