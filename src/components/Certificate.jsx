
import React, { useEffect, useState } from "react";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import fullstack from "../assets/fullstack.jpg";
import networking from "../assets/networking.jpg";
import business from "../assets/business.jpg";

const certificates = [
  {
    id: "01",
    title: "Frontend Development",
    subtitle: "Bootcamp Trainee",
    organization: "Zuitt, Philippines",
    duration: "3 months",
    image: frontend,
    alt: "Frontend development bootcamp certificate",
  },
  {
    id: "02",
    title: "Backend Development",
    subtitle: "Bootcamp Trainee",
    organization: "Zuitt, Philippines",
    duration: "3 months",
    image: backend,
    alt: "Backend development bootcamp certificate",
  },
  {
    id: "03",
    title: "Full Stack Development",
    subtitle: "Bootcamp Completion",
    organization: "Zuitt, Philippines",
    duration: "",
    image: fullstack,
    alt: "Full stack development certificate",
  },
  {
    id: "04",
    title: "Networking",
    subtitle: "Networking Course",
    organization: "Technical Learning",
    duration: "",
    image: networking,
    alt: "Networking course certificate",
  },
  {
    id: "05",
    title: "Business Bootcamp",
    subtitle: "Professional Development",
    organization: "Business",
    duration: "",
    image: business,
    alt: "Business bootcamp certificate",
  },
];

const Certificate = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <main className="min-h-screen bg-[#F5F0E7] text-[#342F29]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:px-8 sm:pt-40 lg:px-12">

        {/* PAGE INTRO */}
        <header className="mb-14 border-b border-[#DCD2C3] pb-10 sm:mb-16 sm:pb-12">
          <p className="mb-5 text-[11px] font-medium tracking-[0.2em] text-[#8B7862]">
            My Certificates are a testament to my dedication to continuous learning and growth in the field of web development. Each certificate represents a milestone in my journey, showcasing the skills and knowledge I've acquired along the way.
          </p>

          <h1 className="font-serif text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-5xl md:text-6xl">
            Learning, documented.
          </h1>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-7 text-[#756B60] sm:text-base">
              A collection of my learning experiences in web development,
              networking, and business. Each certificate marks a step in
              my ongoing journey.
            </p>

            <p className="shrink-0 text-xs tracking-wide text-[#8B7862]">
              {String(certificates.length).padStart(2, "0")} certificates
            </p>
          </div>
        </header>

        {/* CERTIFICATE GALLERY */}
        <section
          aria-label="Certificate gallery"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-10"
        >
          {certificates.map((certificate) => (
            <article key={certificate.id} className="min-w-0">

              {/* CERTIFICATE IMAGE */}
              <button
                type="button"
                onClick={() => setSelected(certificate)}
                aria-label={`Enlarge ${certificate.title} certificate`}
                className="group block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#927B61]"
              >
                <div className="relative flex aspect-[1.35/1] items-center justify-center overflow-hidden border border-[#E0D7C9] bg-[#ECE5D9] p-3 sm:p-4">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    loading={certificate.id === "01" ? "eager" : "lazy"}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                  />

                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-[#F5F0E7]/95 text-[#574A3B] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </div>
              </button>

              {/* CERTIFICATE DETAILS */}
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-[10px] tracking-[0.16em] text-[#9A866E]">
                    {certificate.id}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.13em] text-[#8A7B68]">
                    {certificate.organization}
                  </span>
                </div>

                <h2 className="font-serif text-xl font-normal tracking-[-0.015em] sm:text-2xl">
                  {certificate.title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-x-2 text-xs text-[#786D60]">
                  <span>{certificate.subtitle}</span>

                  {certificate.duration && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{certificate.duration}</span>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-[#DCD2C3] pt-6">
          <p className="text-xs leading-6 text-[#817466]">
            Still learning, still building, and always curious about
            what comes next.
          </p>
        </footer>
      </div>

      {/* ENLARGED CERTIFICATE VIEW */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211D19]/90 p-4 sm:p-8"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} certificate preview`}
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-[#F5F0E7]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#C8B7A0]">
                  Certificate {selected.id}
                </p>
                <h2 className="mt-1 font-serif text-xl font-normal sm:text-2xl">
                  {selected.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close certificate preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-2xl transition-colors hover:bg-white/10"
              >
                &times;
              </button>
            </div>

            <div className="flex max-h-[78vh] items-center justify-center bg-[#F5F0E7] p-3 sm:p-6">
              <img
                src={selected.image}
                alt={selected.alt}
                className="max-h-[72vh] max-w-full object-contain"
              />
            </div>

            <p className="mt-3 text-xs text-[#D3C5B4]">
              {selected.organization}
              {selected.duration ? ` · ${selected.duration}` : ""}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Certificate;
