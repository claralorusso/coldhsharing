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
        {/* HERO */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Centro Assistenza ColdSharing
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            Trova rapidamente informazioni e supporto sull’utilizzo della piattaforma
            ColdSharing. Seleziona il tuo profilo per accedere alla sezione più adatta.
          </p>
        </header>

        {/* IL NOSTRO HELP CENTER */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Il nostro Help Center
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Assistenza guidata
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    Guide e procedure spiegate passo passo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Supporto sempre accessibile
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    Trova le risposte quando ne hai bisogno.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Tutto in un unico posto
                  </p>
                  <p className="text-slate-600 text-sm mt-1">
                    Informazioni su account, prenotazioni, commissioni e molto altro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCELTA PROFILO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Che tipo di assistenza cerchi?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Seleziona il profilo che ti rappresenta per accedere alle informazioni più utili.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* CLIENTE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <p className="text-slate-900 font-semibold text-lg mb-2">
                👤 Sono un Cliente
              </p>
              <p className="text-slate-600 text-sm mb-5">
                Prenotazioni, registrazione, utilizzo della piattaforma e domande frequenti.
              </p>

              <a
                href="https://cellefrigo.net/faq?category=8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90"
              >
                Vai alle FAQ Clienti
              </a>
            </div>

            {/* FORNITORE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <p className="text-slate-900 font-semibold text-lg mb-2">
                🏭 Sono un Fornitore
              </p>
              <p className="text-slate-600 text-sm mb-5">
                Pubblicazione spazi, gestione richieste, disponibilità, condizioni e pagamenti.
              </p>

              <a
                href="#guide-fornitori"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-50"
              >
                Vai alle Guide Fornitori
              </a>
            </div>
          </div>

          <p className="text-slate-500 text-xs mt-4">
            Non sei sicuro? Puoi consultare entrambe le sezioni.
          </p>
        </section>

        {/* GUIDE FORNITORI (contenuto attuale) */}
        <section id="guide-fornitori" className="scroll-mt-24">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Guide per Fornitori
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Trova rapidamente le informazioni di cui hai bisogno su ColdSharing:
              commissioni, prenotazioni, abbonamenti, account e altro.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full sm:w-2/3 lg:w-1/2 mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca tra le guide (es. prenotazioni, abbonamenti, fatture...)"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Grid delle card */}
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
              Nessun risultato trovato per <b>{query}</b>. Prova a usare termini diversi.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};
