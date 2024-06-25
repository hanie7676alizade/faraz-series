import { Button, ButtonSize, ButtonVariant, Pagination } from "./components";
import "./index.css";

function App() {
  return (
    <>
      app
      <Button
        label="button"
        variant={ButtonVariant.OUTLINED}
        size={ButtonSize.MD}
        onClick={() => {
          console.log("clicked");
        }}
      />
      <Pagination itemCount={95} itemPerPage={10} />
    </>
  );
}

export default App;
