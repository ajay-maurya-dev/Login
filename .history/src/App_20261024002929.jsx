import About from "./components/About";
import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen w-full pt-20 dark:bg-black dark:text-white">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;

export default App;
