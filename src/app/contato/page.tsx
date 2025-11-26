import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContatoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-darkBg via-[#050509] to-black">
      <Header />

      <div className="max-w-4xl mx-auto mt-16 px-4 flex-1">
        <h1 className="text-4xl font-bold mb-6">Fale comigo</h1>

        <p className="text-lg text-gray-300 mb-6">
          Quer um site novo, um modelo personalizado ou até um sistema mais
          completo? Me chama no WhatsApp ou manda um e-mail com a sua ideia.
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <a
            href="https://wa.me/5541999999999"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-base font-semibold shadow-lg shadow-green-600/30 transition w-fit"
          >
            Abrir WhatsApp
          </a>

          <a
            href="mailto:seuemail@exemplo.com"
            className="text-purple-300 hover:text-purple-200 underline underline-offset-4"
          >
            Enviar e-mail
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
