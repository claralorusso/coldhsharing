import { FaqPage } from "../../shared";
import { supportoCliente } from "../../content/faq/it/cliente";

export const SupportoCliente = () => {
  return (
    <FaqPage
      title={supportoCliente.title}
      description={supportoCliente.description}
      items={supportoCliente.items}
      help={supportoCliente.help}
    />
  );
};
