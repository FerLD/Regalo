import React, { useState } from "react";
import "../Css/Nuevo.css";

function Nuevo() {
  const correctPassword = "0616";

  const [input, setInput] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [play, setPlay] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // 💙 Floating hearts
  const [hearts] = useState(() =>
    [...Array(20)].map(() => ({
      left: Math.random() * 100,
      duration: 5 + Math.random() * 15,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 5
    }))
  );

  const enterDigit = (digit) => {
    if (!hasStarted) {
      setPlay(true);
      setHasStarted(true);
    }

    if (input.length < 4) {
      const newInput = input + digit;
      setInput(newInput);

      if (newInput.length === 4) {
        if (newInput === correctPassword) {
          setIsUnlocked(true);
        } else {
          alert("Incorrect password, try again");
          setInput("");
        }
      }
    }
  };

  const deleteDigit = () => {
    setInput(input.slice(0, -1));
  };

  const display = input.padEnd(4, "•");

  return (
    <>
      {/* 🎵 AUDIO */}
      {play && (
        <audio autoPlay loop>
          <source src="/src/Sound/Allofme.mp3" type="audio/mpeg" />
        </audio>
      )}

      {/* 💙 FLOATING HEARTS */}
      <div className="floating-hearts">
        {hearts.map((heart, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
              width: `${heart.size}px`,
              height: `${heart.size}px`
            }}
          ></span>
        ))}
      </div>

      {/* 🔒 PASSWORD SCREEN */}
      {!isUnlocked ? (
        <div className="screen password-screen active">
          <h2>Bienvenida mi vida  introduce la contraseña</h2>

          <div className="input-display">{display}</div>

          <div className="keypad">
            {["1","2","3","4","5","6","7","8","9"].map((num) => (
              <button key={num} className="key" onClick={() => enterDigit(num)}>
                {num}
              </button>
            ))}

            <div></div>

            <button className="key" onClick={() => enterDigit("0")}>
              0
            </button>

            <div>
              <button className="key delete" onClick={deleteDigit}>
                ←
              </button>
            </div>
          </div>

          {/* 💡 HINT BUTTON */}
          <button 
            className="hint-button" 
            onClick={() => setShowHint(!showHint)}>
              Pista 
          </button>

          {/* 📦 HINT BOX */}
          {showHint && (
            <div className="hint-box">
              <p><strong>Bienvenida Mi Vida  💌</strong></p>
              <p>Para descubrir el código, piensa en los digitos que son muy especiales para ambos.
                Suerte Muñeca
              </p>
            </div>
          )}
        </div>
      ) : (
        /* 💌 LETTER SCREEN */
        <div className="screen active">
          <div className="notepad">
            <h3>Abril 06, 2026</h3>
            <h4 className="title">Amor mío</h4>

            <p>
              Si el cielo tuviera voz, diría tu nombre al amanecer,
              y si el viento pudiera hablar, me contaría cómo te aprendí a querer.
              Porque desde que llegaste, cambiaste mi forma de ver,
              ahora todo es más bonito… simplemente por tenerte a ti en mi ser.
            </p>

            <p>
              Eres verso que en mi alma se niega a terminar,
              la historia más hermosa que no dejo de contar.
              Eres calma en mis tormentas, mi razón y mi verdad,
              el latido que me guía cuando pierdo claridad.
            </p>

            <p>
            En tus ojos descubrí un universo sin final,
            donde habita mi refugio, donde todo es especial.
            Y en tu risa encontré la melodía más sincera,
            esa que sana mis días y mi alma desespera.  
            </p>

            <p>
            Te amo en cada instante, en silencio y al hablar,
            te amo en lo sencillo, en reír y en llorar.
            Te amo cuando el mundo parece derrumbarse sin razón,
            porque incluso en la oscuridad quiero ser la luz que guie. 
            </p>

            <p>
                Si algún día dudas, mírame y lo vas a entender,
              que mi vida tiene sentido solo por volverte a ver.
              Que no hay tiempo ni distancia que me haga cambiar,
              porque amarte, vida mía… es mi forma de respirar.
            </p>

            <p>
              Y si el destino me diera la oportunidad de elegir,
              te elegiría en cada vida, en cada forma de existir.
              Porque lo nuestro no es casualidad ni simple emoción,
              es un lazo que nace del alma… y vive en el corazón.
            </p>


            <p>Para siempre tuyo tu Esposo que te ama con todo su corazón, 
                felices dos meses mi vida ♡</p>
          </div>

          {/* 🃏 CARDS */}
          <div className="cards-container">

            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img src="/Img/Reverso-roja.jpg" alt="Card back" />
                </div>
                <div className="card-back">
                  <img src="/Img/A-roja.jpg" alt="Card front" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img src="/Img/Reverso-azul.jpg" alt="Card back" />
                </div>
                <div className="card-back">
                  <img src="/Img/K-negra.jpg" alt="Card front" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img src="/Img/Reverso-roja.jpg" alt="Card back" />
                </div>
                <div className="card-back">
                  <img src="/Img/K-roja.jpg" alt="Card front" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img src="/Img/Reverso-azul.jpg" alt="Card back" />
                </div>
                <div className="card-back">
                  <img src="/Img/Q-negra.jpg" alt="Card front" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img src="/Img/Reverso-roja.jpg" alt="Card back" />
                </div>
                <div className="card-back">
                  <img src="/Img/Q-roja.jpg" alt="Card front" />
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Nuevo;