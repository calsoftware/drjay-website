export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">
          Dr Olajide Jolugbo
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">About</a>
          <a href="#">Research</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl font-bold mb-6 max-w-4xl">
          Researcher, AI Strategist and Digital Scientist
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mb-8">
          Advancing AI, learning science, cyber security and digital
          transformation through research, strategy and engineering.
        </p>

        <p className="text-md text-gray-500 mb-10">
          Based in London • Building at the intersection of AI,
          education and digital transformation
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
          Explore My Work
        </button>

      </section>

    </main>
  );
}