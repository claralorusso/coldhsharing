import { Argument } from "./models";
import { Prenotazioni } from "./pages";
import { Abbonamenti } from "./pages/abbonamenti/abbonamenti";
import { Account } from "./pages/account/account";
import { Condizioni } from "./pages/condizioni/condizioni";
import { Fatturazioni } from "./pages/fatturazione/fatturazione";
import { Premi } from "./pages/premi/premi";
import { PrimiPassi } from "./pages/primi-passi/primi-passi";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CookieIcon from "@mui/icons-material/Cookie";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Cookies } from "./pages/cookies/cookies";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { RegistrazioneCliente } from "./pages/cliente/registrazione";
import { AccessoCliente } from "./pages/cliente/accesso";
import { GestionePrenotazioneCliente } from "./pages/cliente/gestione-prenotazione";
import { ModificheCancellazioniCliente } from "./pages/cliente/modifiche-cancellazioni";
import { InformazioniPrenotazioneCliente } from "./pages/cliente/informazioni-prenotazione";
import { SupportoCliente } from "./pages/cliente/supporto";
export const listArgumentsFornitore: Argument[] = [
  {
    title: "Commissioni, fatturazione e tasse",
    icon: <ReceiptIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Procedura per attivare sistema di fatturazione",
        path: "/invoice",
        section: "system",
        element: <Fatturazioni />,
      },
      {
        title: "Come consultare la fattura",
        path: "/invoice",
        section: "view",
        element: <Fatturazioni />,
      },
      {
        title: "Che cos’è e come viene calcolata la commissione",
        path: "/invoice",
        section: "commission",
        element: <Fatturazioni />,
      },
      {
        title:
          "Che cos’è e come viene calcolata la commissione se il Cliente è un esportatore abituale",
        path: "/invoice",
        section: "export",
        element: <Fatturazioni />,
      },
      {
        title: "Correzioni alle fatture",
        path: "/invoice",
        section: "corrections",
        element: <Fatturazioni />,
      },
    ],
  },
  {
    title: "Prenotazioni",
    icon: <BookmarkIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Gestire le prenotazioni",
        path: "/booking",
        section: "manage-booking",
        element: <Prenotazioni />,
      },
      {
        title: "Impostare le restrizioni sulle prenotazioni",
        path: "/booking",
        section: "manage-limit",
        element: <Prenotazioni />,
      },
      {
        title: "Gestire le modifiche e le cancellazioni",
        path: "/booking",
        section: "manage-edit",
        element: <Prenotazioni />,
      },
      {
        title: "Comunicare con i Clienti",
        section: "manage-customers",
        path: "/booking",
        element: <Prenotazioni />,
      },
    ],
  },
  {
    title: "Primi passi in Cold Sharing",
    icon: <KeyboardDoubleArrowUpIcon style={{ color: "white" }} />,

    links: [
      {
        title: "Cosa fare per registrarti",
        path: "/first-action",
        section: "manage-sign",
        element: <PrimiPassi />,
      },
      {
        title: "Come registrarti su stripe",
        path: "/first-action",
        section: "manage-stripe",
        element: <PrimiPassi />,
      },
      {
        title: "Come registrare la tua ubicazione",
        path: "/first-action",
        section: "manage-location",
        element: <PrimiPassi />,
      },
      {
        title: "Come registrare il tuo locale",
        path: "/first-action",
        section: "manage-local",
        element: <PrimiPassi />,
      },
      {
        title: "Sezione ubicazione",
        path: "/first-action",
        section: "location-section",
        element: <PrimiPassi />,
      },
      {
        title: "Sezione locale",
        path: "/first-action",
        section: "local-section",
        element: <PrimiPassi />,
      },
    ],
  },
  {
    title: "Condizioni e pagamenti dei clienti",
    icon: <CreditCardIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Come impostare o modificare le condizioni dell’Ubicazione",
        path: "/customers-condition",
        section: "location",
        element: <Condizioni />,
      },
      {
        title: "Come impostare o modificare le condizioni del Locale",
        path: "/customers-condition",
        section: "local",
        element: <Condizioni />,
      },
      {
        title: "Fornire fatture ai Clienti",
        path: "/customers-condition",
        section: "invoice",
        element: <Condizioni />,
      },
      {
        title: "Cosa fare se ricevi un danno",
        path: "/customers-condition",
        section: "harm",
        element: <Condizioni />,
      },
    ],
  },
  {
    title: "Abbonamenti",
    icon: <SubscriptionsIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Abbonamento Basic",
        path: "/subscription",
        section: "basic",
        element: <Abbonamenti />,
      },
      {
        title: "Abbonamento Standard",
        path: "/subscription",
        section: "standard",
        element: <Abbonamenti />,
      },
      {
        title: "Abbonamento Premium",
        path: "/subscription",
        section: "premium",
        element: <Abbonamenti />,
      },
      {
        title: "Annullare rinnovo automatico",
        path: "/subscription",
        section: "delete-sub",
        element: <Abbonamenti />,
      },
    ],
  },
  {
    title: "Account e accesso",
    icon: <AccountCircleIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Come modificare o reimpostare le tue credenziali di accesso",
        path: "/account",
        section: "credential",
        element: <Account />,
      },
      {
        title: "Codice di condotta",
        path: "/account",
        section: "norm-code",
        element: <Account />,
      },
    ],
  },
  {
    title: "Premi",
    icon: <EmojiEventsIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Che cosa è il premio Fresh Space Award?",
        path: "/reward",
        section: "fresh-space",
        element: <Premi />,
      },
      {
        title: "Che cosa è il premio Premier Cold Solutions Award?",
        path: "/reward",
        section: "premier",
        element: <Premi />,
      },
    ],
  },
  {
    title: "Informativa sui cookie di Cold Sharing",
    icon: <CookieIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Definizioni, caratteristiche e applicazione della normativa",
        path: "/cookies",
        section: "main-info",
        element: <Cookies />,
      },
      {
        title:
          "Tipologie di cookie utilizzate dal Sito e possibilità di (de-)selezione",
        path: "/cookies",
        section: "cookie-types",
        element: <Cookies />,
      },
      {
        title: "Come visualizzare e modificare i cookie ",
        path: "/cookies",
        section: "manage-cookie",
        element: <Cookies />,
      },
      {
        title:
          "Per quanto tempo i cookie rimarranno sul mio computer o dispositivo mobile?",
        path: "/cookies",
        section: "times",
        element: <Cookies />,
      },
    ],
  },
];

export const listArgumentsCliente: Argument[] = [
  {
    title: "Registrazione",
    icon: <PersonAddIcon style={{ color: "white" }} />,
    links: [
      {
        title:
          "Durante la registrazione mi viene chiesto di scegliere un ruolo commerciale. Cosa significa?",
        path: "/cliente/registrazione",
        section: "a1",
        element: <RegistrazioneCliente />,
      },
      {
        title:
          "Durante la registrazione mi viene chiesto di allegare un documento. Cosa significa?",
        path: "/cliente/registrazione",
        section: "a2",
        element: <RegistrazioneCliente />,
      },
    ],
  },
  {
    title: "Accesso",
    icon: <LoginIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Ho dimenticato la Mail di registrazione. Cosa devo fare?",
        path: "/cliente/accesso",
        section: "b1",
        element: <AccessoCliente />,
      },
      {
        title: "Ho dimenticato la Password. Cosa devo fare?",
        path: "/cliente/accesso",
        section: "b2",
        element: <AccessoCliente />,
      },
      {
        title: "Voglio modificare il ruolo commerciale. Cosa devo fare?",
        path: "/cliente/accesso",
        section: "b3",
        element: <AccessoCliente />,
      },
      {
        title:
          "Ho inserito le credenziali ma il mio profilo è attivo ma con restrizioni. Cosa devo fare?",
        path: "/cliente/accesso",
        section: "b4",
        element: <AccessoCliente />,
      },
    ],
  },
  {
    title: "Gestione della prenotazione",
    icon: <EventAvailableIcon style={{ color: "white" }} />,
    links: [
      {
        title:
          "Qual è la differenza tra modalità di condivisione totale e parziale?",
        path: "/cliente/gestione-prenotazione",
        section: "c1",
        element: <GestionePrenotazioneCliente />,
      },
      {
        title:
          "Qual è la differenza tra modalità di stoccaggio a pallet, bins (o cassette), entrambi, a unità?",
        path: "/cliente/gestione-prenotazione",
        section: "c2",
        element: <GestionePrenotazioneCliente />,
      },
      {
        title: "Differenza tra 'Conferma immediata' e 'Richiesta di prenotazione'",
        path: "/cliente/gestione-prenotazione",
        section: "c3",
        element: <GestionePrenotazioneCliente />,
      },
      {
        title: "Cosa sono i Costi di movimentazione e i Costi di prelievo?",
        path: "/cliente/gestione-prenotazione",
        section: "c4",
        element: <GestionePrenotazioneCliente />,
      },
      {
        title: "Come si può richiedere un servizio extra al Fornitore?",
        path: "/cliente/gestione-prenotazione",
        section: "c5",
        element: <GestionePrenotazioneCliente />,
      },
      {
        title: "Come si possono avere più informazioni sui servizi del Fornitore?",
        path: "/cliente/gestione-prenotazione",
        section: "c6",
        element: <GestionePrenotazioneCliente />,
      },
      {
        title: "All'interno del locale ci sono le scaffalature?",
        path: "/cliente/gestione-prenotazione",
        section: "c7",
        element: <GestionePrenotazioneCliente />,
      },
      {
        title:
          "Posso prenotare più locali refrigerati dello stesso fornitore nello stesso momento?",
        path: "/cliente/gestione-prenotazione",
        section: "c8",
        element: <GestionePrenotazioneCliente />,
      },
    ],
  },
  {
    title: "Modifiche e cancellazioni prenotazioni",
    icon: <EditCalendarIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Posso modificare una prenotazione o una richiesta di prenotazione?",
        path: "/cliente/modifiche-cancellazioni",
        section: "d2",
        element: <ModificheCancellazioniCliente />,
      },
      {
        title:
          "Quando posso cancellare una prenotazione o una richiesta di prenotazione?",
        path: "/cliente/modifiche-cancellazioni",
        section: "d3",
        element: <ModificheCancellazioniCliente />,
      },
      {
        title: "Cosa succede se il Fornitore cancella una prenotazione?",
        path: "/cliente/modifiche-cancellazioni",
        section: "d4",
        element: <ModificheCancellazioniCliente />,
      },
      {
        title: "Il Fornitore vuole annullare la mia prenotazione. Cosa devo fare?",
        path: "/cliente/modifiche-cancellazioni",
        section: "d5",
        element: <ModificheCancellazioniCliente />,
      },
      {
        title:
          "Il pagamento non è andato a buon fine dopo il periodo di cancellazione gratuita. Cosa succede?",
        path: "/cliente/modifiche-cancellazioni",
        section: "d6",
        element: <ModificheCancellazioniCliente />,
      },
      {
        title:
          "Come posso sapere se la mia prenotazione o richiesta è stata accettata o cancellata?",
        path: "/cliente/modifiche-cancellazioni",
        section: "d1",
        element: <ModificheCancellazioniCliente />,
      },
    ],
  },
  {
    title: "Informazioni sulla prenotazione",
    icon: <InfoIcon style={{ color: "white" }} />,
    links: [
      {
        title: "Dove trovo la mia prenotazione?",
        path: "/cliente/informazioni-prenotazione",
        section: "e1",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Quando viene addebitato il pagamento?",
        path: "/cliente/informazioni-prenotazione",
        section: "e2",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Cosa comprende il “Totale pagato”?",
        path: "/cliente/informazioni-prenotazione",
        section: "e3",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Ho ricevuto un addebito errato. Cosa devo fare?",
        path: "/cliente/informazioni-prenotazione",
        section: "e4",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Come so se ho prenotato un locale condiviso?",
        path: "/cliente/informazioni-prenotazione",
        section: "e5",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Quali altre informazioni posso vedere nella card di riepilogo?",
        path: "/cliente/informazioni-prenotazione",
        section: "e6",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Come si può richiedere una fattura?",
        path: "/cliente/informazioni-prenotazione",
        section: "e7",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "All'arrivo dovrò pagare dei costi extra?",
        path: "/cliente/informazioni-prenotazione",
        section: "e8",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Terminata la condivisione il Fornitore mi può addebitare costi extra?",
        path: "/cliente/informazioni-prenotazione",
        section: "e9",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Come modificare la modalità di pagamento?",
        path: "/cliente/informazioni-prenotazione",
        section: "e10",
        element: <InformazioniPrenotazioneCliente />,
      },
      {
        title: "Come modificare l'orario di arrivo?",
        path: "/cliente/informazioni-prenotazione",
        section: "e11",
        element: <InformazioniPrenotazioneCliente />,
      },
    ],
  },
];

