import { useParams } from "react-router-dom";
export const Three = () => {
  const { username } = useParams();
  return (
    <div className="App">
      <h1> This Three for{username}</h1>
    </div>
  );
};
