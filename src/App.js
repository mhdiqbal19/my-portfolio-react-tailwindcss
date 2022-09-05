import About from './component/about';
import Blog from './component/blog';
import Client from './component/client';
import Contact from './component/contact';
import Footer from './component/footer';
import Hero from './component/hero';
import Navbar from './component/navbar';
import Portfolio from './component/portfolio';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Client/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
