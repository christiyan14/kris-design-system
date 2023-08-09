import "./App.scss";
import Button from "./components/button/Button";

function App() {
  return (
    <>
      <section className="button-section">
        <Button label="Button" />

        <Button label="Button" type="secondary" />
      </section>
    </>
  );
}

export default App;
