
import type { FaqHelp, FaqItem } from "../../../../shared";
import { HelpDeskLink } from "../../../../shared";

export const registrazioneCliente = {
  title: "Registrazione",
  description: "Domande frequenti relative alla registrazione sulla piattaforma.",
  items: [
    {
      id: "a1",
      question:
        "Durante la registrazione mi viene chiesto di scegliere un ruolo commerciale. Cosa significa?",
      answer: (
        <>
          <div className="pb-2">Al momento della registrazione puoi selezionare uno dei seguenti ruoli commerciali:</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Cliente</strong>: utente che desidera inviare richieste di prenotazione per stoccare i propri prodotti in spazi disponibili.
            </li>
            <li>
              <strong>Fornitore</strong>: utente che mette a disposizione il proprio locale refrigerato per condividerlo con altri utenti.
            </li>
            <li>
              <strong>Entrambi</strong>: utente che vuole sia richiedere spazio per i propri prodotti, sia offrire il proprio locale ad altri.
            </li>
          </ul>
          <div className="pt-2">
            <strong>Attenzione</strong>: per poter successivamente modificare la scelta sarà necessario aprire un ticket al servizio clienti.
          </div>
        </>
      ),
    },
    {
      id: "a2",
      question:
        "A.2) Durante la registrazione mi viene chiesto di allegare un documento. Cosa significa?",
      answer: (
        <>
          Solo se hai selezionato <strong>Fornitore</strong> o <strong>Entrambi</strong> dovrai scaricare e caricare copia del contratto firmato.
          Riceverai una notifica, alla mail con cui ti sei registrato, di accettazione o rifiuto della richiesta di registrazione dalla piattaforma entro le successive <strong>72 ore</strong>, durante le quali il tuo profilo risulterà attivo ma con restrizioni.
          <div className="pt-2">Per ricevere assistenza, clicca su AIUTO ed apri un ticket per contattare il nostro servizio clienti.</div>
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
