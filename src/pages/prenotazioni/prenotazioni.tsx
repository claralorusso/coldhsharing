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
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Prenotazioni = () => {
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
      <h1 className="text-xl font-bold pb-1">Prenotazioni</h1>
      <div className="pb-2">
        Come visualizzare le prenotazioni su Cold Sharing e come gestire
        richieste di prenotazioni.{" "}
      </div>
      <div>
        <Accordion
          expanded={expanded === "manage-booking"}
          onChange={handleChange("manage-booking")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Gestire le prenotazioni
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              La richiesta di prenotazione è una funzionalità che offre a chi
              gestisce Locali refrigerati il pieno controllo sulle richieste di
              prenotazione. A differenza delle prenotazioni a conferma
              immediata, che permettono di prenotare il locale refrigerato
              direttamente, le richieste di prenotazione prevedono l’invio da
              parte del potenziale Cliente di una richiesta, che può essere
              accettata o rifiutata.
            </div>
            <div className="pb-2">
              I Clienti possono vedere i locali che offrono la richiesta di
              prenotazione in fase di prenotazione solo se hai acquistato un
              abbonamento Standard o Premium. In fase di configurazione
              ‘Ubicazione’ nella sezione ‘Gestione richieste di prenotazione’ è
              possibile attivare o meno la funzionalità scegliendo tra ‘Voglio
              gestire la Richiesta di prenotazione’ e ‘Non voglio mai gestire la
              Richiesta di prenotazione pur acquistando il pacchetto Standard \
              Premium’. Tale funzionalità sarà valida per tutti i Locali
              appartenenti all’ Ubicazione.
            </div>
            <div className="pb-2">
              Nel caso si scegliesse l’opzione ‘Voglio gestire la Richiesta di
              prenotazione’ sarà possibile configurare automaticamente
              l’accettazione o il rifiuto di tutte le richieste che prevedono
              una richiesta di condivisione con check-in a più di quattro giorni
              dall’invio della richiesta.
            </div>
            <div className="pb-2">Ecco come funziona:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText primary="I Clienti che vogliono prendere in condivisione il tuo locale ti inviano una richiesta di prenotazione. Se la richiesta viene fatta in una data di check-in a più di quattro giorni dalla data della ricerca ti inviano una richiesta di prenotazione." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText primary="Ricevi una notifica della richiesta di prenotazione ed automaticamente verrà accettata o rifiutata a seconda della configurazione scelta." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText primary="Se accetti, la richiesta di prenotazione diventa a tutti gli effetti una prenotazione. Nel caso in cui, per il locale prenotato, fosse stata impostata la cancellazione gratuita il Cliente fino allo scadere della stessa potrà in autonomia cancellarla; qualora non fosse presente l’opzione della cancellazione gratuita la prenotazione sarà confermata da entrambe le parti. Se la richiesta viene fatta in una data di check-in superiore ai quattro giorni dalla data della ricerca ti inviano una richiesta di prenotazione." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>4</ListItemIcon>
                <ListItemText primary="Ricevi una notifica della richiesta di prenotazione ed avrai 48 ore di tempo per accettarla/rifiutarla. In assenza di un riscontro, la richiesta verrà automaticamente accettata o rifiutata in base alla preferenza impostata in fase di creazione dell’Ubicazione a cui il tuo locale è associato; anche il Cliente entro le prossime 48 ore dall’invio della richiesta avrà la possibilità di rifiutarla. " />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>5</ListItemIcon>
                <ListItemText primary="Se accetti, la richiesta di prenotazione diventa a tutti gli effetti una prenotazione. Nel caso in cui, per il locale prenotato, fosse stata impostata la cancellazione gratuita il Cliente fino allo scadere della stessa potrà in autonomia cancellarla; qualora non fosse presente l’opzione della cancellazione gratuita la prenotazione sarà confermata da entrambe le parti. " />
              </ListItem>
            </List>
            <div className="pb-2">
              Nel caso si scegliesse l’opzione ‘Non voglio mai gestire la
              Richiesta di prenotazione pur acquistando il pacchetto Standard \
              Premium’ non verrà attivata tale funzionalità.
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText primary="I Clienti che vogliono prendere in condivisione il tuo locale ti inviano una prenotazione immediata della prenotazione." />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText primary="Non sarà possibile accettare/rifiutare/annullare la prenotazione da ambo le parti. Nel caso fosse stata configurata la cancellazione gratuita solo il Cliente potrà annullare la prenotazione entro i tempi definiti." />
              </ListItem>
            </List>
            <div className="pb-2">
              La richiesta di prenotazione necessita quindi di più tempo di
              gestione rispetto alla prenotazione a conferma immediata e può
              comportare un minor numero di prenotazioni e potenzialmente minori
              entrate. Per comodità, è possibile passare da un’opzione all'altra
              a seconda delle esigenze della tua attività.
            </div>
            <div className="font-bold pb-2">
              Come funzionano i prezzi e i pagamenti
            </div>
            <div className="pb-2">
              Quando ricevi una richiesta di prenotazione, potrai consultare la
              stessa nella sezione <strong>Richieste di prenotazione</strong> se
              la condivisione non è iniziata o in{" "}
              <strong>Storico prenotazioni </strong>se la condivisione è
              iniziata o terminata.
            </div>
            <div className="pb-2">
              Il costo di condivisione è presente nella card visualizzata nelle
              sezioni succitate nel campo <strong>Totale accredito</strong> e
              rappresenta l’importo che riceverai, al netto della percentuale di
              trattenuta riportata nel contratto firmato, sul conto bancario
              inserito all’interno del tool di Stripe. Tale importo sarà erogato
              nel momento in cui la richiesta di prenotazione diventa
              prenotazione e la data potrà essere visualizzata nel campo{" "}
              <strong>Data accredito</strong> presente sempre nella stessa card.
            </div>
            <div className="pb-2">
              Ulteriori voci di costo visibili nella card sono:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Costo condivisione</strong>, rappresenta il costo
                  totale della condivisione giornaliera, determinato durante la
                  configurazione del locale, moltiplicato per il numero di
                  giorni prenotati dal Cliente;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Costo IVA</strong>, indica l’IVA che il Cliente ha
                  pagato sulla prenotazione ricevuta;
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  <strong>Costo Totale</strong>, è la somma delle voci
                  precedenti.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">Ecco come funziona:</div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Nel caso non fosse presente la cancellazione gratuita, quando
                  Il Cliente invia una richiesta di prenotazione e questa viene
                  accettata automaticamente o manualmente diventa a tutti gli
                  effetti una prenotazione. Nel campo 'Data di accredito' sarà
                  visualizzata la data di accettazione della richiesta. A
                  partire da quella data potrai ricevere il 'Totale accredito';
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Nel caso fosse presente la cancellazione gratuita, quando Il
                  Cliente invia una richiesta di prenotazione e questa viene
                  accettata automaticamente o manualmente si dovrà attendere la
                  fine del periodo della cancellazione gratuita per diventare a
                  tutti gli effetti una prenotazione. Nel campo 'Data di
                  accredito' sarà visualizzata la data successiva all’ultimo
                  giorno di cancellazione gratuita. A partire da quella data
                  potrai ricevere il 'Totale accredito';
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Nel caso non fosse presente la cancellazione gratuita e la
                  funzionalità di 'richiesta prenotazione' non fosse attiva,
                  quando Il Cliente invia una richiesta di prenotazione
                  automaticamente avverrà la conferma immediata. Nel campo 'Data
                  di accredito' sarà visualizzata la data in cui il Cliente ha
                  effettuato la prenotazione. A partire da quella data potrai
                  ricevere il 'Totale accredito';
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>-</ListItemIcon>
                <ListItemText>
                  Nel caso fosse presente la cancellazione gratuita e la
                  funzionalità di 'richiesta prenotazione' non fosse attiva,
                  quando Il Cliente invia una richiesta di prenotazione si dovrà
                  attendere la fine del periodo di cancellazione gratuita per
                  diventare a tutti gli effetti una prenotazione. Nel campo
                  'Data di accredito' sarà visualizzata la data successiva
                  all’ultimo giorno di cancellazione gratuita. A partire da
                  quella data potrai ricevere il 'Totale accredito';
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              Quando viene inviata una richiesta di prenotazione non sarà
              possibile modificare il costo di condivisione configurato nell’
              anagrafica locale. Eventuali modifiche all’anagrafica del locale
              saranno valide solo per le nuove richieste che riceverai.
            </div>
            <div className="font-bold pb-2">
              Come impostare la richiesta di prenotazione
            </div>
            <div className="pb-2">
              Puoi impostare la richiesta di prenotazione durante la
              registrazione del locale sulla nostra piattaforma. Ecco come:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <span className="font-bold">Profilo</span>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione
                  Ubicazione. Se non hai ancora creato l’ubicazione clicca sull’
                  icona{" "}
                  <span>
                    <AddIcon />
                  </span>{" "}
                  (Aggiungi Ubicazione) oppure entra in modifica cliccando
                  sull’icona{" "}
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  (Modifica).
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Vai, cliccando sul Tasto 'Avanti', nella sezione{" "}
                  <span className="font-bold">
                    Gestione richiesta di prenotazione
                  </span>{" "}
                  dove avrai la possibilità di selezionare:
                </ListItemText>
              </ListItem>
              <List>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemIcon>a</ListItemIcon>
                  <ListItemText>
                    <span className="font-bold">
                      Non voglio mai gestire la Richiesta di prenotazione pur
                      acquistando il pacchetto Standard \ Premium
                    </span>
                    , selezionando tale opzione non avrai la possibilità di
                    accettare o rifiutare una richiesta di prenotazione. Le
                    richieste che ti invierà il Cliente saranno automaticamente
                    sempre accettate;
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemIcon>b</ListItemIcon>
                  <ListItemText>
                    <span className="font-bold">
                      Voglio Gestire la richiesta di prenotazione
                    </span>
                    , selezionando tale opzione dovrai impostare l’accettazione
                    o il rifiuto automatico della richiesta di cancellazione se
                    viene fatta al più di quattro giorni dalla data di check in;
                    se la richiesta viene fatta in una data di check-in
                    superiore ai quattro giorni dalla data della ricerca,
                    riceverai una notifica e da quel momento avrai 48 ore di
                    tempo per accettarla o rifiutarla. In assenza di un riscontro, 
                    la richiesta verrà automaticamente accettata o rifiutata in base alla 
                    preferenza impostata in fase di creazione dell’Ubicazione a cui il tuo 
                    locale è associato. Anche il Cliente avrà la
                    possibilità di cancellare la richiesta entro le 48 ore
                    dall’invio e prima che tu fornisca un riscontro;
                  </ListItemText>
                </ListItem>
              </List>
              <ListItem disablePadding>
                <ListItemIcon>4</ListItemIcon>
                <ListItemText>
                  Clicca sul tasto <span className="font-bold">Salva</span> per
                  terminare la configurazione dell’Ubicazione.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              La Gestione della richiesta di prenotazione sarà comune su tutti i
              Locali che andrai ad associare sull’ Ubicazione. Non è possibile
              pertanto gestire una differente modalità di gestione su locali
              appartenenti alla stessa Ubicazione. Potrai iniziare a ricevere
              richieste di prenotazione dopo aver configurato almeno un Locale
              ed acquistato un abbonamento Standard o Premium.
            </div>
            <div className="font-bold pb-2">
              Come gestire la richiesta di prenotazione
            </div>
            <div className="pb-2">
              Puoi scegliere di accettare o rifiutare le richieste di
              prenotazione accedendo alla piattaforma o tramite notifica e-mail.{" "}
            </div>
            <div className="pb-2">
              Ecco come accettare o rifiutare le richieste di prenotazione
              accedendo alla piattaforma:
            </div>
            <div className="pb-2">
              Vai alla voce ‘Prenotazioni’ che trovi nella barra in alto e
              clicca su ‘Richieste di prenotazioni’. Individua la richiesta di
              interesse e scegli la tua preferenza.
            </div>
            <div className="pb-2">
              Ecco come accettare la richiesta di prenotazione tramite notifica
              e-mail:
            </div>
            <div className="pb-2">
              Entra nella mail ricevuta e clicca sul pulsante ‘Conferma
              prenotazione’. Qualora non fossi già loggato sarà necessario
              accedere prima alla piattaforma.
            </div>
            <div className="pb-2">
              Rifiutare molte richieste può avere un impatto negativo
              sull’opinione che i Clienti avranno dei tuoi Locali. Tieni presente 
              che, se non rispondi a una richiesta di prenotazione entro le prossime
               48 ore, la richiesta verrà automaticamente accettata o rifiutata 
               in base alla preferenza impostata in fase di creazione dell’Ubicazione 
               a cui il tuo locale è associato.
            </div>
            <div className="pb-2 font-bold"> Domande frequenti</div>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                I miei locali sono idonei per la richiesta di prenotazione?
              </AlertTitle>
              Non esistono locali idonei e non idonei. Assicurati di avere il
              tuo locale sempre pronto per avere sempre un impatto positivo
              sull’opinione che i Clienti avranno sul tuo locale.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Quali notifiche riceverò?
              </AlertTitle>
              <div>Ti invieremo una e-mail se:</div>
              <div>- Hai ricevuto una nuova richiesta di prenotazione</div>
              <div>- Hai accettato o rifiutato una richiesta di prenotazione</div>
              <div>- Non hai fornito riscontro entro le 48 ore</div>{" "}
              <div>- Il Cliente ha annullato la richiesta di prenotazione</div>
            </Alert>
              <Alert severity="info">
                <AlertTitle className="font-bold">
                  Cosa succede se un cliente prenota più locali refrigerati contemporaneamente?
                </AlertTitle>
                Quando un cliente seleziona più locali refrigerati appartenenti allo stesso profilo,
                le prenotazioni vengono inviate nello stesso momento ma gestite come richieste separate.
                Ogni prenotazione segue un flusso di gestione autonomo.
                Se è attiva la richiesta di prenotazione, puoi valutare ciascuna richiesta singolarmente,
                accettandone una e rifiutandone un’altra.
                L’accettazione di una prenotazione non comporta automaticamente
                l’accettazione delle altre.
              </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Posso gestire delle richieste sovrapposte?
              </AlertTitle>
              Quando ricevi una richiesta di prenotazione, blocchiamo
              automaticamente la disponibilità del tuo locale. Ciò significa che
              lo spazio nel tuo locale risulterà impegnato e non prenotabile da
              altri Clienti fino a che non si fornirà un riscontro. In caso di
              accettazione lo spazio risulterà impegnato fino alla fine della
              condivisione; in caso di rifiuto lo spazio risulterà
              immediatamente disponibile.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Perché dovrei rispondere alle richieste di prenotazione?
              </AlertTitle>
              Ti consigliamo di accettare o rifiutare le richieste di
              prenotazione il più rapidamente possibile per offrire ai clienti
              un’esperienza ottimale. Apprezzeranno una risposta rapida da parte
              tua e avranno un'opinione più positiva di te e dei tuoi locali,
              anche se rifiuti la loro richiesta. Non rispondere alle richieste
              di prenotazione porta a un accumulo di richieste, che poi dovrai
              comunque gestire, e potenzialmente a meno prenotazioni ed entrate.
            </Alert>
            <Alert severity="info">
              <AlertTitle className="font-bold">
                Cosa succede se non rispondo a una richiesta di prenotazione?
              </AlertTitle>
              In assenza di un riscontro, la richiesta verrà automaticamente accettata o 
              rifiutata in base alla preferenza impostata in fase di creazione dell’Ubicazione 
              a cui il tuo locale è associato.
            </Alert>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "manage-limit"}
          onChange={handleChange("manage-limit")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="font-bold"
          >
            Impostare le restrizioni sulle prenotazioni
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Le restrizioni su una prenotazione ti permettono di garantire:
            </div>
            <div className="pb-2 font-bold">
              Gestione delle date di check in e check out
            </div>
            <div className="pb-2">
              Assicurano che tu possa garantire attività di carico e scarico
              merce presso il tuo locale. In fase di configurazione dell’
              Ubicazione, le cui impostazioni saranno valide per tutti i locali
              ad esso associati, ti permettono di definire i giorni della
              settimana in cui puoi svolgere le attività di check in e check
              out. Per garantire un servizio più efficiente nello stesso giorno
              dovrai garantire entrambe le attività e definire un range di
              orario. Se in alcuni giorni non hai la possibilità di fare i
              check-in o i check-out su richieste di prenotazioni non ancora
              ricevute, puoi modificarle in qualsiasi momento per evitare che i
              clienti possano fare una prenotazione con arrivo o partenza in
              quelle date.
            </div>
            <div className="pb-2">
              Puoi impostare le date di check in e check out sulla nostra
              piattaforma. Ecco come:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <span className="font-bold">Profilo</span>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione
                  Ubicazione. Se non hai ancora creato l’ubicazione clicca sull’
                  icona{" "}
                  <span>
                    <AddIcon />
                  </span>{" "}
                  (Aggiungi Ubicazione) oppure entra in modifica cliccando
                  sull’icona{" "}
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  (Modifica).
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Vai, cliccando sul Tasto 'Avanti', nella sezione{" "}
                  <span className="font-bold">Checkin/checkout</span> dove avrai
                  la possibilità di configurare i giorni e il relativo range di
                  orari.
                </ListItemText>
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>4</ListItemIcon>
                <ListItemText>
                  Clicca sul tasto <span className="font-bold">Salva</span> per
                  terminare la configurazione dell’Ubicazione.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 ">
              I giorni di check in e check out limitano la ricerca del tuo
              locale. Offrendo un numero maggiore di giorni ti permetterà di
              ricevere più prenotazioni.
            </div>
            <div className="pb-2 font-bold">
              Gestione della richiesta di prenotazione
            </div>
            <div className="pb-2">
              Permette di evitare che il Cliente prenoti con conferma immediata
              la condivisione del tuo locale il giorno stesso della ricerca o al
              più quattro giorni dalla ricerca. In fase di configurazione dell’
              Ubicazione, le cui impostazioni saranno valide per tutti i locali
              ad esso associati, potrai definire se attivare la funzionalità di
              richiesta di prenotazione permettendoti di accettare o rifiutare
              una richiesta di prenotazione entro le 48 ore successive alla
              richiesta.
            </div>
            <div className="pb-2">
              Puoi impostare la richiesta di prenotazione sulla nostra
              piattaforma, ecco come:{" "}
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <span className="font-bold">Profilo</span>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione
                  Ubicazione. Se non hai ancora creato l’ubicazione clicca sull’
                  icona{" "}
                  <span>
                    <AddIcon />
                  </span>{" "}
                  (Aggiungi Ubicazione) oppure entra in modifica cliccando
                  sull’icona{" "}
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  (Modifica).
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Vai, cliccando sul Tasto 'Avanti', nella sezione{" "}
                  <span className="font-bold">
                    Gestione richiesta di prenotazione
                  </span>{" "}
                  dove avrai la possibilità di selezionare:
                </ListItemText>
              </ListItem>
              <List>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemIcon>a</ListItemIcon>
                  <ListItemText>
                    <span className="font-bold">
                      Non voglio mai gestire la Richiesta di prenotazione pur
                      acquistando il pacchetto Standard \ Premium
                    </span>
                    , selezionando tale opzione non avrai la possibilità di
                    accettare o rifiutare una richiesta di prenotazione. Le
                    richieste che ti invierà il Cliente saranno automaticamente
                    sempre accettate;
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemIcon>b</ListItemIcon>
                  <ListItemText>
                    <span className="font-bold">
                      Voglio Gestire la richiesta di prenotazione
                    </span>
                    , selezionando tale opzione dovrai impostare l’accettazione
                    o il rifiuto automatico della richiesta di cancellazione se
                    viene fatta al più di quattro giorni dalla data di check in;
                    se la richiesta viene fatta in una data di check-in
                    superiore ai quattro giorni dalla data della ricerca,
                    riceverai una notifica e da quel momento avrai 48 ore di
                    tempo per accettarla o rifiutarla. In assenza di un riscontro, 
                    la richiesta verrà automaticamente accettata o rifiutata in base 
                    alla preferenza impostata in fase di creazione dell’Ubicazione 
                    a cui il tuo locale è associato. Anche il Cliente avrà la
                    possibilità di cancellare la richiesta entro le 48 ore
                    dall’invio e prima che tu fornisca un riscontro;
                  </ListItemText>
                </ListItem>
              </List>
              <ListItem disablePadding>
                <ListItemIcon>4</ListItemIcon>
                <ListItemText>
                  Clicca sul tasto <span className="font-bold">Salva</span> per
                  terminare la configurazione dell’Ubicazione.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2">
              La Gestione della richiesta di prenotazione sarà comune su tutti i
              Locali che andrai ad associare sull’ Ubicazione. Non è possibile
              pertanto gestire una differente modalità di gestione su locali
              appartenenti alla stessa Ubicazione. Potrai iniziare a ricevere
              richieste di prenotazione dopo aver configurato almeno un Locale
              ed acquistato un abbonamento Standard o Premium.
            </div>
            <div className="font-bold pb-2">
              Gestione dell’ idoneità del tuo locale
            </div>
            <div className="pb-2">
              {" "}
              Avrai la possibilità di indicare l’idoneità del prodotto che il
              tuo locale può stoccare, specificando le caratteristiche e gli
              accessori presenti nello stesso al fine di garantire al Cliente
              maggior trasparenza e affidabilità del tuo locale.{" "}
            </div>
            <div className="pb-2">
              Puoi impostare le caratteristiche e gli accessori sulla nostra
              piattaforma, ecco come:{" "}
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <span className="font-bold">Profilo</span>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione
                  Ubicazione. Se non hai ancora creato l’ubicazione clicca sull’
                  icona{" "}
                  <span>
                    <AddIcon />
                  </span>{" "}
                  (Aggiungi Ubicazione) oppure entra in modifica cliccando
                  sull’icona{" "}
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  (Modifica).
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Vai, cliccando sul Tasto 'Avanti', nella sezione{" "}
                  <span className="font-bold">Caratteristiche</span> dove
                  indicare specifiche informazioni riguardo il tuo locale; nella
                  sezione <span className="font-bold">Accessori</span> potrai
                  indicare gli accessori presenti nel tuo locale.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>4</ListItemIcon>
                <ListItemText>
                  Clicca sul tasto <span className="font-bold">Salva</span> per
                  terminare la configurazione dell’Ubicazione.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold">
              Gestione della disponibilità e modalità di condivisione
            </div>
            <div className="pb-2">
              Limitano il numero di prenotazioni in base alla disponibilità
              effettiva del tuo locale e alla modalità di condivisione
              preferita. In fase di configurazione del Locale avrai la
              possibilità di definire le modalità di condivisione e stoccaggio,
              il periodo di disponibilità, i giorni minimi che devono essere
              prenotati per avviare la condivisione, la capienza massima dei
              tuoi locali.
              <div className="pb-2">
                Puoi impostare le disponibilità e le modalità di condivisione
                sulla nostra piattaforma, ecco come:{" "}
              </div>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>1</ListItemIcon>
                  <ListItemText>
                    Posizione il cursore sulla foto del tuo Profilo che si trova
                    alla sinistra del tasto Homepage posizionato nella barra in
                    alto e clicca su <span className="font-bold">Profilo</span>.
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>2</ListItemIcon>
                  <ListItemText>
                    Scorri verso il basso fino a raggiungere la sezione
                    Ubicazione. Se non hai ancora creato l’ubicazione clicca
                    sull’ icona{" "}
                    <span>
                      <AddIcon />
                    </span>{" "}
                    (Aggiungi Ubicazione) oppure entra in modifica cliccando
                    sull’icona{" "}
                    <span>
                      <SettingsIcon />
                    </span>{" "}
                    (Modifica).
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>3</ListItemIcon>
                  <ListItemText>
                    Vai, cliccando sul Tasto 'Avanti', nella sezione{" "}
                    <span className="font-bold">
                      Periodo e capacità di stoccaggio
                    </span>{" "}
                    dove indicare specifiche informazioni riguardo la
                    disponibilità e le modalità di condivisione.
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>4</ListItemIcon>
                  <ListItemText>
                    Clicca sul tasto <span className="font-bold">Salva</span>{" "}
                    per terminare la configurazione dell’Ubicazione.
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "manage-edit"}
          onChange={handleChange("manage-edit")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="font-bold"
          >
            Gestire le modifiche e le cancellazioni
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              All’ interno di questa sezione sono illustrate le logiche di
              gestione di modifica o cancellazione.
            </div>
            <div className="pb-2 font-bold">
              Cancellazione e gestione della penale
            </div>
            <div className="pb-2">
              Se un ospite desidera cancellare una prenotazione, può contattarti
              privatamente per inviare una richiesta di cancellazione. Puoi
              accettarla o rifiutarla a tua discrezione tenendo conto che:
            </div>
            <div className="pb-2">
              - Rifiutandola, il Cliente non sarà rimborsato dell’importo a te
              accreditato in fase di prenotazione. L’ importo che riceverai
              terrà conto della commissione, definita nel contratto firmato, che
              dovrai o hai pagato alla piattaforma;
            </div>
            <div className="pb-2">
              - Accettandola, potrai rimborsare il Cliente totalmente tenendo
              conto che la commissione che dovrai o hai pagato non ti verrà
              rimborsata dalla piattaforma. Qualora volessi prevedere il
              pagamento di una penale è possibile configurare in piattaforma la
              percentuale di penale che il Cliente dovrà pagarti in caso di
              richiesta di cancellazione. Anche in quest’ultimo caso la
              commissione che dovrai o hai pagato non ti verrà rimborsata dalla
              piattaforma.
            </div>
            <div className="pb-2 font-bold">Gestione delle Penali</div>
            <div className="pb-2">
              Puoi impostare la gestione di una penale sulla nostra piattaforma,
              ecco come:{" "}
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <span className="font-bold">Profilo</span>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione Locale. Se
                  non hai ancora creato il locale clicca sull’ icona{" "}
                  <span>
                    <AddIcon />
                  </span>{" "}
                  (Aggiungi Locale) oppure entra in modifica cliccando
                  sull’icona{" "}
                  <span>
                    <SettingsIcon />
                  </span>{" "}
                  (Modifica).
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Vai, cliccando sul Tasto 'Avanti', nella sezione{" "}
                  <span className="font-bold">Gestione penali</span> dove
                  indicare la percentuale di penale che il Cliente dovrà
                  pagarti. Tale percentuale dovrai calcolarla sul prezzo della
                  condivisione e potrà variare in funzione della data di check
                  in. Cliccando sul tasto Aggiungi potrai in autonomia indicare
                  il numero di giorni prima della condivisione e la relativa
                  penale. Tale gestione verrà notificata al Cliente a valle
                  della prenotazione e potrà essere consultata nella card della
                  prenotazione presente nella pagina{" "}
                  <span className="font-bold">Le mie prenotazioni</span>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>4</ListItemIcon>
                <ListItemText>
                  Clicca sul tasto <span className="font-bold">Salva</span> per
                  terminare la configurazione del locale.
                </ListItemText>
              </ListItem>
            </List>
            <div className="pb-2 font-bold">Modifica della prenotazione</div>
            <div className="pb-2">
              Potrebbe capitare che i tuoi clienti vogliano modificare qualche
              dettaglio della prenotazione, come ad esempio la durata del
              soggiorno. Modifiche come questa possono non possono essere
              apportate prima del check-in, ma potrai comunicare al Cliente ad
              effettuare una nuova prenotazione.
            </div>
            <div className="pb-2 font-bold">
              Modificare altri aspetti della prenotazione
            </div>
            <div className="pb-2">
              È possibile fare modifiche anche allo stato di una prenotazione.
              Ad esempio, puoi chiederci di cancellarla oppure puoi segnalare un
              mancato arrivo, con l’approvazione dell’ospite.
            </div>
            <div className="pb-2 font-bold">Rifiutare una prenotazione</div>
            <div className="pb-2">
              Tutte le prenotazioni devono essere onorate dalla struttura.
              Pertanto non possono essere da te cancellate. In determinate
              situazioni, ad esempio nel caso in cui sospetti che una
              prenotazione sia fraudolenta, puoi adottare delle misure per
              proteggerti, impostando{" "}
              <span className="font-bold">
                condizioni e penali di cancellazione
              </span>{" "}
              e attivando la funzionalità di{" "}
              <span className="font-bold">
                Gestione richiesta di prenotazione
              </span>
              .
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "manage-customers"}
          onChange={handleChange("manage-customers")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="font-bold"
          >
            Comunicare con i Clienti
          </AccordionSummary>
          <AccordionDetails>
            <div className="pb-2">
              Le nostre ricerche mostrano che i Clienti apprezzano le risposte
              rapide alle richieste e ai messaggi. Avrai a disposizione la
              messaggistica presente in piattaforma per comunicare in qualsiasi
              momento con il Cliente. Ad ogni messaggio riceverai una notifica
              alla e-mail con cui ti sei registrato.{" "}
            </div>
            <div className="pb-2">
              Se desideri modificare l’indirizzo e-mail su cui ricevere queste
              modifiche potrai modificarla, ecco come:
            </div>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText>
                  Posizione il cursore sulla foto del tuo Profilo che si trova
                  alla sinistra del tasto Homepage posizionato nella barra in
                  alto e clicca su <span className="font-bold">Profilo</span>.
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText>
                  Scorri verso il basso fino a raggiungere la sezione
                  Informazioni e cliccare sull’ icona{" "}
                  <span className="font-bold">Modifica informazioni</span>.
                  Potrai aggiungere un nuovo indirizzo cliccando su{" "}
                  <span className="font-bold">
                    Email ricezione comunicazione
                  </span>
                  .
                </ListItemText>
              </ListItem>

              <ListItem disablePadding>
                <ListItemIcon>3</ListItemIcon>
                <ListItemText>
                  Clicca sul tasto <span className="font-bold">Conferma</span>
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
