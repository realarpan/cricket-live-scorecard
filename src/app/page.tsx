'use client';
// Production-ready Cricket Scorecard Application

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-500">🏏 Cricket Scorecard</h1>
          <ul className="flex gap-6">
            <li><Link href="/matches" className="text-gray-300 hover:text-white transition">Matches</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-white transition">Teams</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-white transition">Players</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 text-white">Live Cricket Scorecard</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Real-time cricket scorecard viewer with detailed statistics, ball-by-ball commentary, and live updates
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/matches" className="btn btn-primary px-8 py-3 rounded-lg">
            View Live Matches
          </Link>
          <button className="btn btn-secondary px-8 py-3 rounded-lg">
            Browse History
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-white text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h4 className="text-xl font-bold mb-3 text-blue-400">⚡ Real-time Updates</h4>
              <p className="text-gray-300">Get instant live updates with WebSocket integration for seamless real-time scoring</p>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold mb-3 text-blue-400">📊 Detailed Stats</h4>
              <p className="text-gray-300">Comprehensive player statistics, bowling figures, and fielding records</p>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold mb-3 text-blue-400">🎯 Multiple Formats</h4>
              <p className="text-gray-300">Support for Test, ODI, T20, and other cricket formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Cricket Live Scorecard. Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
