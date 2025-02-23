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
import { useParams } from "react-router-dom";

export const Premi = () => {
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
      <h1 className="text-xl font-bold pb-1">Premi Cold Sharing</h1>
      <div className="pb-2">
        I premi Cold Sharing riconoscono l'eccellenza sia nelle strutture che
        offrono locali refrigerati, sia nei fornitori che hanno realizzato tali
        spazi. Pertanto, i premi Cold Sharing si articolano in due categorie:{" "}
        <strong>Fresh Space Award</strong> e{" "}
        <strong>Premier Cold Solutions Award</strong>.
      </div>
      <div>
        <Accordion
          expanded={expanded === "fresh-space"}
          onChange={handleChange("fresh-space")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Che cosa è il premio Fresh Space Award?
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Il <strong>Fresh Space Award</strong> rappresenta il nostro
              riconoscimento più prestigioso. Questo premio valuta la qualità e
              la quantità delle recensioni e dei punteggi ricevuti dai clienti,
              classificando i locali refrigerati in specifiche categorie e aree
              geografiche.
            </div>
            <div className="pb-2">
              La selezione dei vincitori del Fresh Space Award si basa su
              criteri rigorosi: la qualità e la quantità delle recensioni e dei
              punteggi pubblicati su Cold Sharing negli ultimi 12 mesi. Per
              essere idonei al premio, i locali refrigerati devono essere
              presenti su Cold Sharing da almeno 12 mesi, ricevere un numero
              minimo di recensioni durante il periodo di valutazione e mantenere
              o superare un punteggio minimo su Cold Sharing.
            </div>
            <div className="pb-2 font-bold">
              Cold Sharing è orgogliosa di servire una community globale e si
              riserva il diritto di determinare l'idoneità delle strutture e dei
              locali sulla base di ulteriori fattori che riflettono i suoi
              valori e regolamenti aziendali. Questi includono, a titolo
              esemplificativo:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Gravi incidenti di sicurezza che possono essersi verificati o
                  si presume si siano verificati presso una struttura.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Incidenti o comportamenti discriminatori da parte del
                  personale o della direzione di una struttura.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Prassi che violano il regolamento per i contenuti di Cold
                  Sharing, tra cui invii fraudolenti di recensioni,
                  intimidazioni degli utenti o qualsiasi altra azione che
                  comprometta l'integrità dei contenuti generati dagli utenti.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold">
              Siamo impegnati a garantire standard elevati e a promuovere una
              community rispettosa e responsabile.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "premier"}
          onChange={handleChange("premier")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Che cosa è il premio Premier Cold Solutions Award?
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Il <strong>Premier Cold Solutions Award</strong> è il nostro
              riconoscimento per le aziende che realizzano locali refrigerati.
              Questo premio valuta la qualità e la quantità delle recensioni e
              dei punteggi ricevuti dai loro clienti su Cold Sharing,
              classificandoli in specifiche categorie e aree geografiche.
            </div>
            <div className="pb-2">
              La selezione dei vincitori del Premier Cold Solutions Award si
              basa sulla qualità e sulla quantità delle recensioni e dei
              punteggi ottenuti su Cold Sharing nell’arco di 12 mesi. Per essere
              idonei al premio, i locali refrigerati (di tipologia ‘Cella
              frigo’) devono essere presenti su Cold Sharing da almeno 12 mesi,
              ricevere un numero minimo di recensioni durante il periodo di
              valutazione e mantenere o superare un punteggio minimo su Cold
              Sharing.
            </div>
            <div className="pb-2">
              Siamo lieti di riconoscere le aziende che si distinguono per
              l’eccellenza nei servizi refrigerati e per la soddisfazione dei
              loro clienti.
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
