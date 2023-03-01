import { Layout } from './components';
import { Home } from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
      <ToastContainer limit={1} />
    </div>
  );
}

export default App;
