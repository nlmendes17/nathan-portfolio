export default function Header() {
  return (
    <header className="w-full py-6 flex justify-between items-center px-8 bg-darkBg border-b border-neutral-800">
      <h1 className="text-2xl font-bold tracking-tight">
        Nathan <span className="text-purple-400">Mendes</span>
      </h1>

      <nav className="flex gap-6 text-sm sm:text-base">
        <a href="/" className="hover:text-purple-300 transition">Home</a>
        <a href="/models" className="hover:text-purple-300 transition">Modelos</a>
        <a href="/sobre" className="hover:text-purple-300 transition">Sobre</a>
        <a href="/contato" className="hover:text-purple-300 transition">Contato</a>
      </nav>
    </header>
  );
}
