
import './App.css';
import Navbar from './components/Navbar';
import RailwaySearch_comp from './components/RailwaySearch';
import Suggested from './components/suggested';
import Login from './pages/login';

import image from "./assets/logo.png"
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <RailwaySearch_comp /> 


      <h2 className='head-prime'>Popular Routes</h2>
      <div className="suggestion_grid">
        <Suggested dest="Delhi" org="Gurugram" img={image} />
        <Suggested dest="Assam" org="Gurugram" img={image} />
        <Suggested dest="Hosur" org="Gurugram" img={image} />
        <Suggested dest="Coimbatore" org="Gurugram" img={image} />
       
      </div>

      <Footer/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
