import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Topbar } from "./layout";
import { Home } from "./pages";
import { listArguments } from "./constant";
function App() {
  return (
    <div className="flex-col h-screen w-screen" style={{ padding: "0px" }}>
      <Topbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {listArguments.map((item) =>
            item.links.map((l) => (
              <Route
                key={l.title}
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
