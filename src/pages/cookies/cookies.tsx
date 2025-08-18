import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CookieTable from "./cookie-table";
import { cookieImportantRows, marketingRows } from "./cookie-table.constants";

export const Cookies = () => {
  const { section } = useParams();
  const [expanded, setExpanded] = useState("");

  useEffect(() => {
    if (section) {
      setExpanded(section);
    } else {
      setExpanded("");
    }
  }, [section]);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };

  return (
    <div className="h-full w-full p-4">
      <h1 className="text-xl font-bold pb-1">
        Informativa sui cookie di Cold Sharing
      </h1>
      <div>
        <Accordion
          expanded={expanded === "main-info"}
          onChange={handleChange("main-info")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Definizioni, caratteristiche e applicazione della normativa
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              I cookie sono piccoli file di testo che i siti visitati
              dall'utente inviano e registrano sul suo computer o dispositivo
              mobile, per essere poi ritrasmessi agli stessi siti alla
              successiva visita. Proprio grazie ai cookie un sito ricorda le
              azioni e preferenze dell'utente (come, ad esempio, i dati di
              login, la lingua prescelta, le dimensioni dei caratteri, altre
              impostazioni di visualizzazione, ecc.) in modo che non debbano
              essere indicate nuovamente quando l'utente torni a visitare detto
              sito o navighi da una pagina all'altra di esso. I cookie, quindi,
              sono usati per eseguire autenticazioni informatiche, monitoraggio
              di sessioni e memorizzazione di informazioni riguardanti le
              attività degli utenti che accedono ad un sito e possono contenere
              anche un codice identificativo unico che consente di tenere
              traccia della navigazione dell'utente all'interno della
              Piattaforma stesso per finalità statistiche o pubblicitarie. Nel
              corso della navigazione su un sito, l'utente può ricevere sul suo
              computer anche cookie di siti o di web server diversi da quello
              che sta visitando (c.d. cookie di "terze parti"). Alcune
              operazioni non potrebbero essere compiute senza l'uso dei cookie,
              che in certi casi sono quindi tecnicamente necessari per lo stesso
              funzionamento del Sito.
            </div>
            <div className="pb-2">
              Esistono vari tipi di cookie, a seconda delle loro caratteristiche
              e funzioni, e questi possono rimanere nel computer dell'utente per
              periodi di tempo diversi: c.d. cookie di sessione, che viene
              automaticamente cancellato alla chiusura del browser; c.d. cookie
              persistenti, che permangono sull'apparecchiatura dell'utente fino
              ad una scadenza prestabilita.
            </div>
            <div className="pb-2 font-bold">
              In base alla normativa applicabile, per l'utilizzo dei cookie non
              sempre è richiesto un espresso consenso dell'utente. In
              particolare, solitamente non richiedono tale consenso i "cookie
              tecnici", cioè quelli utilizzati al solo fine di effettuare la
              trasmissione di una comunicazione su una rete di comunicazione
              elettronica, o nella misura strettamente necessaria per erogare un
              servizio esplicitamente richiesto dall'utente. Si tratta, in altre
              parole, di cookie indispensabili per il funzionamento del Sito
              necessari per eseguire attività richieste dall'utente.
            </div>

            <div className="pb-2 font-bold">
              Per i "cookie di profilazione", viceversa, cioè quelli volti a
              creare profili relativi all'utente e utilizzati al fine di inviare
              messaggi pubblicitari in linea con le preferenze manifestate dallo
              stesso nell'ambito della navigazione in rete, solitamente è
              richiesto un preventivo consenso dell'utente.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "cookie-types"}
          onChange={handleChange("cookie-types")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Tipologie di cookie utilizzate dal Sito e possibilità di
            (de-)selezione
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Per i "cookie di profilazione", viceversa, cioè quelli volti a
              creare profili relativi all'utente e utilizzati al fine di inviare
              messaggi pubblicitari in linea con le preferenze manifestate dallo
              stesso nell'ambito della navigazione in rete, solitamente è
              richiesto un preventivo consenso dell'utente.
            </div>
            <div className="pb-2">
              Il Sito utilizza i seguenti cookie che possono essere
              de-selezionati, salvo che per i cookie di terze parti per i quali
              dovrai fare riferimento direttamente alle relative modalità di
              selezione e de-selezione dei rispettivi cookie, indicate a mezzo
              di link:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Cookie necessari</strong>, I cookie necessari
                  contribuiscono a rendere fruibile il sito web abilitando
                  funzionalità di base quali la navigazione sulle pagine e
                  l'accesso alle aree protette del sito. Il sito web non è in
                  grado di funzionare correttamente senza questi cookie.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Cookie preferenza</strong>, I cookie di preferenza
                  consentono al sito web di memorizzare informazioni che ne
                  influenzano il comportamento o l'aspetto, quali la lingua
                  preferita o la località nella quale ti trovi.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Cookie statistiche</strong>, I cookie statistici
                  aiutano i proprietari del sito web a capire come i visitatori
                  interagiscono con i siti raccogliendo e trasmettendo
                  informazioni in forma anonima.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Cookie Marketing</strong>, I cookie di marketing
                  vengono utilizzati per tracciare i visitatori sui siti web. La
                  finalità è quella di presentare annunci pubblicitari che siano
                  rilevanti e coinvolgenti per il singolo utente e quindi di
                  maggior valore per editori e inserzionisti di terze parti.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              La società utilizza inoltre cookie di terze parti, cioè cookie di
              siti o di web server diversi da quello della società per finalità
              proprie di dette parti terze. Si precisa che tali soggetti terzi,
              di seguito elencati con i relativi collegamenti alle politiche
              sulla privacy, sono tipicamente autonomi titolari del trattamento
              dei dati raccolti attraverso i cookie da essi serviti, oppure
              agiscono in quanto Responsabili esterni del trattamento.
            </div>
            <div className="pb-2">
              Nel dettaglio, i cookie inviati tramite il Sito su cui sta
              navigando sono indicati di seguito:
            </div>
            <CookieTable title="Necessari" rows={cookieImportantRows} />
            <CookieTable title="Marketing" rows={marketingRows} />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "manage-cookie"}
          onChange={handleChange("manage-cookie")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Come visualizzare e modificare i cookie
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Lei può selezionare può bloccare o cancellare (in tutto o in
              parte) i cookie attraverso il pannello di gestione dei cookie
              denominato “impostazione cookie” accessibile da questo link o dal
              pop up visibile in ogni pagina. In alternativa è possibile
              bloccare o cancellare i cookie anche tramite le specifiche
              funzioni del suo programma di navigazione (c.d. browser):
              tuttavia, nell’ipotesi in cui tutti o alcuni dei cookie vengano
              disabilitati è possibile che il Sito risulti non consultabile o
              che alcuni servizi o determinate funzioni del Sito non siano
              disponibili o non funzionino correttamente e/o l’utente potrebbe
              essere costretto a modificare o a inserire manualmente alcune
              informazioni o preferenze ogni volta che visiterà il Sito. Per
              avere maggiori informazioni su come impostare le preferenze
              sull'uso dei cookie attraverso il Browser, è possibile consultare
              le relative istruzioni:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <Link
                    to="https://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies"
                    className="text-blue-500 underline"
                  >
                    Microsoft Edge
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <Link
                    to="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop?redirectslug=Attivare+e+disattivare+i+cookie&redirectlocale=it"
                    className="text-blue-500 underline"
                  >
                    Firefox
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <Link
                    to="https://support.google.com/chrome/answer/95647?hl=it&topic=14666&ctx=topic"
                    className="text-blue-500 underline"
                  >
                    Chrome
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <Link
                    to="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                    className="text-blue-500 underline"
                  >
                    Safari
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              Lei può anche utilizzare il tool{" "}
              <span>
                {" "}
                <Link
                  to="https://youradchoices.com/"
                  className="text-blue-500 underline"
                >
                  AdChoice{" "}
                </Link>
              </span>{" "}
              fornito da Digital Advertising Alliance oppure il tool
              <span>
                {" "}
                <Link
                  to="http://www.youronlinechoices.eu/"
                  className="text-blue-500 underline"
                >
                  YourOnlineChoice{" "}
                </Link>
              </span>{" "}
              fornito European Interactive Digital Advertising Alliance.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "times"}
          onChange={handleChange("times")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Per quanto tempo i cookie rimarranno sul mio computer o dispositivo
            mobile?
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Il periodo di permanenza di un cookie nel tuo computer o
              dispositivo mobile dipende dalla natura di cookie “persistente” o
              cookie “di sessione”. I cookie di sessione durano finché non si
              interrompe la navigazione, mentre i cookie permanenti durano fino
              alla loro scadenza o rimozione. I cookie che utilizziamo sono per
              la maggior parte persistenti e scadono in un arco di tempo fra i
              30 minuti e i 2 anni dalla data in cui sono stati scaricati sul
              tuo dispositivo. Consulta la sezione qui sotto su come controllare
              i cookie se desideri maggiori informazioni su come rimuovere i
              cookie prima della loro scadenza.
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
