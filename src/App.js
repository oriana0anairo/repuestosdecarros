import logo from './logo.svg';
import './App.css';
import { Routers } from './rutas/rutas';
import { BrowserRouter } from "react-router-dom"
import { LitteraProvider } from "@assembless/react-littera"
import AppProvider from './proveedora/appProvider';
function App() {
  <script src="https://kit.fontawesome.com/de4460d3ca.js" crossorigin="anonymous"></script>
  return (
    <div className="App">
      <LitteraProvider locales={["en_US", "es_ES"]}>
        <AppProvider>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </AppProvider>
      </LitteraProvider>
    </div>
  );
}

export default App;
