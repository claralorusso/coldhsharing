import { FaqPage } from "../../shared";
import { registrazioneCliente } from "../../content/faq/it/cliente";

export const RegistrazioneCliente = () => {
  return (
    <FaqPage
      title={registrazioneCliente.title}
      description={registrazioneCliente.description}
      items={registrazioneCliente.items}
      help={registrazioneCliente.help}
    />
  );
};
