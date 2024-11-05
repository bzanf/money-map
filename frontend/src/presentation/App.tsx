import './App.css'
import './assets/styles';
import Footer from './core/components/Footer';
import Header from './core/components/Header';
import Sidebar from './core/components/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <h1>Welcome to AdminLTE Dashboard</h1>
            <p>This is your main content area.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;