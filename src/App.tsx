import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.scss';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import EPage from './pages/EPage';
import Feedback from './pages/Feedback';
import Footer from './pages/Footer';
import Home from './pages/Home';
import John from './pages/John';
import Sidney from './pages/Sidney';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact/*" element={<ContactUs />}>
          <Route path="sydney" element={<Sidney />} />
        </Route>
        {/* Если нам нужно чтобы контент одного компонента показывался в другом когда мы переходим по 3000/см/см то нам нужно использовать nesting routes. Если мы хотим, чтобы открывалась другая страница то используем раутс без нестинга */}
        <Route path="contact/john" element={<John />} />
        <Route path="*" element={<EPage />} />
      </Routes>
      <div className="footer">
        <h1>
          <Footer />
        </h1>
      </div>
      {/* When you switching the pages everything changes but code that is outside of the routes */}
    </Router>
  );
}

export default App;
