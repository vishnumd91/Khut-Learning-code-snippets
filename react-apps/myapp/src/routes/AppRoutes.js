import { Route, Routes } from "react-router-dom";
import App from "../App";
import { User } from "../components/Greet";
import Counter from "../components/likeDislike";
import Person from "../components/Person";
import TableComponent from "../components/Table";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<App />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/user" element={<User fullName={"Leo"} />}></Route>
        <Route path="/person" element={<Person />}></Route>
        <Route path="/table" element={<TableComponent />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
