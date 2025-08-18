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
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from "@mui/icons-material/Link";
import WarningIcon from "@mui/icons-material/Warning";
import CircleIcon from "@mui/icons-material/Circle";
export const PrimiPassi = () => {
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
      <h1 className="text-xl font-bold pb-1">Primi passi con Cold Sharing</h1>
      <div className="pb-2">
        Sei agli inizi della tua collaborazione con Cold Sharing? Scopri come
        mettere online e rendere prenotabile i tuoi locali, come prepararti per
        i Clienti e ricevere subito prenotazioni.
      </div>

      {/* Cosa fare per registrarti */}
      <Accordion
        expanded={expanded === "manage-sign"}
        onChange={handleChange("manage-sign")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold"
        >
          Cosa fare per registrarti
        </AccordionSummary>
        <AccordionDetails>
          <div className="pb-2">
            Per iniziare la tua collaborazione il primo passo è procedere con la
            registrazione. Avrai la possibilità di selezionare tre ruoli
            commerciali, ovvero:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>1</ListItemIcon>
              <ListItemText>
                <strong>Cliente: </strong>se desideri solo inviare una richiesta
                di prenotazione in cui stoccare il tuo prodotto.
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>2</ListItemIcon>
              <ListItemText>
                <strong>Fornitore: </strong> se desideri solo condividere il tuo
                locale con altri utenti.
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>3</ListItemIcon>

              <ListItemText>
                <strong>Entrambi: </strong>se desideri condividere il tuo locale
                con altri utenti ed inviare una richiesta di prenotazione in cui
                stoccare il tuo prodotto.
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2">
            Solo se hai selezionato <strong>Fornitore</strong> o{" "}
            <strong>Entrambi</strong> dovrai scaricare e caricare copia del
            contratto firmato. Riceverai una notifica, alla mail con cui ti sei
            registrato, di accettazione o rifiuto della richiesta di
            registrazione dalla piattaforma entro le successive 72 ore durante
            le quali il tuo profilo risulterà attivo, ma con restrizioni.
          </div>
          <div className="pb-2 font-bold"> Domande frequenti</div>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Ho sbagliato ad inserire il codice IVA, come posso modificarlo?
            </AlertTitle>
            Se in fase di registrazione hai sbagliato ad inserire il codice IVA
            devi immediatamente inviare una richiesta al servizio clienti
            attraverso il seguente{" "}
            <a
              className="text-blue-500"
              href="https://coldsharingticketing.zohodesk.eu/portal/en/newticket"
            >
              link{" "}
            </a>
            .
          </Alert>
        </AccordionDetails>
      </Accordion>

      {/* Registrazione su Stripe */}
      <Accordion
        expanded={expanded === "manage-stripe"}
        onChange={handleChange("manage-stripe")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="font-bold"
        >
          Come registrarti su Stripe
        </AccordionSummary>
        <AccordionDetails>
          <div className="pb-2">
            Solo dopo aver ricevuto la mail che ti notifica lo sblocco del
            profilo potrai collegare il tuo profilo ad un account Stripe. La
            registrazione su Stripe è obbligatoria per poter ricevere le
            richieste di prenotazione.
          </div>
          <div className="pb-2">
            Per poter collegare il tuo profilo a Stripe, ecco come fare:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>1</ListItemIcon>
              <ListItemText>
                Posiziona il cursore sulla foto del tuo Profilo che si trova
                alla sinistra del tasto Homepage e clicca su{" "}
                <strong>Profilo</strong>.
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>2</ListItemIcon>
              <ListItemText>
                Scorri verso il basso fino a raggiungere la sezione{" "}
                <strong>Informazioni</strong> e clicca su{" "}
                <strong>Connettiti a Stripe</strong>. Segui le istruzioni ed
                inserisci tutte le informazioni richieste. Al termine della
                configurazione il tuo account sarà connesso e in corrispondenza
                del campo Account stripe vedrai Connesso su Stripe.
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2 font-bold"> Domande frequenti</div>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Perchè devo collegare il mio account su Stripe?
            </AlertTitle>
            Stripe è il tool utilizzato da Cold Sharing per assicurarti di
            ricevere il costo della condivisione del tuo locale dai Clienti e
            non incorrere ad eventuali insolvenze.
          </Alert>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Come vedere se il profilo è collegato a Stripe?
            </AlertTitle>
            Al termine della registrazione su Stripe nel tuo profilo vedrai la
            dicitura <strong>Connesso su Stripe</strong>.
          </Alert>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Perchè il mio account risulta attivo con restrizioni?
            </AlertTitle>
            Se dopo l’accesso alla piattaforma compare il messaggio “Profilo
            attivo con restrizioni. Serve supporto? Contattaci.”, significa che:
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  la tua richiesta di registrazione è ancora in fase di
                  validazione;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>la tua richiesta è stata rifiutata;</ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  il tuo profilo è stato bloccato per comportamenti non conformi
                  al codice di condotta.
                </ListItemText>
              </ListItem>
            </List>
          </Alert>
        </AccordionDetails>
      </Accordion>

      {/* Registrazione Ubicazione */}
      <Accordion
        expanded={expanded === "manage-location"}
        onChange={handleChange("manage-location")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
          className="font-bold"
        >
          Come registrare la tua Ubicazione
        </AccordionSummary>
        <AccordionDetails>
          <div className="pb-2">
            Solo dopo aver ricevuto la mail che ti notifica lo sblocco del
            profilo potrai procedere nel registrare la tua Ubicazione, ovvero la
            struttura in cui sono presenti i locali refrigerati che vorrai
            condividere con gli altri utenti.
          </div>
          <div className="pb-2">Ecco come fare:</div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>1</ListItemIcon>
              <ListItemText>
                Posiziona il cursore sulla foto del tuo Profilo che si trova
                alla sinistra del tasto Homepage e clicca su{" "}
                <strong>Profilo</strong>.
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>2</ListItemIcon>
              <ListItemText>
                Scorri verso il basso fino a raggiungere la sezione Ubicazione e
                clicca sull’icona{" "}
                <span>
                  <AddIcon />
                </span>{" "}
                (Aggiungi Ubicazione).
              </ListItemText>
              <ListItemText primary="" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>3</ListItemIcon>
              <ListItemText>
                Ora potrai inserire tutte le informazioni necessarie, ognuna
                suddivise per sezioni, ovvero:
              </ListItemText>
            </ListItem>
            <List>
              <ListItem disablePadding sx={{ pl: 4 }}>
                <ListItemIcon>a</ListItemIcon>
                <ListItemText>
                  <strong>Anagrafica</strong>, dovrai inserire un nome che
                  identifica la tua struttura, l’indirizzo e spuntare la casella
                  per dichiarare la sede legale.{" "}
                </ListItemText>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 4 }}>
                <ListItemIcon>b</ListItemIcon>
                <ListItemText>
                  <strong>
                    Caratteristiche e mezzi di supporto per lo stoccaggio
                  </strong>
                  , dovrai fornire al Cliente informazioni riguardanti la tua
                  struttura e mezzi a supporto per lo stoccaggio del prodotto.
                  Pensi che mancano delle informazioni importanti? Contattaci e
                  saremo felici di risponderti.{" "}
                </ListItemText>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 4 }}>
                <ListItemIcon>c</ListItemIcon>
                <ListItemText>
                  <strong>Macchinari disponibili</strong>, potrai fornire al
                  Cliente informazioni riguardanti macchinari presenti nella tua
                  Ubicazione che potranno essere da lui utilizzati. Pensi che
                  mancano delle informazioni importanti? Contattaci e saremo
                  felici di risponderti.{" "}
                  <Alert severity="warning">
                    <AlertTitle className="font-bold">ATTENZIONE</AlertTitle>
                    La contrattazione per l’utilizzo di tali macchinari non sarà
                    gestita dalla piattaforma. Sarà tua cura concordare con
                    l’utente il costo, il tempo di utilizzo e qualsiasi altra
                    attività tu ritenga necessaria.
                  </Alert>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 4 }}>
                <ListItemIcon>d</ListItemIcon>
                <ListItemText>
                  <strong>Checkin/checkout</strong>, Assicurano che tu possa
                  garantire attività di carico e scarico merce presso il tuo
                  locale. In fase di configurazione dell’ Ubicazione, le cui
                  impostazioni saranno valide per tutti i locali ad esso
                  associati, ti permettono di definire i giorni della settimana
                  in cui puoi svolgere le attività di check in e check out. Per
                  garantire un servizio più efficiente nello stesso giorno
                  dovrai garantire entrambe le attività e definire un range di
                  orario. Se in alcuni giorni non hai la possibilità di fare i
                  check-in o i check-out su richieste di prenotazioni non ancora
                  ricevute, puoi modificarle in qualsiasi momento per evitare
                  che i clienti possano fare una prenotazione con arrivo o
                  partenza in quelle date;
                  <Alert severity="warning">
                    <AlertTitle className="font-bold">ATTENZIONE</AlertTitle>I
                    giorni di check in e check out limitano la ricerca del tuo
                    locale. Offrendo un numero maggiore di giorni ti permetterà
                    di ricevere più prenotazioni.
                  </Alert>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 4 }}>
                <ListItemIcon>e</ListItemIcon>
                <ListItemText>
                  <strong>Gestione richiesta di prenotazione</strong>, La
                  richiesta di prenotazione è una funzionalità che offre a chi
                  gestisce Locali refrigerati il pieno controllo sulle richieste
                  di prenotazione. A differenza delle prenotazioni a conferma
                  immediata, che permettono di prenotare il locale refrigerato
                  direttamente, le richieste di prenotazione prevedono l’invio
                  da parte del potenziale Cliente di una richiesta, che può
                  essere accettata o rifiutata.
                  <div className="pb-2">
                    E’ possibile attivare o meno la funzionalità scegliendo tra
                    ‘Voglio gestire la Richiesta di prenotazione’ e ‘Non voglio
                    mai gestire la Richiesta di prenotazione pur acquistando il
                    pacchetto Standard \ Premium’. Tale funzionalità sarà valida
                    per tutti i Locali appartenenti all’ Ubicazione e solo se si
                    acquista un abbonamento Standard o Premium.
                  </div>
                  <div className="pb-2">
                    Nel caso si scegliesse l’opzione ‘Voglio gestire la
                    Richiesta di prenotazione’ dovrai impostare l’accettazione o
                    il rifiuto automatico della richiesta di cancellazione se
                    viene fatta al più di quattro giorni dalla data di check in;
                    se la richiesta viene fatta in una data di check-in
                    superiore ai quattro giorni dalla data della ricerca,
                    riceverai una notifica e da quel momento avrai 48 ore di
                    tempo per accettarla o rifiutarla. Nel caso in cui non si
                    fornisca un riscontro la richiesta di prenotazione sarà
                    automaticamente rifiutata. Anche il Cliente avrà la
                    possibilità di cancellare la richiesta entro le 48 ore
                    dall’invio e prima che tu fornisca un riscontro;
                  </div>
                </ListItemText>
              </ListItem>
            </List>
            <ListItem disablePadding>
              <ListItemIcon>4</ListItemIcon>
              <ListItemText>
                Clicca su <strong>salva</strong>
              </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Registrazione Locale */}
      <Accordion
        expanded={expanded === "manage-local"}
        onChange={handleChange("manage-local")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold"
        >
          Come registrare il tuo Locale
        </AccordionSummary>
        <AccordionDetails>
          <div className="pb-2">
            Solo dopo aver configurato la tua Ubicazione, potrai procedere nel
            registrare uno o più locali che i Clienti potranno prendere in
            condivisione. Avrai la possibilità di registrare tutti i locali che
            desideri e classificarli come:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>1</ListItemIcon>
              <ListItemText>
                <strong>Cella frigo</strong>: intesa come celle frigorifera o
                magazzino refrigerato di tua proprietà
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>2</ListItemIcon>
              <ListItemText>
                <strong>Container refrigerato.</strong>
              </ListItemText>
              <ListItemText />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>3</ListItemIcon>
              <ListItemText>
                <strong>Locale non refrigerato:</strong> tale locale può essere
                inteso anche come spazio non refrigerato presente nella tua
                Ubicazione per lo stoccaggio di prodotti che non necessitano del
                freddo.
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2">
            Ecco come fare per registrare un tuo locale:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>1</ListItemIcon>
              <ListItemText>
                Posizione il cursore sulla foto del tuo Profilo che si trova
                alla sinistra del tasto Homepage posizionato nella barra in alto
                e clicca su <strong>Profilo</strong>.
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>2</ListItemIcon>
              <ListItemText>
                Scorri verso il basso fino a raggiungere la sezione{" "}
                <strong>Locale</strong> e cliccare sull’ icona{" "}
                <span>
                  <AddIcon />
                </span>{" "}
                (Aggiungi Ubicazione).
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>3</ListItemIcon>
              <ListItemText>
                Nella prima sezione <strong>Anagrafica</strong> dovrai inserire
                un nome che identifica il tuo locale e collegarlo ad una delle
                Ubicazioni precedentemente configurate.
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2">
            In funzione del locale scelto dovrai inserire tutte le informazioni
            necessarie, ognuna suddivisa per sezione.
          </div>
          <h3 className="font-bold pb-2">Configurazione Cella frigo</h3>
          <div className="pb-2">
            Oltre alla sezione Anagrafica ti verrà richiesto di inserire le
            informazioni presenti anche nelle seguenti sezioni:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>a</ListItemIcon>
              <ListItemText>
                <strong>Caratteristiche</strong>, all’interno di questa sezione
                potrai indicare:
              </ListItemText>
            </ListItem>
            <List>
              <ListItem disablePadding sx={{ pl: 4 }}>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Categorie di prodotto</strong> che la tua Cella frigo
                  può conservare. Tale informazione comparirà all’interno della
                  card del locale. Avrai la possibilità di essere ancora più
                  preciso inserendo, in corrispondenza della categoria di
                  prodotto scelto, anche la{" "}
                  <strong>tipologia di prodotto</strong>. Non trovi la categoria
                  o il prodotto che desideri? Contattaci e saremo felici di
                  risponderti.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding sx={{ pl: 4 }}>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Caratteristiche cella frigo</strong> dove dovrai
                  indicare i dettagli tecnici del tuo locale. Non trovi alcune
                  informazioni che ritieni indispensabili? Contattaci e saremo
                  felici di risponderti.
                </ListItemText>
              </ListItem>
            </List>
            <ListItem disablePadding>
              <ListItemIcon>b</ListItemIcon>
              <ListItemText>
                <strong>Accessori</strong>, all’interno di questa sezione potrai
                indicare ulteriori dettagli del tuo locale.
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>c</ListItemIcon>
              <ListItemText>
                <strong>Gestione penali</strong>, Se un ospite desidera
                cancellare una prenotazione, può contattarti privatamente per
                inviare una richiesta di cancellazione. Puoi accettarla o
                rifiutarla a tua discrezione tenendo conto che:{" "}
                <strong>Rifiutandola</strong>, il Cliente non sarà rimborsato
                dell’importo a te accreditato in fase di prenotazione. L’
                importo che riceverai terrà conto della commissione, definita
                nel contratto firmato, che dovrai o hai pagato alla piattaforma;{" "}
                <strong>Accettandola</strong>, potrai rimborsare il Cliente
                totalmente tenendo conto che la commissione che dovrai o hai
                pagato non ti verrà rimborsata dalla piattaforma. Qualora
                volessi prevedere il pagamento di una penale puoi indicare la
                percentuale di penale che il Cliente dovrà pagarti in caso di
                richiesta di cancellazione. Anche in quest’ultimo caso la
                commissione che dovrai o hai pagato non ti verrà rimborsata
                dalla piattaforma.
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>d</ListItemIcon>
              <ListItemText>
                <strong>Periodo e capacità di stoccaggio</strong>, potrai
                selezionare la <strong>modalità di stoccaggio</strong> preferita
                (<strong>Totale</strong>, gli utenti potranno prenotare
                solamente tutto il locale; <strong>Parziale</strong>, gli utenti
                potranno prenotare totalmente o in parte porzioni del tuo
                locale), la modalità con cui gli utenti possono stoccare il
                prodotto, il periodo di disponibilità del tuo locale, i giorni
                minimi di condivisione e i costi di condivisione.
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2 font-bold"> Domande frequenti</div>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Posso aggiungere più periodi di disponibilità?
            </AlertTitle>
            Si, potrai configurare tutti i periodi di disponibilità che desideri
            cliccando sul tasto '<strong>Aggiungi periodo</strong>'. Fai
            attenzione, il primo ed ultimo giorno che selezioni devono
            coincidere con i giorni di check in e check out indicati in fase di
            configurazione Ubicazione! Ad esempio: se hai indicato solo il
            Lunedì come giorno di consegna e ritiro potrai selezionare solo un
            periodo che va da Lunedì a Lunedì; se hai indicato dal Lunedì al
            Venerdì come giorno di consegna e ritiro potrai selezionare tutti i
            giorni ad eccezione di Sabato e Domenica.
          </Alert>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Posso aggiungere a parità di periodo più modalità di stoccaggio?
            </AlertTitle>
            Si, se all’interno della tua cella frigo gestisci una modalità di
            stoccaggio differente (es: hai 1000 posti pallet 800 x 1200 mm; 500
            posti pallet 800 x 1200 mm) potrai configurare tutte assieme solo se
            hai selezionato una modalità di condivisione Parziale.
          </Alert>
          <h3 className="font-bold pb-2">
            Configurazione Container refrigerato
          </h3>
          <div className="pb-2">
            Oltre alla sezione Anagrafica ti verrà richiesto di inserire le
            informazioni presenti anche nelle seguenti sezioni:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>a</ListItemIcon>
              <ListItemText>
                <strong>Caratteristiche</strong>, all’interno di questa sezione
                potrai indicare le dimensioni del container, le temperature di
                esercizio ed altre informazioni.
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>b</ListItemIcon>
              <ListItemText>
                <strong>Accessori</strong>, all’interno di questa sezione potrai
                indicare ulteriori dettagli del tuo locale.
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>c</ListItemIcon>
              <ListItemText>
                <strong>Gestione penali</strong>, Se un ospite desidera
                cancellare una prenotazione, può contattarti privatamente per
                inviare una richiesta di cancellazione. Puoi accettarla o
                rifiutarla a tua discrezione tenendo conto che:{" "}
                <strong>Rifiutandola</strong>, il Cliente non sarà rimborsato
                dell’importo a te accreditato in fase di prenotazione. L’
                importo che riceverai terrà conto della commissione, definita
                nel contratto firmato, che dovrai o hai pagato alla piattaforma;
                <strong>Accettandola</strong>, potrai rimborsare il Cliente
                totalmente tenendo conto che la commissione che dovrai o hai
                pagato non ti verrà rimborsata dalla piattaforma. Qualora
                volessi prevedere il pagamento di una penale puoi indicare la
                percentuale di penale che il Cliente dovrà pagarti in caso di
                richiesta di cancellazione. Anche in quest’ultimo caso la
                commissione che dovrai o hai pagato non ti verrà rimborsata
                dalla piattaforma.
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>d</ListItemIcon>
              <ListItemText>
                <strong>Periodo e capacità di stoccaggio</strong>, potrai
                selezionare la modalità con cui gli utenti possono stoccare il
                prodotto, il periodo di disponibilità del tuo container, i
                giorni minimi di condivisione e i costi di condivisione.
              </ListItemText>
            </ListItem>
          </List>
          <h3 className="font-bold pb-2">
            Configurazione Locale non refrigerato
          </h3>
          <div className="pb-2">
            Oltre alla sezione Anagrafica ti verrà richiesto di inserire le
            informazioni presenti anche nelle seguenti sezioni:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>a</ListItemIcon>
              <ListItemText>
                <strong>Caratteristiche</strong>, all’interno di questa sezione
                potrai indicare le dimensioni del locale;
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>b</ListItemIcon>
              <ListItemText>
                <strong>Gestione penali</strong>, Se un ospite desidera
                cancellare una prenotazione, può contattarti privatamente per
                inviare una richiesta di cancellazione. Puoi accettarla o
                rifiutarla a tua discrezione tenendo conto che:{" "}
                <strong>Rifiutandola</strong>, il Cliente non sarà rimborsato
                dell’importo a te accreditato in fase di prenotazione. L’
                importo che riceverai terrà conto della commissione, definita
                nel contratto firmato, che dovrai o hai pagato alla piattaforma;{" "}
                <strong>Accettandola</strong>, potrai rimborsare il Cliente
                totalmente tenendo conto che la commissione che dovrai o hai
                pagato non ti verrà rimborsata dalla piattaforma. Qualora
                volessi prevedere il pagamento di una penale puoi indicare la
                percentuale di penale che il Cliente dovrà pagarti in caso di
                richiesta di cancellazione. Anche in quest’ultimo caso la
                commissione che dovrai o hai pagato non ti verrà rimborsata
                dalla piattaforma.
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>c</ListItemIcon>
              <ListItemText>
                <strong>Periodo e capacità di stoccaggio</strong>,potrai
                selezionare la <strong>modalità di stoccaggio</strong> preferita
                (Totale, gli utenti potranno prenotare solamente tutto il
                locale; Parziale, gli utenti potranno prenotare totalmente o in
                parte porzioni del tuo locale), la modalità con cui gli utenti
                possono stoccare il prodotto, il periodo di disponibilità del
                tuo locale, i giorni minimi di condivisione e i costi di
                condivisione.
              </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Sezione Ubicazione */}
      <Accordion
        expanded={expanded === "location-section"}
        onChange={handleChange("location-section")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold"
        >
          Sezione Ubicazione
        </AccordionSummary>
        <AccordionDetails>
          <div className="pb-2">
            L’ ubicazione configurata sarà visibile nella sezione{" "}
            <strong>Ubicazione</strong> nella quale è possibile:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>-</ListItemIcon>
              <ListItemText>
                visualizzare un recap delle informazioni inserite cliccando
                sull’icona{" "}
                <span>
                  <InfoIcon />
                </span>{" "}
                (Informazioni)
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>-</ListItemIcon>
              <ListItemText>
                modificare l’ ubicazione cliccando sull’icona{" "}
                <span>
                  <SettingsIcon />
                </span>{" "}
                (Modifica)
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>-</ListItemIcon>
              <ListItemText>
                eliminare l’ ubicazione cliccando sull’icona{" "}
                <span>
                  <DeleteIcon />
                </span>{" "}
                (Elimina). Attenzione, eliminando l’ ubicazione verranno
                eliminati automaticamente tutti i locali ad essa associati.
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2 font-bold"> Domande frequenti</div>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Posso recuperare l’ Ubicazione eliminata?
            </AlertTitle>
            No, non è possibile in alcun modo recuperare l’ Ubicazione
            cancellata. Sarà necessario procedere con una nuova configurazione
          </Alert>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Come identifico la sede legale?
            </AlertTitle>
            Accedi nella sezione <strong>Informazioni</strong> del tuo profilo
          </Alert>
        </AccordionDetails>
      </Accordion>

      {/* Sezione Locale fatto */}
      <Accordion
        expanded={expanded === "local-section"}
        onChange={handleChange("local-section")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold"
        >
          Sezione Locale
        </AccordionSummary>
        <AccordionDetails>
          <div className="pb-2">
            Il locale configurato sarà visibile nella sezione Locale nella quale
            è possibile:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>-</ListItemIcon>
              <ListItemText>
                visualizzare la scheda del locale cliccando sull’icona{" "}
                <span>
                  <LinkIcon />
                </span>{" "}
                (Pagina)
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>-</ListItemIcon>
              <ListItemText>
                modificare il locale cliccando sull’icona{" "}
                <span>
                  <SettingsIcon />
                </span>{" "}
                (Modifica)
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>-</ListItemIcon>
              <ListItemText>
                eliminare il locale cliccando sull’icona{" "}
                <span>
                  <DeleteIcon />
                </span>{" "}
                (Elimina).
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2">
            In corrispondenza di ogni locale è stata riportata la colonna
            ‘Stato’ al di sotto della quale sarà possibile vedere:
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="text-green-500" />
              </ListItemIcon>
              <ListItemText>
                all’ interno del tuo locale ci sono ancora posti disponibili che
                possono essere condivisi con altri utenti;
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="text-yellow-500" />
              </ListItemIcon>
              <ListItemText>
                all’ interno del tuo locale non ci sono posti disponibili che
                possono essere condivisi con altri utenti. Tutti i posti sono
                stati prenotati;
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <CircleIcon className="text-red-500" />
              </ListItemIcon>
              <ListItemText>
                non hai periodi disponibili per poter condividere il tuo locale.
                Il tuo locale non viene mostrato ai Clienti. Accedi nel tuo
                locali e procedi indicando nuove disponibilità.
              </ListItemText>
            </ListItem>
          </List>
          <div className="pb-2 font-bold"> Domande frequenti</div>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Cosa significa la colonna quantità?
            </AlertTitle>
            La colonna <strong>Quantità</strong> riporta sempre il totale dei
            posti configurati all’interno del locale indipendentemente dalla
            modalità di stoccaggio configurata. Tale quantità non riporta le
            quantità di posti disponibili. <strong>Nota</strong>: Nel caso di
            modalità di <strong>condivisione totale</strong>, nel caso non fosse
            stata fornita alcuna informazione, verrà visualizzata l’icona{" "}
            <span>
              <WarningIcon />
            </span>
            .
          </Alert>
          <Alert severity="info">
            <AlertTitle className="font-bold">
              Come posso sapere quanta quantità disponibile ha ancora il locale?
            </AlertTitle>
            Tale informazione non è presente nella sezione, ma è possibile
            derivarla visualizzando le prenotazioni ricevute.
          </Alert>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
