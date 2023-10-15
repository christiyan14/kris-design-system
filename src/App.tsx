import "./App.scss";
import json from ".././tokens.json";

export default function App() {
  return (
    <>
      <main className="main-container">
        <section className="hero-section">
          <div className="hero-section_title">{json?.hero.title.value}</div>
          <div className="hero-section_description">
            {json?.hero?.description.value}
          </div>
        </section>
      </main>
    </>
  );
}
