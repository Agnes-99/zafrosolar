import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './components/Home';
import QuoteForm from './components/QuoteForm';

const App = () => {
  const [isQuoteFormVisible, setQuoteFormVisible] = useState(false); 

  const openQuoteForm = () => setQuoteFormVisible(true); 
  const closeQuoteForm = () => setQuoteFormVisible(false); 

  return (
    <div>
      <Header openQuoteForm={openQuoteForm} /> 
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>

      {isQuoteFormVisible && (
        <div className="modal-overlay" onClick={closeQuoteForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <QuoteForm />
            <button onClick={closeQuoteForm} className="close-modal-btn">x</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
