import { Link } from "react-router-dom";
import "./App.css";
// import Component, { Demo, User } from "./components/Greet";
// import LikeDislike from "./components/likeDislike";
// import Person from "./components/Person";
// import TableComponent from "./components/Table";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
      {/*   
    <div className="d-flex justify-content-center align-items-center flex-column">
      <Component title="React Toolkit" />
      <User fullName={"Leo"} />
      <Demo username="User" />
      <button className="btn btn-primary">Primary</button>
    </div>
    <div className="container mt-5">
      <TableComponent />
    </div>
    <Person />
    <LikeDislike />
  
  */}

      <Link to="/counter">Counter</Link>
      <Link to="/user">User</Link>
      <Link to="/person">Person</Link>
      <Link to="/table">Table Component</Link>
    </div>
  );
}

export default App;
