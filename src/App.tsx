import "./index.css";
import Button, { ButtonSize, ButtonVariant } from "./components/Button/Button";

function App() {
  return (
    <>
      app
      <Button
        text="button"
        variant={ButtonVariant.ERROR}
        size={ButtonSize.MD}
        onClick={() => {
          console.log("clicked");
        }}
      />
    </>
  );
}

export default App;
