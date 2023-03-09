import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Login } from './pages/login/Login.page';
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
          <Route path="home/shop" element={<Shop />} />
          <Route path="home/shop/:category" element={<Shop />} />
        </Routes>
      </Layout>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
