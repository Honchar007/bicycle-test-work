import './App.css';

// components
import AdminPanel from './components/AdminPanel/AdminPanel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='container'>
      <Header />
      <AdminPanel />
      <Footer />
    </div>
  );
}

export default App;
