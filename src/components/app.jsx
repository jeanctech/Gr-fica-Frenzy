import react from "../assets/react.svg";
import img_one from "../assets/1.png"
import "../styles/app.css";

function App() {
  return (
    <>
      <main id="main">
        <header id="main-header">
          <div id="game-container">
            <h1 id="game-title" className="font-bold text-4xl">Gráfica Frenzy</h1>
            <img id="game-img" src={react} width={60} alt="React"></img>
          </div>
            <br/>
            <div id="graph-container">
              <center><img src={img_one} width={3500} alt="img_one"></img></center>
              {/* Gráfica */}
              <center><small className="text-[#c5bcbc] text-2xl">Gráfica 1</small></center>
              <div id="feedback">
                {/* Retroalimentación */}
                <center><small className="text-[#51af70]">Retroalimentación</small></center>
              </div>
            </div>
            <br />
            <div id="level-container">
              {/* Contenido del nivel */}
              <small>Contenido del nivel</small>
            </div>
            <br />
            <div id="controls">
              {/* Controles del juego */}
              <button className="button-1" id="generate-function">
                <small>Generar función</small>
              </button>
              <small>
              <input
                className="p-2 input-1"
                id="user-input"
                type="text"
                placeholder="Ingresa la función"
              />
              </small>
              <button className="input-1" id="check-answer">
                <small>Verificar respuesta</small>
              </button>
            </div>
            <div id="social-media">
              <small>
              <button className="button-2" id="share-twitter">
                Compartir en Twitter
              </button>
              </small>
              <small>
              <button className="button-2" id="share-facebook">
                Compartir en Facebook
              </button>
              </small>
            </div>
        </header>
      </main>
    </>
  );
}

export default App;
