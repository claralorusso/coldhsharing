import { useMemo, useState } from "react";
import { listArguments } from "../constant";
import { ArgumentCard } from "../shared";

export const Home = () => {
  const [query, setQuery] = useState("");

  const filteredArguments = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return listArguments;

    return listArguments.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(trimmed);
      const inLinks = item.links?.some((link: any) =>
        (link.title || "").toLowerCase().includes(trimmed)
      );
      return inTitle || inLinks;
    });
  }, [query]);

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Sfoglia per argomento
          </h1>
          <p className="text-slate-600 mb-5 text-sm sm:text-base">
            Trova rapidamente le informazioni di cui hai bisogno su Coldsharing:
            commissioni, prenotazioni, abbonamenti, account e altro.
          </p>

          {/* Search bar */}
          <div className="w-full sm:w-2/3 lg:w-1/2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca tra le guide (es. prenotazioni, abbonamenti, fatture...)"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </header>

        {/* Grid delle card */}
        <main>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArguments.map((item) => (
              <ArgumentCard
                key={item.title}
                title={item.title}
                icon={item.icon}
                links={item.links}
              />
            ))}
          </div>

          {filteredArguments.length === 0 && (
            <p className="mt-6 text-slate-500 text-sm">
              Nessun risultato trovato per <b>{query}</b>. Prova a usare termini
              diversi.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};
