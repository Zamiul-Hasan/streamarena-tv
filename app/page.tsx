export default function Home() {
  const channels = [
    { name: "T Sports", logo: "/logos/tsports.png" },
    { name: "Sony Sports", logo: "/logos/sony.png" },
    { name: "Star Sports", logo: "/logos/star.png" },
    { name: "ESPN", logo: "/logos/espn.png" },
    { name: "Sky Sports", logo: "/logos/sky.png" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          IP TV
        </h1>

        <div className="hidden md:flex gap-6">
          <button className="hover:text-pink-400 transition">
            Home
          </button>
          <button className="hover:text-cyan-400 transition">
            Sports
          </button>
          <button className="hover:text-yellow-400 transition">
            Channels
          </button>
          <button className="hover:text-green-400 transition">
            Live
          </button>
        </div>

        <input
          type="text"
          placeholder="🔍 Search..."
          className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl w-40 md:w-60 outline-none"
        />
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-20 blur-3xl" />

        <div className="relative z-10">
          <span className="inline-block bg-red-500 text-white px-5 py-2 rounded-full animate-pulse">
            🔴 LIVE NOW
          </span>

          <h1 className="mt-6 text-5xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Watch Sports Live
          </h1>

          <p className="mt-6 text-zinc-300 text-lg md:text-2xl">
            HD Streaming • Live Matches • Multiple Devices
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <a
              href="/watch"
              className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-4 rounded-2xl text-white font-bold hover:scale-105 transition"
            >
              ▶ Watch Live
            </a>

            <button className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl hover:scale-105 transition">
              ⭐ Featured Events
            </button>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="px-6 pb-16">
        <h3 className="text-3xl font-bold mb-8">
          Popular Sports Channels
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl"
            >
              <img
                src={channel.logo}
                alt={channel.name}
                className="h-12 mx-auto"
              />

              <p className="mt-4 font-bold text-lg">
                {channel.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Sports */}
      <section className="px-6 pb-16">
        <h3 className="text-3xl font-bold mb-8">
          🔥 Live Sports
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all">
            <span className="text-red-500 font-bold">
              🔴 LIVE
            </span>
            <h4 className="text-xl font-bold mt-3">
              Bangladesh vs India
            </h4>
            <p className="text-zinc-400 mt-2">
              Cricket Championship
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all">
            <span className="text-red-500 font-bold">
              🔴 LIVE
            </span>
            <h4 className="text-xl font-bold mt-3">
              Real Madrid vs Barcelona
            </h4>
            <p className="text-zinc-400 mt-2">
              El Clasico
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition-all">
            <span className="text-red-500 font-bold">
              🔴 LIVE
            </span>
            <h4 className="text-xl font-bold mt-3">
              UFC Fight Night
            </h4>
            <p className="text-zinc-400 mt-2">
              Main Event
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-16">
        <h3 className="text-3xl font-bold mb-8">
          Categories
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-3xl text-center font-bold">
            ⚽ Football
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 rounded-3xl text-center font-bold">
            🏏 Cricket
          </div>

          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-3xl text-center font-bold">
            🥊 UFC
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-3xl text-center font-bold">
            🏀 Basketball
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-400">
        <p>© 2026 StreamArena TV</p>
        <p className="mt-2 text-sm">
          Premium Sports Streaming Experience
        </p>
      </footer>
    </main>
  );
}