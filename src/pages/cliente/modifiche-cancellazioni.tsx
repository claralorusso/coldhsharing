import { FaqPage } from "../../shared";
import { modificheCancellazioniCliente } from "../../content/faq/it/cliente";

export const ModificheCancellazioniCliente = () => {
  return (
    <FaqPage
      title={modificheCancellazioniCliente.title}
      description={modificheCancellazioniCliente.description}
      items={modificheCancellazioniCliente.items}
      help={modificheCancellazioniCliente.help}
    />
  );
};
