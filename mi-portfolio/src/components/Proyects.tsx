const projects = [
  {
    id: 1,
    title: "Bro Respeta!",
    description:
      "Juego de ritmo estilo guitar hero.",
    tags: ["Java" ],
    link: "#",
  },
  {
    id: 2,
    title: "Reseñones",
    description:
      "Pagina de reseña de peliculas",
    tags: ["Html", "Css", "JavaScript"],
    link: "#",
  },
  {
    id: 3,
    title: "Kiokso",
    description:
      "Una base de datos de un almacen.",
    tags: ["MySQL","XAMPP"],
    link: "#",
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function Projects() {
  return (
    <section className="bg-[#0e0e0e] py-24 px-6" id="projects">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/30 mb-3">
            // projects
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Lo que construí
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-xl transition-all duration-300"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(123,104,238,0.35)";
                e.currentTarget.style.background = "#161620";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)";
                e.currentTarget.style.background = "#141414";
              }}
            >
              {/* Número decorativo */}
              <span className="absolute top-5 right-6 font-mono text-xs text-white/10 group-hover:text-[#7B68EE]/30 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Contenido */}
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className="text-lg font-semibold text-white group-hover:text-[#7B68EE] transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 rounded text-white/50"
                      style={{ background: "rgba(123,104,238,0.08)", border: "1px solid rgba(123,104,238,0.15)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flecha */}
              <div className="text-white/20 group-hover:text-[#7B68EE] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0">
                <ArrowIcon />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}