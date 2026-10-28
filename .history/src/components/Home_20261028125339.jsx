import backgroundImage from '../assets/PhotoshopExtension_Image.jpeg';

function Home() {
  return (
    <div 
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center border-2 border-white py-1">
        <h1 className="p-4 text-5xl font-black text-transparent [-webkit-text-stroke:2px_white] sm:text-7xl lg:text-8xl">
          HEADPHONE
        </h1>
        <h2>jkjlkj</h2>
      </div>
    </div>
  );
}

export default Home;
