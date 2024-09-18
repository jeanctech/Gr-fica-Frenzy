import { useState } from "react";
import Plot from "react-plotly.js";
import Favicon from "../assets/react.svg";
import "../styles/app.css";

const functions = [
  {
    m: 1,
    b: 0,
    label: "Nivel 1",
    hint: "La Pendiente es Positiva",
    solution: "y=x",
  },
  {
    m: -1,
    b: 0,
    label: "Nivel 2",
    hint: "La Pendiente es Negativa",
    solution: "y=-x",
  },
  {
    m: 2,
    b: 1,
    label: "Nivel 3",
    hint: "La Pendiente es 2 y El Intercepto es 1",
    solution: "y=2x+1",
  },
  {
    m: -2,
    b: -1,
    label: "Nivel 4",
    hint: "La Pendiente es -2 y El Intercepto es -1",
    solution: "y=-2x-1",
  },
  {
    m: 0.5,
    b: 2,
    label: "Nivel 5",
    hint: "La Pendiente es 0.5 y El Intercepto es 2",
    solution: "y=0.5x+2",
  },
  {
    m: -0.5,
    b: -2,
    label: "Nivel 6",
    hint: "La Pendiente es -0.5 y El Intercepto es -2",
    solution: "y=-0.5x-2",
  },
  { m: 3, b: 0, label: "Nivel 7", hint: "La pendiente es 3", solution: "y=3x" },
  {
    m: -3,
    b: 0,
    label: "Nivel 8",
    hint: "La Pendiente es -3",
    solution: "y=-3x",
  },
];

const App = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const updateLevel = (level) => {
    setCurrentLevel(level);
    setUserInput("");
    setMessage("");
    setIsCorrect(false);
    setShowHint(false);
  };

  const verifyAnswer = () => {
    const userAnswer = userInput.replace(/\s+/g, "").toLowerCase();
    const correctAnswer = functions[currentLevel].solution.toLowerCase();
    if (userAnswer === correctAnswer) {
      setMessage("¡Correcto!");
      setIsCorrect(true);
    } else {
      setMessage("Incorrecto - Intenta de Nuevo");
      setIsCorrect(false);
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const { m, b, hint, label } = functions[currentLevel];
  const x_values = [];
  const y_values = [];
  for (let x = -10; x <= 10; x += 0.1) {
    x_values.push(x);
    y_values.push(m * x + b);
  }

  return (
    <div className="container">
      <div className="container-header">
        <h1 className="header-title">Pages-Functions</h1>
        <img
          className="header-img"
          src={Favicon}
          width={50}
          alt="favicon-pages-functions"
        ></img>
      </div>
      <div className="h2-div">
        <h2 className="container-h2">{label}</h2>
      </div>
      <center className="container-plot">
        <Plot
          className="plot"
          data={[
            {
              x: x_values,
              y: y_values,
              type: "scatter",
              mode: "lines",
              line: { color: "lightblue" },
            },
          ]}
          layout={{
            paper_bgcolor: "#252525",
            plot_bgcolor: "#202020",
            font: { color: "white" },
            xaxis: {
              range: [-10, 10],
              gridcolor: "gray",
              zerolinecolor: "gray",
              linecolor: "white",
              tickcolor: "white",
            },
            yaxis: {
              range: [-10, 10],
              gridcolor: "gray",
              zerolinecolor: "gray",
              linecolor: "white",
              tickcolor: "white",
            },
            showlegend: false,
          }}
        />
      </center>
      <div className="container-level">
        <p className="controls-message" id="message">
          {message} 🏆
        </p>
        <p className="container-p">
          <span className="pp-span">Soluciones</span>
        </p>
        <button className="controls-button-level" onClick={toggleHint}>
          {showHint ? "Ocultar Pista" : "Mostrar Pista"}
        </button>
        {showHint && (
          <p className="container-p">
            <span className="p-span">Pista - </span>
            {hint}
          </p>
        )}
      <div className="controls">
        <div className="controls-div">
          <p className="container-p">
            <span className="p-span">Funciones</span>
          </p>
          <input
            className="controls-input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ingresar La Función..."
          />
          <br />
          </div>
        <div className="container-div">
          <button
            className="div-button"
            id="prevBtn"
            onClick={() => updateLevel(currentLevel - 1)}
            disabled={currentLevel === 0}
          >
            Anterior Nivel
          </button>
          <button
            className="controls-button"
            id="verifyBtn"
            onClick={verifyAnswer}
          >
            Verificar Respuesta
          </button>
          <button
            className="div-button"
            id="nextBtn"
            onClick={() => updateLevel(currentLevel + 1)}
            disabled={!isCorrect || currentLevel === functions.length - 1}
          >
            Siguiente Nivel
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default App;
