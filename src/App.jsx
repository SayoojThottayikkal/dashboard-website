import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouter from "./app/routes/MainRouter";
import Store from "./app/context/store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Store>
  );
}

export default App;
