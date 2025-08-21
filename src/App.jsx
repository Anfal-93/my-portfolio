import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="p-6 shadow bg-white">
        <h1 className="text-3xl font-bold text-center">Anfal A. Ali</h1>
        <p className="text-center text-gray-500">
          Web Developer & Shopify Expert
        </p>
      </header>

      {/* About Section */}
      <section className="p-10 text-center">
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          👋 About Me
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg">
          I am a Web Developer with 5+ years of experience building responsive
          websites using Shopify, PHP, Laravel, and WordPress. I love creating
          clean and user-friendly solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-10 bg-white">
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🚀 Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="p-4 shadow rounded-xl bg-gray-100">
            <h3 className="font-bold text-lg">Shopify Custom Cart</h3>
            <p className="text-sm text-gray-600">
              Modified product & cart templates to allow custom messages to flow
              through checkout.
            </p>
            <a
              href="https://github.com/Anfal-93/Shopify-Task"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-4 shadow rounded-xl bg-gray-100">
            <h3 className="font-bold text-lg">WordPress Car Rental</h3>
            <p className="text-sm text-gray-600">
              A WooCommerce-based car rental platform with dynamic pricing and
              location filters.
            </p>
          </div>

          {/* Project 3 */}
          <div className="p-4 shadow rounded-xl bg-gray-100">
            <h3 className="font-bold text-lg">Portfolio Website</h3>
            <p className="text-sm text-gray-600">
              A personal portfolio built with React and TailwindCSS.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">🛠 Skills</h2>
        <p>
          Shopify · Liquid · JavaScript · PHP · Laravel · WordPress · HTML · CSS
        </p>
      </section>

      {/* Contact Section */}
      <footer className="p-6 bg-gray-800 text-white text-center">
        <h2 className="text-xl font-semibold mb-2">📬 Contact Me</h2>
        <p>Email: anfal@example.com</p>
        <p>
          <a
            href="https://github.com/Anfal-93"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
