import "./App.css";
import DisplayImage from "./DisplayImage";

function App() {
  return (
    <div className="App">
      <header className="heading">
        <h1>Spacetagram</h1>
        <p>Astronomical Picture of the Day by NASA's API</p>
      </header>
      <main>
        <DisplayImage />
      </main>
    </div>
  );
}

export default App;
//get current date
//pass current date in apiUrl for search
//display details- title, explaination and picture
//add like unlike feature.
//update style.css
