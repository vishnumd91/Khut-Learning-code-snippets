import "./App.css";
import Component, { Demo, User } from "./components/Greet";
import TableComponent from "./components/Table";

function App() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Component title="React Toolkit" />
        <User fullName={"Leo"} />
        <Demo username="User" />
        <button className="btn btn-primary">Primary</button>
      </div>
      <div className="container mt-5">
        <TableComponent />
      </div>
    </>
  );
}

export default App;
