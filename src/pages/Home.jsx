import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600')",
        }}
      >
        <div className="overlay">

          <h1>Midnight Motors</h1>

          <h2>Drive Beyond Limits.</h2>

          <p>
            "Life isn't about the destination.
            <br />
            It's about the drive."
          </p>

          <Link to="/cars">
            <button>Explore Cars</button>
          </Link>

        </div>
      </section>

      <section className="features">

        <h2>Why Choose Midnight Motors?</h2>

        <div className="cards">

          <div className="card">
            ⚡
            <h3>Performance</h3>
            <p>Powerful engines built for speed.</p>
          </div>

          <div className="card">
            💎
            <h3>Luxury</h3>
            <p>Premium interiors and comfort.</p>
          </div>

          <div className="card">
            🛡
            <h3>Reliability</h3>
            <p>Trusted brands from around the world.</p>
          </div>

          <div className="card">
            🏁
            <h3>Premium Brands</h3>
            <p>BMW, Audi, Porsche, Mercedes.</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;