import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Archive", href: "/archive" },
];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/TU-USUARIO", icon: <InstagramIcon /> },
  { label: "GitHub", href: "https://github.com/TU-USUARIO", icon: <GitHubIcon /> },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("Home");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <nav
        className={`bg-[#111111] rounded-xl transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.6)]" : "shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
        }`}
        style={{ border: "1px solid rgba(160,224,192,0.08)" }}
      >
        <div className="px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between gap-2 sm:gap-6">

          {/* home button */}
          <a
            href="/"
            aria-label="Home"
            className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#a0e0c0] flex items-center justify-center hover:scale-110 hover:bg-[#7dd4aa] transition-all duration-300 shadow-[0_0_12px_rgba(160,224,192,0.35)]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#111111">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </a>

          {/* Nav Links */}
          <ul className="flex items-center gap-3 sm:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`relative font-mono text-[10px] sm:text-sm tracking-wider sm:tracking-widest uppercase transition-all duration-300 group ${
                    active === link.label
                      ? "text-[#a0e0c0]"
                      : "text-white/50 hover:text-white/90"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#a0e0c0] transition-all duration-300 ${
                      active === link.label ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/40 hover:text-[#a0e0c0] transition-all duration-300 hover:scale-110"
              >
                
                <span className="block scale-90 sm:scale-100">{s.icon}</span>
              </a>
            ))}
          </div>

        </div>
      </nav>
    </div>
  );
}