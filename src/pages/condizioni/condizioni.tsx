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
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Condizioni = () => {
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
        Condizioni e pagamenti dei clienti
      </h1>
      <div className="pb-2">
        Dritte su come impostare le condizioni e i pagamenti per il locale, per
        esempio il periodo di tolleranza per le cancellazioni gratuite e il
        periodo minimo di condivisione.
      </div>
      <div>
        <Accordion
          expanded={expanded === "location"}
          onChange={handleChange("location")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Come impostare o modificare le condizioni dell’Ubicazione
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Le condizioni sono le regole e le linee guida relative a
              prenotazioni da configurare a livello di Ubicazione. Sei tu a
              scegliere i giorni e gli orari di check-in e check-out e se
              attivare o disattivare la richiesta di prenotazione.
            </div>
            <div className="pb-2">
              Segui questi passaggi per impostare o modificare le condizioni
              della tua Ubicazione:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <strong>Profilo</strong>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione{" "}
                  <strong>Ubicazione</strong> e clicca sull’icona{" "}
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  (Modifica).
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Vai, cliccando sul Tasto ‘Avanti’, fino alle sezioni{" "}
                  <strong>Checkin/checkout</strong> e{" "}
                  <strong>Gestione richiesta di prenotazione</strong>.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "local"}
          onChange={handleChange("local")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="font-bold"
          >
            Come impostare o modificare le condizioni del Locale
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Le condizioni sono le regole e le linee guida relative a
              prenotazioni e pagamenti da configurare a livello di Locale. Sei
              tu a scegliere la gestione di eventuali penali che il Cliente
              dovrà pagarti se annulla la prenotazione e la definizione del
              periodo di disponibilità con i relativi costi di condivisione e
              modalità di prenotazione.
            </div>
            <div className="pb-2 font-bold">
              Segui questi passaggi per impostare o modificare le condizioni del
              tuo Locale:
            </div>

            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <strong>Profilo</strong>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione Locale e
                  clicca sull’icona{" "}
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  (Modifica)
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Vai, cliccando sul Tasto ‘Avanti’, fino alle sezioni{" "}
                  <strong>Gestione penali</strong> e{" "}
                  <strong>Periodo e capacità di stoccaggio</strong>.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 ">
              All’ interno della sezione{" "}
              <strong>Periodo e capacità di stoccaggio</strong> è possibile
              gestire costi supplementari a seconda della tipologia di locale
              creato. Nello specifico:
            </div>
            <div className="pb-2">
              <strong>Costi di utenza</strong>, Fai sapere al tuo Cliente se i
              costi di tutte le utenze (es: energia, acqua) sono già inclusi nel
              prezzo giornaliero di condivisione. Se il prezzo è incluso spunta
              il campo; altrimenti non fare nulla.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "invoice"}
          onChange={handleChange("invoice")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="font-bold"
          >
            Fornire fatture ai Clienti
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Anche se il tipo di fattura richiesta può variare a seconda delle
              leggi locali, le prenotazioni sono accordi legali tra te e i tuoi
              Clienti. Pertanto, è tua responsabilità emettere le fatture.
              L’importo della fattura sarà pari al costo della prenotazione che
              il Cliente ha pagato, pertanto dovrà includere anche la % di
              commissione che hai pagato a Cold Sharing.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "harm"}
          onChange={handleChange("harm")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Cosa fare se ricevi un danno
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Come descritto nel contratto, la piattaforma non si assumerà
              nessuna responsabilità. Pertanto, è responsabilità del Cliente non
              arrecare un qualsiasi danno di qualsiasi natura.
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
