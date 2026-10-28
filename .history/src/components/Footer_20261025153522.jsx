

function Footer() {
  return (
   import { Link } from "react";

function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">

        {/* Brand and description */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-3xl font-black tracking-wider text-white">
              SOUND<span className="text-cyan-400">X</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Experience sound without limits.
              Discover headphones designed for
              comfort, clarity, and everyday life.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-bold text-white">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="transition hover:text-cyan-400">Home</a></li>
              <li><a href="#about" className="transition hover:text-cyan-400">About Us</a></li>
              <li><a href="#services" className="transition hover:text-cyan-400">Products</a></li>
              <li><a href="#contact" className="transition hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-bold text-white">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#contact" className="transition hover:text-cyan-400">Contact Us</a></li>
              <li><a href="#contact" className="transition hover:text-cyan-400">Help Center</a></li>
              <li><a href="#contact" className="transition hover:text-cyan-400">Shipping Info</a></li>
              <li><a href="#contact" className="transition hover:text-cyan-400">Returns</a></li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="mb-4 font-bold text-white">Follow Us</h3>
            <p className="text-sm leading-6 text-gray-400">
              Stay connected for product updates and news.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-cyan-400 hover:text-cyan-400">
                IG
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-cyan-400 hover:text-cyan-400">
                YT
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:border-cyan-400 hover:text-cyan-400">
                FB
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SOUNDX. All rights reserved.
          </p>
          <p>Designed with passion for great sound.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
  )
}

export default Footer
