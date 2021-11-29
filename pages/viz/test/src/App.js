import { data } from "./data";
import { Violin } from "./Violin";

export default function App() {
  return (
    <div className="App">
      <h1>A basic violin plot built with React and D3</h1>
      <Violin data={data} width={400} height={400} />
    </div>
  );
}
