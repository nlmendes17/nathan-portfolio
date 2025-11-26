import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SobrePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-darkBg via-[#050509] to-black">
      <Header />

      <div className="max-w-4xl mx-auto mt-16 px-4 flex-1">
        <h1 className="text-4xl font-bold mb-6">Sobre mim</h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Meu nome é Nathan Mendes e eu ajudo negócios a terem presença digital
          de verdade. Nada de site largado ou template genérico sem alma: eu
          construo experiências pensadas para o seu público, para o seu jeito
          de atender e para o seu resultado.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Trabalho com tecnologias modernas como Next.js, React e TailwindCSS,
          unindo performance, design limpo e facilidade de manutenção. Cada
          projeto nasce com uma preocupação clássica: fazer bem-feito, estável e
          bonito — mas com um olhar visionário para o que ainda vem pela frente.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Se você tem uma barbearia, hamburgueria, loja, cancha, petshop,
          oficina ou qualquer outro negócio que merece estar bem representado na
          internet, eu posso transformar essa ideia em um site profissional.
        </p>
      </div>

      <Footer />
    </main>
  );
}
