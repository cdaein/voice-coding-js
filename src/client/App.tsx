import Ssam from "ssam-react";
import type { Sketch, SketchSettings } from "ssam";
import { sketch, settings } from "./sketches/sketch-ssam";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ flex: "1 1 50%", maxWidth: "50%" }}>
        {/* REVIEW: assertion due to type error: it's a bit annoying to mix ts & js files */}
        <Ssam
          sketch={sketch as Sketch<"2d">}
          settings={settings as SketchSettings}
        />
      </div>
      <div
        style={{
          flex: "1 1 50%",
        }}
      >
        <code>source code goes here</code>
      </div>
    </div>
  );
}

export default App;
