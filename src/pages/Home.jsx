import { useEffect } from "react";
import "../Css/style.css";
import "../Css/style.mobile.css";

function Home() {

  useEffect(() => {

    fetch('/Img/treelove.svg')
      .then(res => {
        if (!res.ok) throw new Error("SVG no encontrado");
        return res.text();
      })
      .then(svgText => {

        const container = document.getElementById('tree-container');
        if (!container) return;

        container.innerHTML = svgText;

        const svg = container.querySelector('svg');
        if (!svg) return;

        // Ajuste de tamaño (IMPORTANTE)
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.style.width = "100%";
        svg.style.height = "100%";

        // 🔥 ELEMENTOS SEGUROS (no rompe)
        const elements = Array.from(
          svg.querySelectorAll('path, circle, polygon')
        );

        elements.forEach(el => {
          if (typeof el.getTotalLength === "function") {
            try {
              const length = el.getTotalLength();

              el.style.strokeDasharray = length;
              el.style.strokeDashoffset = length;
            } catch (e) {}
          }
        });

        // 🎬 ANIMACIÓN
        setTimeout(() => {
          elements.forEach((el, i) => {
            el.style.transition = `stroke-dashoffset 1s ease ${i * 0.03}s`;
            el.style.strokeDashoffset = 0;
          });

          setTimeout(() => {
            svg.classList.add('move-and-scale');
            showDedicationText();
            startFloatingObjects();
            showCountdown();
            playBackgroundMusic();
          }, 1200);
        }, 100);

      })
      .catch(err => console.error("ERROR SVG:", err));


    // ✍️ TEXTO
    function showDedicationText() {
      const container = document.getElementById('dedication-text');
      const text = `Para el amor de mi vida:

Desde el primer momento supe que eras tú...
Te amo más de lo que las palabras pueden expresar.`;

      let i = 0;

      function type() {
        if (i <= text.length) {
          container.textContent = text.slice(0, i);
          i++;
          setTimeout(type, text[i - 2] === '\n' ? 300 : 40);
        }
      }

      type();
    }


    // 💖 PARTÍCULAS (corazones flotando)
    function startFloatingObjects() {
      const container = document.getElementById('floating-objects');

      function spawn() {
        let el = document.createElement('div');
        el.className = 'floating-petal';

        el.style.left = `${Math.random() * 90}%`;
        el.style.top = `100%`;

        container.appendChild(el);

        setTimeout(() => {
          el.style.transition = "transform 6s linear, opacity 1s";
          el.style.transform = `translateY(-110vh) scale(${0.8 + Math.random()})`;
          el.style.opacity = 0.3;
        }, 50);

        setTimeout(() => el.remove(), 7000);

        setTimeout(spawn, 400);
      }

      spawn();
    }


    // ⏱️ CONTADOR
    function showCountdown() {
      const container = document.getElementById('countdown');
      const startDate = new Date('2024-08-03T00:00:00');

      function update() {
        const now = new Date();
        let diff = now - startDate;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));

        container.innerHTML =
          `Llevamos juntos: <b>${days}</b> días 💕`;

        container.classList.add('visible');
      }

      update();
      setInterval(update, 1000);
    }


    // 🎵 MÚSICA
    function playBackgroundMusic() {
      const audio = document.getElementById('bg-music');
      if (!audio) return;

      audio.volume = 0.7;
      audio.loop = true;

      audio.play().catch(() => {
        console.log("Autoplay bloqueado");
      });
    }

  }, []);


  return (
    <div>

      <div id="floating-objects"></div>

      <div className="dedication-text" id="dedication-text">
        <div className="signature" id="signature"></div>
      </div>

      <div className="countdown" id="countdown"></div>

      <div className="tree-container" id="tree-container"></div>

      <audio
        src="/Music/No.5 The Day I Met Her - Esther Abrami.mp3"
        id="bg-music"
        preload="auto"
      ></audio>

    </div>
  );
}

export default Home;