import { useEffect, useState } from "react";

const NAME = "Mateo";
const LAST_NAME = "Gonzalez Frutos";
const ROLE = "Backend Developer";
const DESCRIPTION = "portfolio de los cojones quiero dormir";
const PHOTO_URL = "/DSC02492.JPG"; 

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-6 pt-28 pb-16">

      {/* Glow de fondo sutil */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,104,238,0.07) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-4xl w-full transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >

        {/* Foto */}
        <div className="flex-shrink-0 relative">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#7B68EE]">
            <img
              src={PHOTO_URL}
              alt={`${NAME} ${LAST_NAME}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback si no hay foto: iniciales
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.style.background = "#1a1a2e";
                  parent.innerHTML = `<span style="color:#7B68EE;font-size:2.5rem;font-family:monospace;display:flex;align-items:center;justify-content:center;width:100%;height:100%;">${NAME[0]}${LAST_NAME[0]}</span>`;
                }
              }}
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-4 text-center md:text-left">

          {/* Saludo */}
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase text-white/30 transition-all duration-500"
            style={{ transitionDelay: "100ms" }}
          >
            — hola, soy
          </p>

          {/* Nombre */}
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight transition-all duration-500"
            style={{ transitionDelay: "200ms", fontFamily: "'Georgia', serif" }}
          >
            {NAME}{" "}
            <span style={{ color: "#7B68EE" }}>{LAST_NAME}</span>
          </h1>

          {/* Rol */}
          <div
            className="flex items-center gap-3 justify-center md:justify-start transition-all duration-500"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="w-6 h-px bg-[#7B68EE]" />
            <span className="font-mono text-sm tracking-widest uppercase text-[#7B68EE]">
              {ROLE}
            </span>
          </div>

          {/* Descripción */}
          <p
            className="text-white/40 text-base md:text-lg max-w-md leading-relaxed transition-all duration-500"
            style={{ transitionDelay: "400ms", fontFamily: "'Georgia', serif" }}
          >
            {DESCRIPTION}
          </p>

        </div>
      </div>


    </section>
  );
}