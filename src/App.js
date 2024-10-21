import "./App.css";
import { Checkout } from "./Checkout";
import { bg } from "./image";
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Checkout />
    </div>
  );
}

export default App;
