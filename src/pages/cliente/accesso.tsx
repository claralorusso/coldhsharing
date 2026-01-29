import { FaqPage } from "../../shared";
import { accessoCliente } from "../../content/faq/it/cliente";

export const AccessoCliente = () => {
  return (
    <FaqPage
      title={accessoCliente.title}
      description={accessoCliente.description}
      items={accessoCliente.items}
      help={accessoCliente.help}
    />
  );
};
