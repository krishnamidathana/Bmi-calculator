import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const bmiCalc = (e) => {
    e.preventDefault();
    if (weight === null || height === null) {
      alert("please enter weight & height");
    } else {
      let calculation = (weight / (height * height)) * 703;
      setBmi(calculation.toFixed(1));

      if (bmi < 25) {
        setMessage("you are under weight");
      } else if (bmi >= 25 && bmi <= 30) {
        setMessage("you are in healthy weight");
      } else {
        setMessage("you are over weight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>

        <form onSubmit={bmiCalc}>
          <div>
            <label>weight (lbs)</label>
            <input
              type="number"
              value={weight}
              placeholder="Enter Weight Value"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>heightt (in)</label>
            <input
              type="number"
              value={height}
              placeholder="Enter Height Value"
              onChange={(e) => setHeight(e.target.value)}
            />

            <div>
              <button type="submit" className="btn">
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-outline"
                onClick={reload}
              >
                Reload
              </button>

              <div className="center">
                <h3>Your BMI is {bmi}</h3>
                <p>{message}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
