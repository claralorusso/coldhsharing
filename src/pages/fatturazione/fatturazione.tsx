import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  AlertTitle,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      {/* TODO: FINIREEEEEE*/}
      <div>
        {/* <Accordion
          expanded={expanded === "basic"}
          onChange={handleChange("basic")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Abbonamento Basic
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              L'abbonamento Basic ti offre la possibilità di:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Arricchire la galleria delle tue inserzioni con fino a 5
                  fotografie e un video;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Comparire tra i primi risultati di ricerca;
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              La funzionalità "<strong>Comparire tra i primi risultati</strong>{" "}
              di ricerca" permette al tuo annuncio di ritornare tra le prime
              posizioni, ricevendo la stessa visibilità che ha un annuncio
              appena pubblicato.
            </div>
            <div className="pb-2">
              I requisiti di riposizionamento si basano su:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Rating</strong>, ovvero sulla valutazione
                  quantitativa/qualitativa basata sui feedback ricevuti;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Vicinanza</strong>, più vicino è il tuo locale al
                  criterio di ricerca del Cliente e più salirà la classifica.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "standard"}
          onChange={handleChange("standard")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Abbonamento Standard
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              L'abbonamento Standard ti offre, oltre alle funzionalità dell’
              abbonamento Basic, la possibilità di:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Gestire le richieste di prenotazione.</strong>{" "}
                  <p>
                    <Link to="/booking/manage-booking">link</Link>
                  </p>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Comparire tra i consigliati della piattaforma</strong>
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              La funzionalità "
              <strong>Comparire tra i consigliati della piattaforma</strong>"
              aumenterà la visibilità del tuo locale, permettendo a potenziali
              clienti di ricevere via email notifiche riguardo la disponibilità
              del tuo locale per la condivisione. Questo contribuirà a
              promuovere ulteriormente la tua attività.
            </div>
            <div className="pb-2">
              Il tuo locale verrà suggerito solo se soddisfa i requisiti di
              ricerca dei clienti. Verrà proposto nei seguenti casi:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Se una richiesta di prenotazione è stata rifiutata dalla
                  struttura.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Se il cliente cancella una richiesta di prenotazione inviata
                  ad un'altra struttura.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Se il cliente annulla una prenotazione prima della scadenza
                  della cancellazione gratuita.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">I requisiti di ricerca si basano su:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Tipologia di locale</strong>, ovvero cella frigo,
                  container refrigerato o locale non refrigerato;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Periodo di ricerca</strong>, il tuo locale sarà
                  proposto anche per periodi diversi, se disponibile;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Località</strong>, il tuo locale sarà suggerito entro
                  un raggio di 100 km;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Categoria di prodotto</strong>, il tuo locale sarà
                  proposto solo a clienti interessati a stoccare il tipo di
                  prodotto per cui è progettato.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "premium"}
          onChange={handleChange("premium")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Abbonamento Premium
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              L'abbonamento premium ti offre, oltre alle funzionalità dell’
              abbonamento Standard, la possibilità di:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Mettere in evidenza il tuo profilo</strong>, all’
                  interno della sezione ‘Fornitore’ la tua attività sarà
                  contraddistinta dalle altre;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Mettere in evidenza la tua inserzione</strong>, tutti
                  i tuoi locali saranno contraddistinti dall’etichetta ‘In
                  evidenza’.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "delete-sub"}
          onChange={handleChange("delete-sub")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Annullare rinnovo automatico
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Gli abbonamenti acquistati saranno automaticamente rinnovati al
              termine della scadenza.
            </div>
            <div className="pb-2">
              In qualsiasi momento è possibile annullarne il rinnovo. Ecco come:
            </div>
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
                  <strong>Abbonamenti</strong> nel quale troverai l’abbonamento
                  acquistato, la data di acquisto, la data di scadenza, lo stato
                  e la relativa fattura. Lo stato indica se l’abbonamento è
                  attivo (Stato = Attivo) o scaduto (Stato = Annullato).
                  Cliccando su ‘Annulla rinnovo’ verrà disattivato il rinnovo
                  automatico.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold"> Domande frequenti</div>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Il rinnovo dell’abbonamento è automatico?
              </AlertTitle>
              Si, il rinnovo dell’abbonamento acquistato si rinnoverà
              automaticamente.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Ho annullato il rinnovo automatico e lo voglio riattivare?
              </AlertTitle>
              Se hai annullato il tuo abbonamento non è possibile configurare il
              rinnovo automatico, ma dovrai attendere la data di scadenza per
              poter procedere con l’acquisto di un nuovo abbonamento.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Come fare upgrade di un abbonamento?
              </AlertTitle>
              Non è possibile autonomamente effettuare un upgrade di un
              abbonamento già acquistato. Si dovrà attendere la fine
              dell’abbonamento in corso o contattare il servizio clienti
              attraverso il seguente{" "}
              <a
                className="text-blue-500"
                href="https://coldsharingticketing.zohodesk.eu/portal/en/newticket"
              >
                link{" "}
              </a>
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Quali notifiche ricevo dopo aver acquistato o rinnovato un
                abbonamento?
              </AlertTitle>
              Se hai acquistato un abbonamento riceverai per e-mail conferma di
              acquisto. Se hai già acquistato un abbonamento ed è stato
              rinnovato, riceverai per e-mail conferma di rinnovo.
            </Alert>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
};
