import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Features } from './components/Features/Features'
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Features />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;