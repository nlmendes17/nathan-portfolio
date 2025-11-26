type CardProps = {
  title: string;
  href?: string;
  badge?: string;
};

export default function Card({ title, href = "#", badge }: CardProps) {
  return (
    <a
      href={href}
      className="bg-lightCard/5 border border-neutral-800 rounded-2xl p-5 shadow-lg transition hover:scale-[1.02] hover:border-purple-500 cursor-pointer flex flex-col gap-3"
    >
      <div className="h-32 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center text-neutral-500 text-xs uppercase tracking-widest">
        Preview em breve
      </div>
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {badge && (
          <span className="text-[10px] px-2 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/40">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-400">
        Clique para saber mais sobre este modelo.
      </p>
    </a>
  );
}
