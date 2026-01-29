import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Topbar } from "./layout";
import { Home } from "./pages";
import { listArgumentsFornitore, listArgumentsCliente } from "./constant";
import { HomeCliente } from "./pages/cliente/home-cliente";
function App() {
  return (
    <div className="flex-col h-screen w-screen" style={{ padding: "0px" }}>
      <Topbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fornitore" element={<Home />} />
          <Route path="/cliente" element={<HomeCliente />} />
          {listArgumentsFornitore.map((item) =>
            item.links.map((l) => (
              <Route
                key={l.title}
                path={`${l.path}/:section`}
                element={l.element}
              />
            ))
          )}

          {listArgumentsCliente.map((item) =>
            item.links.map((l) => (
              <Route
                key={`cliente-${l.title}`}
                path={`${l.path}/:section`}
                element={l.element}
              />
            ))
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
