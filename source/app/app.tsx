import * as React from "react";
import * as ReactDOM from "react-dom";
import MsWindow from "./components/ms-windows/ms-window";
import Network from "./network/ws";
import url from "./network/config";

let a = new Network(url);

function CenterStage() {
  return (
    <div className="center-stage">
      <MsWindow />
    </div>
  );
}

function App() {
  return <CenterStage />;
}

export default App;

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
