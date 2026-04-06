import { useState } from "react";
import "../Css/Carta.css";

function Carta() {
  const [abierta, setAbierta] = useState(false);

  return (
    <div className="contenedor" onClick={() => setAbierta(true)}>
      
      {/* Corazones */}
      {abierta && (
        <div className="corazones">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="corazon"></span>
          ))}
        </div>
      )}

      {/* Sobre */}
      <div className={`sobre ${abierta ? "abrir" : ""}`}>
        <div className="tapa"></div>

        <div className={`carta ${abierta ? "mostrar" : ""}`}>
          <p>
            Dear you,<br /><br />
            Even when we're apart, you're always with me in every thought,
            every heartbeat. Life feels warmer, brighter, and more magical
            because of you.<br /><br />
            I don't need perfect words, because everything I feel for you
            is already written in my heart.<br /><br />
            Until then, know that I'm sending all my love in this little envelope.<br /><br />
            Forever yours ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carta;