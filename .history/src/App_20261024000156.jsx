import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen dark:bg-black dark:text-white">
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
