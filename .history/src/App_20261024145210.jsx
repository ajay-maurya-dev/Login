import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen w-full dark:bg-black dark:text-white">
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Footer />
      
    </div>
  );
}


export default App;
