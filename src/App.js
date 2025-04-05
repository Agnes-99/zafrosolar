import { Route, Routes, useLocation} from 'react-router-dom';
import { useState } from 'react'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import QuoteForm from './components/QuoteForm';

const App = () => {
  const [isQuoteFormVisible, setQuoteFormVisible] = useState(false); 
  const location = useLocation();

  const openQuoteForm = () => setQuoteFormVisible(true); 
  const closeQuoteForm = () => setQuoteFormVisible(false); 

  return (
    <div>
      <Header openQuoteForm={openQuoteForm} /> 
      {location.pathname === '/' && <Hero />}

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {isQuoteFormVisible && (
        <div className="modal-overlay" onClick={closeQuoteForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <QuoteForm />
            <button onClick={closeQuoteForm} className="close-modal-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
