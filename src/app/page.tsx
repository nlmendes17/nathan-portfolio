import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-darkBg via-[#050509] to-black">
      <Header />

      <section className="max-w-5xl mx-auto mt-16 px-4 pb-10 flex-1">
        <p className="uppercase tracking-[0.25em] text-xs text-purple-300/80">
          Portfólio profissional
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4">
          Sites modernos, rápidos e{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-300">
            feitos para vender.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Eu desenvolvo experiências digitais para negócios reais: barbearias,
          hamburguerias, lojas de carros, canchas, petshops, moda e muito mais.
          Design limpo, tecnologia de ponta e foco total em resultado.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="https://wa.me/5541999999999"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-base font-semibold shadow-lg shadow-purple-600/30 transition"
          >
            Falar no WhatsApp
          </a>
          <a
            href="/models"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-neutral-700 hover:border-purple-400 text-base font-medium text-gray-200 transition"
          >
            Ver modelos
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
