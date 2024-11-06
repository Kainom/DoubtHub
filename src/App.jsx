import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes/Routes";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <ToastContainer />
      <Rotas />
    </Router>
  );
}

export default App;
