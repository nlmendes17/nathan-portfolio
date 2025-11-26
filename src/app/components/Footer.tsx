export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-10 text-center text-sm text-gray-500 border-t border-neutral-800 mt-16">
      © {year} — Desenvolvido por{" "}
      <span className="text-purple-300 font-semibold">Nathan Mendes</span>.
    </footer>
  );
}
