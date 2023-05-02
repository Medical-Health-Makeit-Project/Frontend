import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout } from './components';
import { RequireAuth } from '@components/requireAuth';
import { Home } from './pages/home';
import { Login } from './pages/login/Login.page';
import { Register } from './pages/register';
import { Shop } from './pages/shop';
import { Doctors } from './pages/doctors/Doctors.page';
import { ContainerProfiles } from './pages/profiles';
import { Checkout } from './pages/checkout';
import { Payment } from './pages/payment';
import { Appointments } from './pages/appointments';
import { Dashboard } from './pages/administration';
import { Unauthorized } from './pages/unauthorized';
import { Page404 } from './pages/404';
import { PublicRoutes, PrivateRoutes } from './routes/routes.routes';
import { roles } from './utils/roles/roles.utils';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PublicRoutes.PAGE404} element={<Page404 />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={PublicRoutes.HOME} />} />
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.REGISTER} element={<Register />} />
          <Route path={PublicRoutes.DOCTORS} element={<Doctors />} />
          <Route path={PublicRoutes.SHOP} element={<Shop />} />
          <Route path={PublicRoutes.CATEGORY} element={<Shop />} />
          <Route path={PublicRoutes.UNAUTHORIZED} element={<Unauthorized />} />
          <Route element={<RequireAuth allowedRoles={[roles.ADMIN, roles.USER]} />}>
            <Route path={PrivateRoutes.APPOINTMENTS} element={<Appointments />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[roles.ADMIN, roles.USER, roles.DOCTOR]} />}>
            <Route path={PrivateRoutes.CHECKOUT} element={<Checkout />} />
            <Route path={PrivateRoutes.PAYMENT} element={<Payment />} />
            <Route path={PrivateRoutes.PROFILES} element={<ContainerProfiles />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[roles.ADMIN, roles.DOCTOR]} />}>
            <Route path="home/test" element={<div>Test</div>} />
          </Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={[roles.ADMIN]} />}>
          <Route path={`${PrivateRoutes.ADMIN.INDEX}/*`} element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
