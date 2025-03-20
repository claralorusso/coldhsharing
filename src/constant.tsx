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
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
export const listArguments: Argument[] = [
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
    title: "Primi passi in Coldsharing",
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
];
