import "./App.css";
import { ProviderContext } from "./components/ProviderContext";
import SelectCity from "./components/SelectCity";
import WeatherShow from "./components/WeatherShow/WeatherShow";

function App() {
  return (
    <div className="App">
      <ProviderContext>
        <SelectCity />
        <WeatherShow />
      </ProviderContext>
    </div>
  );
}

export default App;
