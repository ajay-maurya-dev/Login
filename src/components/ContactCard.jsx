import { useState } from 'react';

function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 my-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl transition-colors duration-300">
      <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-sky-400 text-center">
        Get In Touch
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            /* Fixed: Added standard token for person's full name */
            autoComplete="name"
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-sky-400 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            /* Fixed: Added standard token for email address */
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-sky-400 transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            /* Fixed: Instruct browser not to attempt autofill on custom text areas */
            autoComplete="off"
            className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-sky-400 transition-all resize-none"
            placeholder="Your message details..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-bold rounded-xl transition-all duration-200 transform active:scale-98 shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactCard;
