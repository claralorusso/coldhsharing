import { Argument } from "./models";
import { Prenotazioni } from "./pages";

export const listArguments: Argument[] = [
  {
    title: "Prima pag",
    links: [
      {
        title: "Prenotazioni",
        path: "/prenotazioni",
        element: <Prenotazioni />,
      },
    ],
  },
];
