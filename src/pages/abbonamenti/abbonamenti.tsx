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

export const Abbonamenti = () => {
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
      <h1 className="text-xl font-bold pb-1">Abbonamenti</h1>
      <div className="pb-2">
      <p>Gli abbonamenti Cold Sharing ti permettono di aumentare la visibilità 
      del tuo profilo e dei tuoi locali e di gestire in autonomia le prenotazioni, 
      con rinnovo automatico semplice e controllabile in ogni momento.</p>

      <p>Cold Sharing offre tre piani di abbonamento – <strong>Basic, Standard e 
        Premium</strong> – che consentono di:</p>

      </div>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>-</ListItemIcon>
          <ListItemText>
            migliorare il posizionamento dei locali nei risultati di ricerca;
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>-</ListItemIcon>
          <ListItemText>
            aumentare la visibilità dei locali tramite suggerimenti e notifiche email ai Clienti;
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>-</ListItemIcon>
          <ListItemText>
            gestire le richieste di prenotazione, accettandole o rifiutandole.
          </ListItemText>
        </ListItem>
      </List>
      <div className="pb-2">
        Il <strong>prezzo degli abbonamenti</strong> sono visibili nella Homepage della
        piattaforma.
      </div>
      <div>
        <Accordion
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
              L’abbonamento Basic è pensato per chi vuole iniziare 
              a promuovere i propri locali e migliorarne la visibilità.
              <p>Con il piano Basic puoi:</p>
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  arricchire ogni inserzione con fino a <strong>5 fotografie</strong>;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>comparire tra i primi risultati di ricerca</strong>, aumentando le possibilità 
                  di essere visualizzato dai Clienti.
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
              Il posizionamento dipendono principalmente da:
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
             L’abbonamento <strong>Standard</strong> include tutte le funzionalità del piano 
             Basic e aggiunge strumenti per aumentare il controllo e le opportunità di 
             prenotazione.
             <p>Con il piano Standard puoi:</p>
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Gestire le richieste di prenotazione</strong>, accettando o rifiutando le richieste ricevute{" "}
                  
                    <Link to="/booking/manage-booking">(vedi sezione Prenotazioni)</Link>
                  
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
                  una richiesta di prenotazione è stata rifiutata da un'altra 
                  struttura.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  il cliente cancella una richiesta di prenotazione inviata
                  ad un'altra struttura.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  il cliente annulla una prenotazione entro i termini
                  della cancellazione gratuita.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">I suggerimenti si basano su:</div>
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
                  un raggio di 200 km;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Categoria di prodotto</strong>, in base alla tipologia di 
                  merce che il locale può ospitare.
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
              L’abbonamento Premium è la soluzione più completa e include tutte
               le funzionalità del piano Standard, offrendo massima visibilità 
               e supporto dedicato.
               <p>Con il piano Premium puoi:</p>
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
                <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  ricevere <strong>supporto dedicato durante la fase iniziale di 
                    onboarding.</strong> Entro 72 ore dall’attivazione dell’abbonamento, 
                    verrai contattato per pianificare una call dedicata, 
                    finalizzata ad accompagnarti nella configurazione iniziale e 
                    a sfruttare al meglio le funzionalità della piattaforma.
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
              Gli abbonamenti si rinnovano automaticamente alla scadenza.
            </div>
            <div className="pb-2">
              Per disattivare il rinnovo:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Vai su <strong>Profilo</strong> → <strong>sezione Abbonamenti</strong> → clicca su <strong>Annulla rinnovo</strong>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  In alternativa, usa il link nell’email ricevuta al momento dell’acquisto.
                </ListItemText>
              </ListItem>
            </List>
            Non riceverai una conferma via email: controlla nella <strong>sezione Abbonamenti</strong> che lo stato sia cambiato in <i>Annullato</i>.
    
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
                href="https://coldsharing.zohodesk.eu/portal/it/newticket"
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
        </Accordion>
      </div>
    </div>
  );
};
