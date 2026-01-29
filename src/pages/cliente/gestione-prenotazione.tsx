import { FaqPage } from "../../shared";
import { gestionePrenotazioneCliente } from "../../content/faq/it/cliente";

export const GestionePrenotazioneCliente = () => {
  return (
    <FaqPage
      title={gestionePrenotazioneCliente.title}
      description={gestionePrenotazioneCliente.description}
      items={gestionePrenotazioneCliente.items}
      help={gestionePrenotazioneCliente.help}
    />
  );
};
