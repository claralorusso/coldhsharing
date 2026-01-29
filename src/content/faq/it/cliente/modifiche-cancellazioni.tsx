
import type { FaqHelp, FaqItem } from "../../../../shared";
import { HelpDeskLink } from "../../../../shared";

export const modificheCancellazioniCliente = {
  title: "Modifiche e cancellazioni prenotazioni",
  description:
    "Risposte rapide su modifiche, annullamenti e casi particolari legati alle prenotazioni.",
  items: [
    {
      id: "d2",
      question: "D.2) Posso modificare una prenotazione o una richiesta di prenotazione?",
      answer: (
        <>
          Non è possibile modificare una prenotazione o una richiesta inviata. Se
          desideri estendere il periodo di condivisione, effettua una nuova
          prenotazione.
        </>
      ),
    },
    {
      id: "d3",
      question:
        "D.3) Quando posso cancellare una prenotazione o una richiesta di prenotazione?",
      answer: (
        <>
          <div className="pb-2">
            Con <strong>Conferma Immediata</strong>, puoi cancellare solo entro il
            periodo di cancellazione gratuita.
          </div>
          <div>
            Con <strong>Richiesta di prenotazione</strong>, puoi annullarla prima
            che venga accettata dal Fornitore. Se accettata, valgono le regole di
            cancellazione standard.
          </div>
        </>
      ),
    },
    {
      id: "d4",
      question: "D.4) Cosa succede se il Fornitore cancella una prenotazione?",
      answer: (
        <>
          <div className="pb-2">
            Con <strong>Conferma Immediata</strong>, il Fornitore non può cancellare
            la prenotazione.
          </div>
          <div>
            Con <strong>Richiesta di prenotazione</strong>, il Fornitore può
            rifiutare entro 48 ore dall&apos;invio. In caso di rifiuto, non ti verrà
            addebitato alcun costo.
          </div>
        </>
      ),
    },
    {
      id: "d5",
      question:
        "D.5) Il Fornitore vuole annullare la mia prenotazione. Cosa devo fare?",
      answer: (
        <>
          La prenotazione è un accordo legale tra te e il Fornitore. È responsabilità
          del Fornitore informarti tempestivamente, rimborsarti e rispondere di
          eventuali danni alla merce.
        </>
      ),
    },
    {
      id: "d6",
      question:
        "D.6) Il pagamento non è andato a buon fine dopo il periodo di cancellazione gratuita. Cosa succede?",
      answer: (
        <>
          Se il pagamento fallisce dopo il termine per la cancellazione gratuita, la
          prenotazione viene automaticamente annullata. Non ti sarà addebitato alcun
          costo. Riceverai una notifica via e-mail e potrai effettuare una nuova
          prenotazione.
        </>
      ),
    },
    {
      id: "d1",
      question:
        "D.1) Come posso sapere se la mia prenotazione o richiesta è stata accettata o cancellata?",
      answer: (
        <>
          <div className="pb-2">
            Per le prenotazioni con <strong>Conferma Immediata</strong>, il Fornitore
            non può cancellare la prenotazione.
          </div>
          <div className="pb-2">
            Per le <strong>Richieste di prenotazione</strong>, il Fornitore può
            rifiutare entro 48 ore dall&apos;invio.
          </div>
          <div>
            In entrambi i casi riceverai una notifica via e-mail e potrai verificare
            l&apos;esito nella sezione <strong>Le mie prenotazioni</strong>.
          </div>
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
