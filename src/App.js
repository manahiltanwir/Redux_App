import logo from "./logo.svg";
import "./App.css";
import Routing from "./Navigation/Routing";
import { AuthProvider } from "./@core/Context/AuthContext.jsx";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Routing />
      </Provider>
    </AuthProvider>
  );
}

export default App;
