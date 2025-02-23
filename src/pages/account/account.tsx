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
import { useParams } from "react-router-dom";

export const Account = () => {
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
      <h1 className="text-xl font-bold pb-1">Account</h1>
      <div className="pb-2">
        Scopri come gestire gli account di accesso a Cold Sharing.
      </div>
      <div>
        <Accordion
          expanded={expanded === "credential"}
          onChange={handleChange("credential")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Come modificare o reimpostare le tue credenziali di accesso
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Puoi cambiare la password del tuo account in qualsiasi momento,
              oppure reimpostarla se l'hai dimenticata. Ecco come:
            </div>
            <div className="pb-2">
              Prova ad accedere in piattaforma e clicca su{" "}
              <strong>Password dimenticata? | Email dimenticata?</strong> e
              segui le istruzioni.
            </div>
            <div className="pb-2 font-bold"> Domande frequenti</div>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Perchè il mio account non risulta attivo?
              </AlertTitle>
              Dopo esserti registrato, dovrai confermare l’indirizzo alla
              notifica ricevuta per e-mail.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Perchè il mio account risulta bloccato?
              </AlertTitle>
              Se dopo aver fatto l’accesso alla piattaforma il tuo profilo
              risulta bloccato significa che la tua richiesta di registrazione è
              in fase di validazione o è stata rifiutata o sei stato bloccato
              per dei comportamenti che non rispettano il codice di condotta.
            </Alert>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "norm-code"}
          onChange={handleChange("norm-code")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Codice di condotta
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Il <strong>codice di condotta Cold Sharing</strong> include linee
              guida per tutti gli utenti, indipendentemente dal ruolo
              commerciale configurato. Questo codice è progettato per promuovere
              un'esperienza positiva sia per i Clienti che per i Fornitori,
              garantendo sicurezza e rispetto reciproco. Gli utenti sono
              incoraggiati a leggere e seguire queste linee guida per
              contribuire a un ambiente di prenotazione armonioso.
            </div>
            <div className="pb-2 font-bold">Comportamento dei Clienti:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Rispetto delle Regole: I Clienti devono seguire le politiche
                  della struttura, inclusi orari di check-in e check-out.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Condotta Adeguata: I Clienti devono comportarsi in modo
                  rispettoso verso il personale e altri utenti.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Responsabilità: I Clienti sono responsabili di eventuali danni
                  causati durante la condivisione del locale.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold">Comportamento dei Fornitori:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Accoglienza: I Fornitori devono assicurare un'accoglienza
                  professionale, mantenere un ambiente pulito e fornire tutto il
                  necessario per conservare la merce in conformità alle
                  normative vigenti.{" "}
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Chiarezza delle Informazioni: I Fornitori devono fornire
                  informazioni accurate riguardo ai locali e ai servizi offerti.{" "}
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Rispetto della Privacy: I Fornitori devono rispettare la
                  privacy dei Clienti e non interferire durante tutte le fasi
                  della condivisione.{" "}
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold">Discriminazione e Molestie:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Politica di Inclusività: Non è tollerata alcuna forma di
                  discriminazione o molestia da parte di Clienti o Fornitori.{" "}
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Segnalazione di Comportamenti Inappropriati: Procedure per
                  segnalare comportamenti inaccettabili.{" "}
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold">Utilizzo della Piattaforma:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Veridicità delle Recensioni: Le recensioni devono essere
                  basate su esperienze reali e veritiere.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Comportamento Online: Gli utenti devono mantenere un
                  comportamento rispettoso quando interagiscono sulla
                  piattaforma.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold">Sanzioni</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Conseguenze per le Violazioni: Dettagli sulle possibili
                  sanzioni per violazioni del codice, che possono includere il
                  blocco del profilo nella piattaforma. In tal caso l’utente
                  riceverà notifica per e-mail del blocco del profilo, inibendo
                  qualsiasi attività all’interno della piattaforma.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
