import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import { AppContext } from './context/AppContext';
import Layout from './components/layout/Layout';

function App() {
  return (
    <AppContext>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Layout>
    </AppContext>
  );
}

export default App;
