import "./App.css";
import Component, { Demo, User } from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Component title="React Toolkit" />
      <User fullName={"Leo"} />
      <Demo username="Userrr" />
    </div>
  );
}

export default App;
