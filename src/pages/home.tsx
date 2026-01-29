import { useMemo, useState } from "react";
import { listArgumentsFornitore, listArgumentsCliente } from "../constant";
import { ArgumentCard } from "../shared";

type Profile = "fornitore" | "cliente";

export const Home = () => {
  const [profile, setProfile] = useState<Profile>("fornitore");
  const [query, setQuery] = useState("");

  const activeList = profile === "cliente" ? listArgumentsCliente : listArgumentsFornitore;

  const filteredArguments = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return activeList;

    return activeList.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(trimmed);
      const inLinks = item.links?.some((link: any) =>
        (link.title || "").toLowerCase().includes(trimmed)
      );
      return inTitle || inLinks;
    });
  }, [query, activeList]);

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* HERO (sempre visibile) */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Centro Assistenza Cold Sharing
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
            Trova rapidamente informazioni e supporto sull’utilizzo della piattaforma
            Cold Sharing. Seleziona il tuo profilo per accedere alla sezione più adatta.
          </p>
        </header>

        {/* IL NOSTRO HELP CENTER (sempre visibile) */}
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
                  <p className="font-semibold text-slate-900">Assistenza guidata</p>
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
                  <p className="font-semibold text-slate-900">Tutto in un unico posto</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Informazioni su account, prenotazioni, commissioni e molto altro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOGGLE (sotto il riquadro verde / quindi qui) */}
        <div className="flex gap-2 mb-10">
          <button
            type="button"
            onClick={() => {
              setProfile("cliente");
              setQuery(""); // opzionale: reset ricerca quando cambi profilo
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              profile === "cliente"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200"
            }`}
          >
            Cliente
          </button>

          <button
            type="button"
            onClick={() => {
              setProfile("fornitore");
              setQuery("");
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              profile === "fornitore"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200"
            }`}
          >
            Fornitore
          </button>
        </div>

        {/* GUIDE (dinamiche) */}
        <section
          id={profile === "cliente" ? "guide-clienti" : "guide-fornitori"}
          className="scroll-mt-24"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {profile === "cliente" ? "Guide per Clienti" : "Guide per Fornitori"}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              {profile === "cliente"
                ? "Trova rapidamente le informazioni su prenotazioni, pagamenti, accesso, account e supporto."
                : "Trova rapidamente le informazioni di cui hai bisogno su Cold Sharing: commissioni, prenotazioni, abbonamenti, account e altro."}
            </p>
          </div>

          {/* Search bar (rimane) */}
          <div className="w-full sm:w-2/3 lg:w-1/2 mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                profile === "cliente"
                  ? "Cerca tra le guide (es. prenotazioni, pagamenti, accesso...)"
                  : "Cerca tra le guide (es. prenotazioni, abbonamenti, fatture...)"
              }
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
