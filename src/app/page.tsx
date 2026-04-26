import Hero from "@/components/Hero";
import Journeys from "@/components/Journeys";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#FAF9F6", color: "#1A1A2E" }}>
      <Hero />

      {/* Philosophy Interlude */}
      <section className="py-24 md:py-32 px-8 flex flex-col items-center text-center" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="max-w-4xl">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.6em] mb-6 px-5 py-2 rounded-full" style={{ color: "#C8A35F", backgroundColor: "rgba(200,163,95,0.08)" }}>
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.04em] font-light mb-6" style={{ color: "#1A1A2E" }}>
            We don&apos;t just book hotels. We plan{" "}
            <span className="italic" style={{ color: "#C8A35F" }}>meaningful trips</span>{" "}
            you will remember.
          </h2>
          <p className="font-sans text-sm md:text-base leading-[2] max-w-2xl mx-auto" style={{ color: "#6B6B80" }}>
            Since 2010, Parikrama Experiences has been planning wonderful trips across India.
            From the snowy mountains of Spiti to the green backwaters of Kerala, we make
            every journey special and worry-free.
          </p>
        </div>
      </section>

      <Journeys />
      <Footer />
    </main>
  );
}
