import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Day1/Header";
import AboutMe from "./components/Day1/AboutMe";
import Footer from "./components/Day1/Footer";

function App() {
  const name = "Courtney";
  const age = 34;
  const rich = "false";
  return (
    <div className="App">
      <h1>Welcome to React, {name}.</h1>
      <h2>We just modified our root App component.</h2>
      <Header name={name} age={age} rich={rich} />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
