import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Command as CommandIcon,
  Music,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  X,
} from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const [showPlayer, setShowPlayer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = ["home", "projects", "skills", "contact"];

  const songs = [
    { id: "LJRA8UrlqCM", title: "Can't Help Falling in love", artist: "Elvis Presley" },
    { id: "EoPUXuKQnr4", title: "My Love", artist: "Elvis Presley" },
    { id: "Z7h6cs9DcpY", title: "National Anthem", artist: "Lana Del Rey" },
    { id: "Jl8iYAo90pE", title: "Caribbean Blue", artist: "Enya" },
    { id: "hnDv_mQKRd4", title: "Young and Beautiful", artist: "Lana Del Rey" },
    { id: "7KBQLgeKRbg", title: "My Heart Will Go On", artist: "Celine Dion" },
  ];

  const currentSong = songs[currentIndex];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else setActiveLink(path.replace("/", ""));
  }, [location]);

  const handleLinkClick = (link) => {
    setIsOpen(false);
    navigate(link === "home" ? "/" : `/${link}`);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className={`flex items-center justify-between gap-6 px-6 py-3 rounded-full border shadow-lg transition-all duration-300
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border-gray-200"
              : "bg-white/50 backdrop-blur-lg border-white/40"
          }`}
        >
          {/* LEFT */}
          <div className="flex items-center gap-3 min-w-[140px]">
            <button onClick={() => handleLinkClick("home")}>
              <p className="italic font-mono text-sm text-gray-900">
                &lt; Drisya /&gt;
              </p>
            </button>

            <CommandIcon
              size={16}
              className="cursor-pointer hover:text-green-500 transition"
              onClick={() => navigate("/terminal")}
            />

            <Music
              size={16}
              className="cursor-pointer hover:text-purple-500 transition"
              onClick={() => setShowPlayer(true)}
            />
          </div>

          {/* CENTER NAV */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all
                  ${
                    activeLink === link
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-700 hover:bg-white/60"
                  }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
          </div>

          {/* RIGHT SPACER (important for symmetry) */}
          <div className="hidden md:block min-w-[140px]" />

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>☰</button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 🎵 MUSIC MODAL */}
      <div
  className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300
  ${showPlayer ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
>
          <div className="w-[90%] max-w-md bg-black/80 text-white rounded-2xl p-5 shadow-2xl relative">

            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowPlayer(false)}
            >
              <X size={18} />
            </button>

            <p className="text-xs text-gray-400">NOW PLAYING</p>

            <div className="flex gap-4 mt-3">
              <img
                src={`https://img.youtube.com/vi/${currentSong.id}/hqdefault.jpg`}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold text-lg">{currentSong.title}</p>
                <p className="text-sm text-gray-400">{currentSong.artist}</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 mt-6">
              <SkipBack size={20} onClick={prevSong} className="cursor-pointer" />

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white text-black p-3 rounded-full"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <SkipForward size={20} onClick={nextSong} className="cursor-pointer" />
            </div>
          </div>
        </div>
        {/* 🎵 BACKGROUND PLAYER (always mounted) */}
        {isPlaying && (
          <iframe
            width="0"
            height="0"
            src={`https://www.youtube.com/embed/${currentSong.id}?autoplay=1`}
            allow="autoplay"
            title="music"
          />
        )}
      
    </>
  );
};

export default Navbar;