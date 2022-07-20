import react from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button
        className="btn btn-info"
        onClick={() => {
          navigate("/courses/price", { state: "799" });
        }}
      >
        React
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          navigate("/courses/price", { state: "499" });
        }}
      >
        Angular
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          navigate("/courses/price", { state: "599" });
        }}
      >
        Vue
      </button>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export const Price = () => {
  const { state } = useLocation();
  return (
    <div className="App">
      <h1>price is 399{Location.state}</h1>
    </div>
  );
};
