import "./styles.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { One } from "./pages/one";
import { Two } from "./pages/two";
import { Three } from "./pages/three";
import { Courses, Price } from "./pages/four";
import { Error } from "./pages/Error";
export default function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <ul>
        <NavLink
          to="/two"
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "blue"
            };
          }}
        >
          <li>Two</li>
        </NavLink>

        <Link to="/courses">
          <li>Courses</li>
        </Link>
      </ul>
      <Routes>
        <Route exact path="/two" element={<Two />} />
        <Route path="/" element={<One />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="price" element={<Price />} />
          <Route path=":username" element={<Three />} />
        </Route>
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
