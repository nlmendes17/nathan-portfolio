import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function ModelsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-darkBg via-[#050509] to-black">
      <Header />

      <div className="max-w-6xl mx-auto mt-16 px-4 flex-1 w-full">
        <h1 className="text-4xl font-bold mb-4">Modelos de sites</h1>
        <p className="text-gray-300 mb-10 max-w-2xl">
          Aqui você encontra alguns dos principais tipos de sites que eu
          desenvolvo para negócios locais e empresas. Em breve, cada modelo terá
          uma demo exclusiva.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Barbearia" badge="Popular" />
          <Card title="Hamburgueria / Restaurante" />
          <Card title="Loja de Carros" badge="Alta conversão" />
          <Card title="Cancha Esportiva" />
          <Card title="Petshop / Clínica Vet" />
          <Card title="Moda / Boutique" />
          <Card title="Oficina / Mecânica" />
          <Card title="Clínica Estética / Beleza" />
          <Card title="Mercado / Hortifruti" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
