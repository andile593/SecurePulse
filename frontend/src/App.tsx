import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./index.css"; // Tailwind styles

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
