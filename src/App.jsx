import { Layout } from './components';
import { Home } from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
