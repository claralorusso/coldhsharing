import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
export const Fatturazioni = () => {
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
      <h1 className="text-xl font-bold pb-1">Fatturazione</h1>
      <div className="pb-2">
        Scopri la tua percentuale di commissione, le modalità di pagamento, la
        questione dell'IVA e il funzionamento della fatturazione. Ogni volta che
        ricevi una prenotazione da un Cliente per uno o più locali, riceverai
        via email la fattura elettronica da parte di Marvincla S.r.l., titolare
        del marchio Cold Sharing. Questa fattura ti sarà inviata entro 12
        giorni, in conformità con l'articolo 21, comma 4, del D.P.R. 633/1972, e
        corrisponderà alla <strong>commissione</strong> calcolata sul costo
        della condivisione.
      </div>
      <div>
        <Accordion
          expanded={expanded === "system"}
          onChange={handleChange("system")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Procedura per attivare sistema di fatturazione
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Per iniziare la tua collaborazione con Cold Sharing il primo passo
              è procedere con la registrazione (vedi{" "}
              <span>
                <Link
                  to="/first-action/manage-sign"
                  className="text-blue-500 underline"
                >
                  Primi passi in Cold Sharing
                </Link>
              </span>
              ).
            </div>
            <div className="pb-2">
              Dopo aver completato la registrazione sarà necessario collegare il
              tuo profilo a Stripe per iniziare a ricevere le richieste di
              prenotazione. All'interno del tuo account Stripe, dovrai fornire
              tutte le informazioni richieste, incluse le coordinate bancarie su
              cui riceverai gli accrediti dai Clienti.
            </div>
            <div className="pb-2">
              L'emissione della fattura , da parte della società Marvincla
              S.r.l. , verrà gestita solo verso l'utente che gestirà il profilo
              come ruolo commerciale <strong>Fornitore</strong>.
            </div>
            <div className="pb-2">
              Nel caso in cui ti fossi registrato con il ruolo commerciale{" "}
              <strong>Entrambi</strong>, la fattura verrà emessa solo e solo se
              assumi la figura di <strong>Fornitore</strong>. Riportiamo il
              significato dei ruoli commerciali:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Cliente</strong>: utente che desidera prenotare un locale
                   in cui stoccare il tuo prodotto.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Fornitore</strong>: utente che desidera solo
                  condividere il proprio locale con altri utenti;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Entrambi</strong>: utente che desidera svolgere
                  entrambi i compiti elencati precedentemente.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              La fattura sarà inviata in uno di questi momenti:
            </div>

            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Il Cliente effettua una{" "}
                  <strong>prenotazione immediata</strong> (vedi{" "}
                  <Link
                    to="/booking/manage-booking"
                    className="text-blue-500 underline"
                  >
                    Prenotazioni
                  </Link>{" "}
                  per il significato di prenotazione immediata);
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Appena la <strong>richiesta di prenotazione</strong> (vedi{" "}
                  <Link
                    to="/booking/manage-booking"
                    className="text-blue-500 underline"
                  >
                    Prenotazioni
                  </Link>{" "}
                  per il significato di richiesta di prenotazione);
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Al termine del periodo di cancellazione gratuita, se previsto;
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold"> Domande frequenti</div>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Come posso modificare i dati bancari?
              </AlertTitle>
              Le coordinate bancarie non vengono gestite nella piattaforma Cold
              Sharing, pertanto è necessario accedere sul tuo profilo{" "}
              <Link
                to="https://dashboard.stripe.com/settings"
                className="text-blue-500 underline"
              >
                Stripe
              </Link>{" "}
              e seguire la relativa procedura.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Come posso modificare il ruolo commerciale?
              </AlertTitle>
              Il ruolo commerciale potrà essere modificato solo inviando una
              richiesta al servizio clienti attraverso il seguente{" "}
              <Link
                to="https://coldsharing.zohodesk.eu/portal/it/newticket"
                className="text-blue-500 underline"
              >
                Link
              </Link>
              .
            </Alert>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "view"}
          onChange={handleChange("view")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Come consultare la fattura
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              La fattura, generata come descritto in{" "}
              <strong>Procedura per attivare sistema di fatturazione</strong>,
              potrà essere consultata per e-mail o sul portale a partire dal
              primo giorno di condivisione, ecco come:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>E-mail</strong>: appena riceverai la prenotazione dal
                  Cliente, nella tua casella di posta ti verrà inviata una mail
                  in cui sarà possibile scaricare la fattura.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Portale</strong>: appena riceverai la prenotazione dal
                  Cliente, accedi in Cold Sharing e clicca sulla pagina
                  Prenotazioni → Storico prenotazioni: individua la prenotazione
                  per scaricare la fattura.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold"> Domande frequenti</div>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                La sede legale nella fattura è sbagliata o assente?
              </AlertTitle>
              Se nella fattura generata da Cold Sharing l'indirizzo risulta
              errato o assente, significa che hai fornito un indirizzo di sede
              legale errato o non hai effettuato alcuna indicazione. In tal
              caso, contatta subito il servizio clienti attraverso il seguente{" "}
              <Link
                to="https://coldsharing.zohodesk.eu/portal/it/newticket"
                className="text-blue-500 underline"
              >
                Link
              </Link>
              . Successivamente procedi nel modificare la sede legale:
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>-</ListItemIcon>
                  <ListItemText>
                    Posizione il cursore sulla foto del tuo Profilo che si trova
                    alla sinistra del tasto Homepage posizionato nella barra in
                    alto e clicca su <strong>Profilo</strong>.
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>-</ListItemIcon>
                  <ListItemText>
                    Scorri verso il basso fino a raggiungere la sezione{" "}
                    <strong>Informazioni</strong> e cliccare sull’ icona{" "}
                    <span>
                      <SettingsIcon />
                    </span>{" "}
                    (Modifica) informazioni. Modifica l’indirizzo mail e{" "}
                    <strong>Conferma</strong>.
                  </ListItemText>
                </ListItem>
              </List>
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Cosa viene riportato in fattura?
              </AlertTitle>
              Nella fattura verranno riportati:
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>-</ListItemIcon>
                  <ListItemText>Dati societari;</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>-</ListItemIcon>
                  <ListItemText>Numero di prenotazione;</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>-</ListItemIcon>
                  <ListItemText>Data inizio e fine prenotazione;</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>-</ListItemIcon>
                  <ListItemText>Voci di costo;</ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>-</ListItemIcon>
                  <ListItemText>Importo;</ListItemText>
                </ListItem>
              </List>
            </Alert>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "commission"}
          onChange={handleChange("commission")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Che cos’è e come viene calcolata la commissione?
          </AccordionSummary>
          <AccordionDetails>
            La commissione rappresenta il costo che dovrai corrispondere a Cold
            Sharing ed è pari alla percentuale indicata nel contratto
            sottoscritto durante la registrazione, calcolata sul{" "}
            <strong>costo di condivisione</strong>, più IVA. Questa trattenuta
            sarà gestita automaticamente dal sistema Stripe, che applicherà la
            percentuale e l'IVA direttamente sulla voce economica indicata nel
            tuo annuncio. Pertanto, l'importo totale che riceverai (definito
            come ‘Totale accredito’) sulle coordinate bancarie fornite in Stripe
            sarà calcolato come segue:
            <div className="pb-2 font-bold text-center">
              Totale accredito = Costo totale - Commissione
            </div>
            <div>dove:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Costo totale = Costo di condivisione + IVA</strong>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Costo condivisione</strong> = rappresenta il totale
                  imponibile che il Cliente dovrà pagare per la condivisione del
                  tuo locale
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Commissione</strong> = % sul costo di condivisione +
                  IVA
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              Nel dettaglio della prenotazione, oltre al Totale accredito,
              potrai consultare anche la <strong>Data di accredito</strong>,
              ovvero il giorno in cui avverrà la transazione sul tuo conto. Se
              non ricevi l’accredito nel giorno indicato non preoccuparti. Il
              tempo necessario affinché un bonifico arrivi sul conto del
              destinatario può dipendere da vari fattori:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  <strong>Tipo di bonifico</strong>: I bonifici SEPA (dentro
                  l'area euro) solitamente impiegano 1-2 giorni lavorativi,
                  mentre i bonifici internazionali possono richiedere più tempo.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  <strong>Giorni lavorativi</strong>: Se effettui un bonifico
                  durante il fine settimana o in un giorno festivo,
                  l'elaborazione potrebbe avvenire solo il giorno lavorativo
                  successivo.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  <strong>Orario dell'invio</strong>: Se il bonifico viene
                  effettuato dopo una certa ora, potrebbe essere elaborato il
                  giorno lavorativo successivo.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>4</ListItemIcon>
                <ListItemText>
                  <strong>Banche coinvolte</strong>: Diverse banche possono
                  avere tempistiche di elaborazione diverse. Alcune possono
                  elaborare i bonifici più rapidamente di altre.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>5</ListItemIcon>
                <ListItemText>
                  <strong>Controlli di sicurezza</strong>: Le banche potrebbero
                  effettuare controlli di sicurezza sui bonifici, il che può
                  ritardarne l'arrivo.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              Per consultare il dettaglio della prenotazione, ecco come fare:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Se la condivisione non è ancora iniziata, visualizza il
                  dettaglio della prenotazione nella sezione{" "}
                  <strong>Richieste di prenotazione</strong>;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Se la condivisione è iniziata, visualizza il dettaglio della
                  prenotazione nella sezione{" "}
                  <strong>Storico prenotazioni</strong>;
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              Anche se il tipo di fattura richiesta può variare a seconda delle
              leggi locali, le prenotazioni sono accordi legali tra te e i tuoi
              Clienti. Pertanto, è tua responsabilità emettere le fatture al
              Cliente. L’importo della fattura sarà pari al Costo totale,
              ovvero:
            </div>
            <div className="pb-2 font-bold text-center">
              Costo totale = Costo di condivisione + IVA
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "export"}
          onChange={handleChange("export")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Che cos’è e come viene calcolata la commissione se il Cliente è un
            esportatore abituale
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Un esportatore abituale è un soggetto (di solito un'impresa) che
              effettua vendite di beni o servizi all'estero in modo regolare e
              continuativo. Questo status consente all'esportatore di
              beneficiare di alcune agevolazioni fiscali, come l'esenzione
              dall'IVA per le operazioni di esportazione.
            </div>
            <div className="pb-2">
              Se un Cliente, durante la fase di prenotazione, dichiara di essere
              un esportatore, la commissione che dovrai corrispondere a Cold
              Sharing rimarrà invariata e sarà sempre pari alla percentuale
              indicata nel contratto sottoscritto al momento della
              registrazione. Questa commissione sarà calcolata sul costo di
              condivisione, più IVA.
            </div>
            <div className="pb-2">
              Pertanto, l'importo totale che riceverai (definito come ‘Totale
              accredito’) sulle coordinate bancarie fornite in Stripe sarà
              calcolato come segue:
            </div>
            <div className="pb-2 font-bold text-center">
              Totale accredito = Costo totale - Commissione
            </div>
            <div className="pb-2">dove:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Costo totale = Costo di condivisione</strong>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Costo condivisione</strong> = rappresenta il totale
                  imponibile che il Cliente dovrà pagare per la condivisione del
                  tuo locale
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Commissione</strong> = % sul costo di condivisione +
                  IVA
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 ">
              {" "}
              Anche se il tipo di fattura richiesta può variare a seconda delle
              leggi locali, le prenotazioni sono accordi legali tra te e i tuoi
              Clienti. Pertanto, è tua responsabilità emettere le fatture al
              Cliente. L’importo della fattura sarà pari al Costo totale,
              ovvero:
            </div>

            <div className="pb-2 font-bold text-center">
              {" "}
              Costo totale = Costo di condivisione
            </div>
            <div className="pb-2">
              Se hai ricevuto un bonifico da un cliente esente da IVA, ecco
              alcuni controlli da effettuare:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  <strong>Verifica dell'esenzione</strong>: Assicurati che il
                  cliente abbia diritto all'esenzione dall'IVA. Questo può
                  includere la verifica del suo status come esportatore
                  abituale, ente non commerciale, o altre categorie specifiche.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  <strong>Controllo della documentazione</strong>: Assicurati di
                  avere la documentazione adeguata che giustifichi l'esenzione,
                  come la dichiarazione d’intenti. Prima di procedere con la
                  prenotazione il Cliente ha fornito le seguenti informazioni
                  che possono essere consultate nel riepilogo della
                  prenotazione:
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>a</ListItemIcon>
                      <ListItemText>Numero protocollo</ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>b</ListItemIcon>
                      <ListItemText>Data ricevuta telematica</ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>c</ListItemIcon>
                      <ListItemText>
                        Allegato della dichiarazione d’intenti.
                      </ListItemText>
                    </ListItem>
                  </List>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  <strong>Fattura corretta</strong>:Controlla che la fattura
                  emessa al cliente riporti correttamente la dicitura di
                  esenzione IVA (ad esempio, "Operazione esente ai sensi
                  dell’art. X del DPR 633/72") e che contenga tutti gli elementi
                  richiesti dalla normativa fiscale.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold"> Domande frequenti</div>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Il Cliente ha sbagliato ad allegare il documento della
                dichiarazione d’intenti?
              </AlertTitle>
              Se ritieni che il Cliente abbia caricato un documento differente
              dalla dichiarazione d’intenti contattalo subito e richiedi di
              fornire la documentazione necessaria per dimostrare il suo status
              di esportatore abituale, come il certificato di esportatore
              abituale rilasciato dall'agenzia delle entrate.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Il Cliente ha dichiarato il falso, cosa fare?
              </AlertTitle>
              Se un tuo cliente dichiara di essere un esportatore abituale pur
              non essendolo, ecco alcuni passaggi da seguire:
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>1</ListItemIcon>
                  <ListItemText>
                    <strong>Richiedi documentazione</strong>: Chiedi al cliente
                    di fornire la documentazione necessaria per dimostrare il
                    suo status di esportatore abituale, come il certificato di
                    esportatore abituale rilasciato dall'agenzia delle entrate.
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>2</ListItemIcon>
                  <ListItemText>
                    <strong>Verifica la validità della dichiarazione</strong>:
                    Controlla che il cliente possa effettivamente beneficiare
                    dell'esenzione dall'IVA. Assicurati che abbia effettuato un
                    numero sufficiente di operazioni di esportazione nel tempo.
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>3</ListItemIcon>
                  <ListItemText>
                    <strong>Informati sulle conseguenze</strong>: Spiega al
                    cliente le implicazioni di una falsa dichiarazione.
                    Sottolinea che, se scoperto, potrebbe affrontare sanzioni
                    fiscali e altre conseguenze legali.
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>4</ListItemIcon>
                  <ListItemText>
                    <strong>Rifiuta l'applicazione dell'esenzione</strong>: Se
                    hai motivi di sospetto sulla veridicità della dichiarazione,
                    puoi decidere di non applicare l'esenzione dall'IVA e
                    procedere con la normale fatturazione.
                  </ListItemText>
                </ListItem>
              </List>
            </Alert>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "corrections"}
          onChange={handleChange("corrections")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Correzioni alle fatture
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Se hai ricevuto una fattura con dati errati, ti invitiamo a
              contattare il servizio clienti attraverso il seguente{" "}
              <span>
                <Link
                  to="https://coldsharing.zohodesk.eu/portal/it/newticket"
                  className="text-blue-500 underline"
                >
                  Link
                </Link>
              </span>
              . Dopo un attento controllo, se l’errore viene confermato,
              procederemo come segue:
            </div>

            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  <strong>Emissione di una nota di credito</strong>. Ti
                  invieremo una nota di credito per annullare l’importo errato
                  della fattura. Questa includerà il numero della fattura
                  originale e il motivo della correzione.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  <strong>Emissione di una nuova fattura</strong>. Dopo aver
                  annullato la fattura errata, ti invieremo una nuova fattura
                  con l’importo corretto.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
