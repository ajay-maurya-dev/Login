function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex gap-4 bg-white/80 dark:bg-black/80 backdrop-blur z-50">
      {/* Use standard anchor tags pointing to the section IDs */}
      <a href="#home" className="hover:underline">Home</a>
      <a href="#about" className="hover:underline">About</a>
    </nav>
  );
}

export default Navbar;
