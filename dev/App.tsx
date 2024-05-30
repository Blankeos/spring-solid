import type { Component } from "solid-js";
import "./App.css";
import { createSpring } from "src";

const App: Component = () => {
  const [progress, setProgress] = createSpring(0);
  const [radialProgress, setRadialProgress] = createSpring(0, {
    stiffness: 0.05,
  });
  const [xy, setXY] = createSpring({ x: 50, y: 50 }, { stiffness: 0.1, damping: 0.3 });
  const [date, setDate] = createSpring(new Date());

  function toggleProgress() {
    if (progress() === 0) setProgress(1);
    else setProgress(0);
  }
  function toggleRadialProgress() {
    if (radialProgress() === 0) setRadialProgress(1);
    else setRadialProgress(0);
  }
  function toggleXY() {
    if (xy().x === 50 && xy().y === 50) setXY({ x: 500, y: 500 });
    else setXY({ x: 50, y: 50 });
  }
  function toggleDate() {
    if (date().getDate() === new Date("2024-12-01").getDate()) setDate(new Date("2024-04-14"));
    else setDate(new Date("2024-12-01"));
  }

  return (
    <div class="container">
      <div class="container-buttons">
        <button onClick={toggleProgress}>Toggle progress</button>
        <button onClick={toggleRadialProgress}>Toggle Radial progress</button>
        <button onClick={toggleXY}>Toggle XY</button>
        <button onClick={toggleDate}>Toggle Date</button>
      </div>

      {/* Progress */}
      <div class="example-progress">
        <progress
          class="progress progress-primary w-56"
          value={progress() * 100}
          max="100"
        ></progress>

        <p class="text-primary">{(progress() * 100).toFixed(0)}%</p>
      </div>

      {/* Radial progress */}
      <div class="example-circular">
        <svg
          width="120"
          height="120"
          viewBox="0 0 250 250"
          class="circular-progress"
          style={`--progress:${radialProgress() * 100};`}
        >
          <circle class="bg"></circle>
          <circle class="fg"></circle>
        </svg>
        <span>{(radialProgress() * 100).toFixed(0)}%</span>
      </div>

      {/* <div
        class="circular-progress"
        style={`--value:${radialProgress() * 100};`}
        role="progressbar"
      >
      </div> */}

      {/* XY */}
      <div
        class="example-xy"
        style={{
          width: xy().x + "px",
          height: xy().y + "px",
        }}
      >
        {xy().x.toFixed(0)} x {xy().y.toFixed(0)}
      </div>

      {/* Date */}
      {/* <div class="badge badge-primary">{date()}</div> */}
    </div>
  );
};

export default App;
