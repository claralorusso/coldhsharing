import { FaqPage } from "../../shared";
import { informazioniPrenotazioneCliente } from "../../content/faq/it/cliente";

export const InformazioniPrenotazioneCliente = () => {
  return (
    <FaqPage
      title={informazioniPrenotazioneCliente.title}
      description={informazioniPrenotazioneCliente.description}
      items={informazioniPrenotazioneCliente.items}
      help={informazioniPrenotazioneCliente.help}
    />
  );
};
