import "./App.css";
import DisplayImage from "./DisplayImage";

function App() {
  return (
    <div>
      <div className="App">
        <header className="heading">
          <h1>Spacetagram</h1>
          <p>Astronomical Picture of the Day by NASA's API</p>
        </header>
        <main>
          <DisplayImage />
        </main>
      </div>
      <footer>
        <p>
          Responsive App built by{" "}
          <a
            href="https://www.linkedin.com/in/manjiriphatak/"
            target="_blank"
            rel="noreferrer"
          >
            Manjiri Phatak
          </a>{" "}
          Open-sourced on{" "}
          <a
            href="https://github.com/manjiriphatak/NASA-APOD-API-APP"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          hosted on Netlify
        </p>
      </footer>
    </div>
  );
}

export default App;
