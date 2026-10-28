import About from "./components/About";
import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full dark:bg-black dark:text-white">
      {/* Navbar stays fixed or at the top */}
      <Navbar />
      
      {/* Wrap sections with unique IDs */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="services">
        <Se
      </section>
      <Footer />
    </div>
  );
}

export default App;
