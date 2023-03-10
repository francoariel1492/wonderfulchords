// Variables del DOM
const chordSection = document.getElementById("chords");
const videoSection = document.getElementById("video");
const music = document.getElementById("music");
const btn = document.getElementById("btn");

// Array de progresiones de acordes
const chordProgressions = [
  ["bb", "g7", "c7", "f7"], 
  ["f", "dm", "bb", "c"], 
  ["g", "e", "a", "d"], 
  ["d", "bm", "em", "a"], 
  ["em", "c", "g", "d"], 
  ["c", "e7", "f", "fm"], 
  ["c","am","f","g7"], 
  ["c","edim","f","g7"],
  ["f","a7","dm","f7","bb","bbm","f","c7"],
  ["dm","gm","a","f","bb","e7","a"],
  ["c","f","d7","g"],
  ["dm", "g7", "c", "am", "f", "dm", "bb", "g7"],
  ["gm","cm","d7"],
  ["em","b7","bm7","a","c","g","a","b7"],
  ["am", "c", "d", "f", "am", "e7", "am"],
  ["c","cmaj7","c7","f","g6","a7","dm","f","g"],
];

// Funciones
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomProg = () => {
  music.classList.add("animate__fadeIn");
  chordSection.innerHTML = "";
  videoSection.innerHTML = "";

  const randomNum = getRandom(0, chordProgressions.length - 1);

  let chordSectionHTML = "";
  for (let i = 0; i < chordProgressions[randomNum].length; i++) {
    chordSectionHTML += `
      <div id="cardChord">
        <img src=https://ukulelego.com/ukulele-chord-progressions/images/${chordProgressions[randomNum][i]}.svg>
      </div>`;
  }
  chordSection.innerHTML = chordSectionHTML;

  videoSection.innerHTML = `
    <video controls>
      <source src="./videos/${chordProgressions[randomNum].join("")}.mp4" type="video/mp4">
    </video>`;
};

// Evento del Boton
btn.addEventListener("click", randomProg);