import { Provider } from "react-redux";
import "./index.css";
import { SwitchRoute } from "./routes/SwitchRoute";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <SwitchRoute />
    </Provider>
  );
}

export default App;
