
import type { FaqHelp, FaqItem } from "../../../../shared";
import { HelpDeskLink } from "../../../../shared";

export const accessoCliente = {
  title: "Accesso",
  description: "Problemi di accesso, recupero credenziali e gestione ruolo.",
  items: [
    {
      id: "b1",
      question: "Ho dimenticato la Mail di registrazione. Cosa devo fare?",
      answer: (
        <>
          Per recuperare la mail di registrazione clicca su <strong>"Email dimenticata?"</strong> e inserisci la PIVA della tua azienda.
          Se non viene trovata nessuna mail associata, procedi con la registrazione.
        </>
      ),
    },
    {
      id: "b2",
      question: "Ho dimenticato la Password. Cosa devo fare?",
      answer: (
        <>
          Per effettuare il reset della password clicca su <strong>"Password dimenticata?"</strong> e inserisci la mail di registrazione.
          Ti verrà inviata una mail per procedere con il reset.
        </>
      ),
    },
    {
      id: "b3",
      question: "Voglio modificare il ruolo commerciale. Cosa devo fare?",
      answer: (
        <>
          Per poter modificare un ruolo commerciale è necessario aprire un ticket verso l’assistenza che prenderà in carico la tua richiesta.
          Valorizza tutti i campi e descrivi in maniera dettagliata la tua richiesta.
        </>
      ),
    },
    {
      id: "b4",
      question:
        "Ho inserito le credenziali ma il mio profilo è attivo ma con restrizioni. Cosa devo fare?",
      answer: (
        <>
          Se dopo l’accesso alla piattaforma compare il messaggio <strong>“Profilo attivo con restrizioni. Serve supporto? Contattaci.”</strong>, significa che:
          <ul className="list-disc pl-6 space-y-1 pt-2">
            <li>la tua richiesta di registrazione è ancora in fase di validazione,</li>
            <li>oppure è stata rifiutata,</li>
            <li>oppure il tuo profilo è stato bloccato per comportamenti non conformi al codice di condotta.</li>
          </ul>
          <div className="pt-2">Per ricevere assistenza apri un ticket per contattare il nostro servizio clienti.</div>
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
