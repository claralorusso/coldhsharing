
import type { FaqHelp, FaqItem } from "../../../../shared";
import { HelpDeskLink } from "../../../../shared";

export const gestionePrenotazioneCliente = {
  title: "Gestione della prenotazione",
  description:
    "Informazioni su modalità di condivisione, stoccaggio, richieste di prenotazione e servizi extra.",
  items: [
    {
      id: "c1",
      question:
        "Qual è la differenza tra modalità di condivisione totale e parziale?",
      answer: (
        <>
          Le modalità di condivisione vengono definite dal Fornitore in fase di configurazione del locale refrigerato e sono:
          <ul className="list-disc pl-6 space-y-1 pt-2">
            <li>
              <strong>Totale</strong>: il locale viene condiviso totalmente con un solo Cliente. All'interno del locale verrà stoccato solo il suo prodotto.
            </li>
            <li>
              <strong>Parziale</strong>: il locale può essere condiviso parzialmente con più Clienti. All'interno del locale possono essere stoccati prodotti di più Clienti.
            </li>
          </ul>
          <div className="pt-2">
            Per consultare la modalità di condivisione del locale prenotato potrai visualizzare il riepilogo della prenotazione in <strong>“Le mie prenotazioni”</strong> se la condivisione non è iniziata, o in <strong>“Storico prenotazioni”</strong> se è stata avviata.
          </div>
        </>
      ),
    },
    {
      id: "c2",
      question:
        "Qual è la differenza tra modalità di stoccaggio a pallet, bins (o cassette), entrambi, a unità?",
      answer: (
        <>
          Il Fornitore può specificare, per ciascun locale, la modalità di stoccaggio prevista e le dimensioni richieste. Le opzioni disponibili sono:
          <ul className="list-disc pl-6 space-y-1 pt-2">
            <li><strong>Pallet</strong>: al momento della consegna, la merce dovrà essere disposta su pallet per poter essere stoccata nel locale.</li>
            <li><strong>Bins</strong>: al momento della consegna, la merce dovrà essere disposta all’interno di bins per essere stoccata correttamente.</li>
            <li><strong>Entrambi</strong>: la merce potrà essere stoccata su pallet oppure in bins, a seconda delle esigenze.</li>
            <li><strong>A unità</strong>: la merce non dovrà essere sistemata su pallet o in bins, ma verrà conservata singolarmente (es. fiori, formaggi, ecc.).</li>
          </ul>
          <div className="pt-2">
            <strong>Attenzione</strong>: assicurati di rispettare le modalità e le dimensioni di stoccaggio indicate dal Fornitore. In caso di dubbi o esigenze particolari, ti consigliamo di contattarlo direttamente.
          </div>
          <div className="pt-2">
            Puoi consultare la modalità di stoccaggio relativa al locale prenotato nel riepilogo della prenotazione, disponibile nella sezione <strong>“Le mie prenotazioni”</strong> (se la condivisione non è ancora iniziata) o in <strong>“Storico prenotazioni”</strong> (se la condivisione è già attiva).
          </div>
        </>
      ),
    },
    {
      id: "c3",
      question:
        "Differenza tra 'Conferma immediata' e 'Richiesta di prenotazione'",
      answer: (
        <>
          La richiesta di prenotazione è una funzionalità che offre a chi gestisce locali refrigerati il pieno controllo sulle richieste di prenotazione.
          <div className="pt-2">
            A differenza delle prenotazioni a <strong>Conferma immediata</strong>, che permettono di prenotare il locale refrigerato direttamente, le <strong>richieste di prenotazione</strong> prevedono l’invio da parte del potenziale Cliente di una richiesta, che può essere accettata o rifiutata dal Fornitore entro <strong>48 ore</strong>.
          </div>
          <div className="pt-2">
            Il Cliente riceverà sempre una notifica via email sull’esito della richiesta e potrà consultare in qualsiasi momento lo stato aggiornato nella sezione <strong>“Le mie prenotazioni”</strong>.
          </div>
        </>
      ),
    },
    {
      id: "c4",
      question: "Cosa sono i Costi di movimentazione e i Costi di prelievo?",
      answer: (
        <>
          In fase di prenotazione può capitare di poter selezionare, solo se previsti dal Fornitore, i servizi di:
          <ul className="list-disc pl-6 space-y-1 pt-2">
            <li>
              <strong>Movimentazione</strong>: identifica il prezzo richiesto dal Fornitore per movimentare la tua merce, su una delle tipologie di stoccaggio previste, all'interno del locale refrigerato. Il costo prevede sia movimentazione in entrata (es: Pallet-in) sia movimentazione in uscita (es: Pallet-out). Contatta il Fornitore utilizzando la funzione di messaggistica per ulteriori informazioni.
            </li>
            <li>
              <strong>Prelievo</strong>: identifica il prezzo richiesto dal Fornitore per prelevare la tua merce da un lotto già stoccato in precedenza. Contatta il Fornitore utilizzando la funzione di messaggistica per ulteriori informazioni.
            </li>
          </ul>
          <div className="pt-2">
            <strong>Attenzione</strong>: se usufruisci di tali servizi senza averli prenotati in fase di prenotazione, o richiedi un numero di movimentazioni/prelievi superiore a quello previsto, il Fornitore potrà applicare un costo extra rispetto a quanto già pagato.
          </div>
          <div className="pt-2">
            Per consultare i servizi acquistati, visualizza il riepilogo della prenotazione nella sezione <strong>“Le mie prenotazioni”</strong> (se la condivisione non è ancora iniziata) o nella sezione <strong>“Storico prenotazioni”</strong> (se la condivisione è già avviata).
          </div>
        </>
      ),
    },
    {
      id: "c5",
      question: "Come si può richiedere un servizio extra al Fornitore?",
      answer: (
        <>
          Se vuoi richiedere un servizio extra, come ad esempio un check-in anticipato, l'utilizzo di macchinari presenti in struttura, un numero maggiore di movimentazioni e prelievi, puoi contattare direttamente il Fornitore prima dell'arrivo oppure riportarlo in fase di prenotazione.
          <div className="pt-2">Contattalo utilizzando la funzione di messaggistica.</div>
        </>
      ),
    },
    {
      id: "c6",
      question:
        "Come si possono avere più informazioni sui servizi del Fornitore?",
      answer: (
        <>
          Ricerca il fornitore attraverso la pagina <strong>"Fornitori"</strong> e contattalo utilizzando la funzione di messaggistica.
          Potrai consultare la risposta tramite la notifica che ti arriva per e-mail o accedendo all'interno del tuo profilo.
        </>
      ),
    },
    {
      id: "c7",
      question: "All'interno del locale ci sono le scaffalature?",
      answer: (
        <>
          Tale informazione è consultabile nella card del Locale. Nel caso fossero presenti consulta le <strong>"Informazioni aggiuntive"</strong> per visualizzare l'altezza e il peso massimo supportato.
        </>
      ),
    },
    {
      id: "c8",
      question:
        "Posso prenotare più locali refrigerati dello stesso fornitore nello stesso momento?",
      answer: (
        <>
          Sì. Il cliente può selezionare e prenotare più locali refrigerati appartenenti allo stesso fornitore nello stesso momento.
          <div className="pt-2">
            Tuttavia, ogni locale refrigerato viene sempre gestito come una prenotazione distinta, anche se la selezione avviene contemporaneamente. Questo significa che:
          </div>
          <ul className="list-disc pl-6 space-y-1 pt-2">
            <li>ogni prenotazione segue un flusso indipendente;</li>
            <li>se il fornitore ha attiva la richiesta di approvazione della prenotazione, potrà accettare una prenotazione e rifiutarne un’altra;</li>
            <li>l’accettazione di una prenotazione non implica automaticamente l’accettazione delle altre.</li>
          </ul>
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
