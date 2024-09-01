
import Navbar from "../components/Navbar";
import RailwaySearch_comp from "../components/RailwaySearch";
import Suggested from "../components/suggested";
import image from "../assets/logo.png";
import Footer from "../components/footer";
import './homepage.css';
function Homepage() {
  return (
    <div className="Home">
      <Navbar />
      <RailwaySearch_comp />

      <h2 className="head-prime">Popular Train Routes</h2>
      <div className="suggestion_grid">
        <Suggested dest="Delhi" org="Gurugram" img={image} />
        <Suggested dest="Assam" org="Gurugram" img={image} />
        <Suggested dest="Hosur" org="Gurugram" img={image} />
        <Suggested dest="Coimbatore" org="Gurugram" img={image} />
      </div>

      <Footer />
    </div>
  );
}
export default Homepage;
