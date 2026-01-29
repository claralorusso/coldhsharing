
import type { FaqHelp, FaqItem } from "../../../../shared";
import { HelpDeskLink } from "../../../../shared";

export const informazioniPrenotazioneCliente = {
  title: "Informazioni sulla prenotazione",
  description:
    "Dettagli su dove trovare la prenotazione, pagamenti, addebiti e informazioni utili.",
  items: [
    {
      id: "e1",
      question: "E.1) Dove trovo la mia prenotazione?",
      answer: (
        <>
          Quando effettui una prenotazione, puoi consultarla nella sezione <strong>\"Le mie prenotazioni\"</strong> se la condivisione non è ancora iniziata, oppure nella sezione <strong>\"Storico prenotazioni\"</strong> se la condivisione è iniziata o già terminata.
        </>
      ),
    },
    {
      id: "e2",
      question: "E.2) Quando viene addebitato il pagamento?",
      answer: (
        <>
          Dipende dal tipo di prenotazione e dalla presenza o meno del periodo di cancellazione gratuita. La data di addebito è sempre visibile nella card della prenotazione.
          <div className="pt-2 font-semibold">Ecco come funziona:</div>
          <ol className="list-decimal pl-6 space-y-2 pt-2">
            <li>
              Se il Fornitore non ha ancora accettato o ha rifiutato una richiesta di prenotazione:
              <ul className="list-disc pl-6 pt-1">
                <li>Non ti verrà addebitato alcun costo.</li>
              </ul>
            </li>
            <li>
              Se il Fornitore ha accettato una richiesta di prenotazione e <strong>non</strong> sei nel periodo di cancellazione gratuita:
              <ul className="list-disc pl-6 pt-1">
                <li><strong>Data addebito</strong>: corrisponde alla data di accettazione della richiesta da parte del Fornitore.</li>
                <li><strong>Totale pagato</strong>: viene mostrato l’importo pagato, con dettaglio delle voci di costo (IVA esclusa e IVA inclusa).</li>
              </ul>
            </li>
            <li>
              Se il Fornitore ha accettato una richiesta di prenotazione e sei nel periodo di cancellazione gratuita:
              <ul className="list-disc pl-6 pt-1">
                <li><strong>Data addebito</strong>: viene indicata la data futura in cui effettuerai il pagamento.</li>
                <li><strong>Totale pagato</strong>: viene mostrato l’importo che pagherai, ancora non addebitato.</li>
              </ul>
            </li>
            <li>
              Se il Fornitore non gestisce le richieste di prenotazione (prenotazione automatica) e <strong>non</strong> sei nel periodo di cancellazione gratuita:
              <ul className="list-disc pl-6 pt-1">
                <li><strong>Data addebito</strong>: corrisponde alla data in cui è avvenuta la prenotazione.</li>
                <li><strong>Totale pagato</strong>: viene mostrato l’importo pagato, con dettaglio delle voci di costo (IVA esclusa e IVA inclusa).</li>
              </ul>
            </li>
            <li>
              Se il Fornitore non gestisce le richieste di prenotazione e sei nel periodo di cancellazione gratuita:
              <ul className="list-disc pl-6 pt-1">
                <li><strong>Data addebito</strong>: viene indicata la data futura in cui effettuerai il pagamento.</li>
                <li><strong>Totale pagato</strong>: viene mostrato l’importo che pagherai, ancora non addebitato.</li>
              </ul>
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "e3",
      question: "E.3) Cosa comprende il “Totale pagato”?",
      answer: (
        <>
          L’importo totale comprende tutte le voci di costo, con dettaglio di spesa IVA esclusa e IVA inclusa, se non sei nel periodo di cancellazione gratuita.
        </>
      ),
    },
    {
      id: "e4",
      question: "E.4) Ho ricevuto un addebito errato. Cosa devo fare?",
      answer: (
        <>
          Se hai ricevuto un addebito errato da Cold Sharing.it puoi aprire un ticket inserendo nell&apos;oggetto il testo <strong>"Addebito errato"</strong>.
          Probabilmente ti sarà richiesto di inviare una copia dell&apos;estratto conto bancario che riporti l&apos;addebito e di specificare il numero di conferma della tua prenotazione.
        </>
      ),
    },
    {
      id: "e5",
      question: "E.5) Come so se ho prenotato un locale condiviso?",
      answer: (
        <>
          La modalità di utilizzo è indicata nel campo <strong>"Modalità di condivisione"</strong>:
          <ul className="list-disc pl-6 space-y-1 pt-2">
            <li><strong>TOTALE</strong> = uso esclusivo</li>
            <li><strong>PARZIALE</strong> = condiviso con altri utenti, con modalità di stoccaggio specificata dal Fornitore.</li>
          </ul>
        </>
      ),
    },
    {
      id: "e6",
      question: "E.6) Quali altre informazioni posso vedere nella card di riepilogo?",
      answer: (
        <>
          Altre informazioni riportate nella prenotazione:
          <ul className="list-disc pl-6 space-y-1 pt-2">
            <li><strong>Data prenotazione</strong>: indica il giorno in cui hai effettuato la prenotazione.</li>
            <li><strong>Ubicazione</strong>: l’indirizzo presso cui dovrai recarti per stoccare il prodotto.</li>
            <li><strong>Orario di arrivo previsto</strong>: fascia oraria stimata per il check-in del prodotto.</li>
            <li><strong>Penalità</strong>: se previste, saranno indicate.</li>
          </ul>
          <div className="pt-2">
            Le prenotazioni non possono essere cancellate direttamente dalla piattaforma. In caso di necessità, dovrai contattare il Fornitore.
          </div>
        </>
      ),
    },
    {
      id: "e7",
      question: "E.7) Come si può richiedere una fattura?",
      answer: (
        <>Terminato il periodo di condivisione il Cliente può richiedere solo al Fornitore la fattura.</>
      ),
    },
    {
      id: "e8",
      question: "E.8) All'arrivo dovrò pagare dei costi extra?",
      answer: (
        <>
          No, all&apos;arrivo non dovrai pagare nulla.
          Se il Fornitore richiede il pagamento di una somma che a te non risulta, puoi aprire un ticket inserendo nell&apos;oggetto il testo <strong>"Pagamento costi extra - Arrivo"</strong>.
          Probabilmente ti sarà richiesto di specificare il numero di conferma della tua prenotazione.
        </>
      ),
    },
    {
      id: "e9",
      question: "E.9) Terminata la condivisione il Fornitore mi può addebitare costi extra?",
      answer: (
        <>
          Sì, il Fornitore ti potrà addebitare altri costi (es: costi di prelievo, costi di movimentazione, ecc.) su servizi non richiesti in fase di prenotazione.
          Se il Fornitore richiede il pagamento di una somma che a te non risulta, puoi aprire un ticket inserendo nell&apos;oggetto il testo <strong>"Pagamento costi extra - Uscita"</strong>.
          Probabilmente ti sarà richiesto di specificare il numero di conferma della tua prenotazione e l&apos;invio della fattura.
        </>
      ),
    },
    {
      id: "e10",
      question: "E.10) Come modificare la modalità di pagamento?",
      answer: (
        <>
          Modificare la modalità di pagamento è possibile solo se è in corso il periodo di cancellazione gratuita.
          Per farlo accedi in <strong>"Le mie prenotazioni"</strong>, cerca la tua prenotazione e segui le istruzioni.
        </>
      ),
    },
    {
      id: "e11",
      question: "E.11) Come modificare l'orario di arrivo?",
      answer: (
        <>
          L’orario di arrivo non può essere modificato direttamente dalla piattaforma.
          Ti consigliamo di contattare il Fornitore tramite messaggio per concordare un eventuale nuovo orario.
        </>
      ),
    },
  ] as FaqItem[],
  help: {
    title: "Serve assistenza?",
    severity: "info",
    body: (
      <>
        Se nessuna delle FAQ risponde alla tua domanda, puoi aprire un ticket su{" "}
        <HelpDeskLink href="https://coldsharing.zohodesk.eu/portal/it/newticket">
          HELP DESK
        </HelpDeskLink>
        .
      </>
    ),
  } as FaqHelp,
};
