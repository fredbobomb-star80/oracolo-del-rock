


// =====================================
//   MOTORE CARTE & RISPOSTE DELL'ORACOLO
//   (file dedicato, separato dall'HTML)
// =====================================

// Ogni oggetto = una risposta dell'Oracolo
// id        → numero progressivo / codice interno
// code      → codice carta (001, 084, 203...)
// text      → testo della risposta
// cardImage → nome file immagine dentro /cards
// (per ora esempio con poche risposte)



// =====================================
//   MOTORE CARTE & RISPOSTE DELL'ORACOLO
// =====================================

const ORACOLO_RISPOSTE = [
  {
    id: 1,
    code: "001",                   
    text: "Sì, ma hai rotto il cazzo.",
    cardImage: "001.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
  {
    id: 84,
    code: "084",
    text: "È il momento di uscire con il tuo nuovo album, qualunque esso sia.",
    cardImage: "084.png",
    videoId: "Fxxxxxxxxx"      // <--- QUI METTI IL VIDEO GIUSTO
  },
  {
    id: 129,
    code: "129",
    text: "Potrebbe cambiare la tua vita.",
    cardImage: "129.png",
    videoId: "Yxxxxxxxxx"
  },
  {
    id: 203,
    code: "203",
    text: "Non oggi, non adesso, no, non ora.",
    cardImage: "203.png",
    videoId: "Pxxxxxxxxx"
  }
];

// Restituisce una risposta casuale
function pescaRispostaCasuale() {
  if (!ORACOLO_RISPOSTE.length) return null;
  const idx = Math.floor(Math.random() * ORACOLO_RISPOSTE.length);
  return ORACOLO_RISPOSTE[idx];
}

// Trova la risposta per code
function trovaRispostaPerCode(code) {
  return ORACOLO_RISPOSTE.find(r => r.code === code) || null;
}
