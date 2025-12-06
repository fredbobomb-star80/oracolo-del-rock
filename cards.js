


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
    text: "Non devi farlo ora.",
    cardImage: "carta_001.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 2,
    code: "002",                   
    text: "Dai. Ma cosa stai aspettando? Ma cosa stai aspettando?",
    cardImage: "carta_002.png",
    videoId: "k1tlOd7Iy-g"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 3,
    code: "003",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_003.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 4,
    code: "004",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_004.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 5,
    code: "005",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_005.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
  {
    id: 6,
    code: "006",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_006.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 7,
    code: "007",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_007.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 8,
    code: "008",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_008.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 9,
    code: "009",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_009.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 10,
    code: "010",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_010.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
  {
    id: 11,
    code: "011",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_011.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 12,
    code: "012",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_012.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 13,
    code: "013",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_013.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 14,
    code: "014",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_014.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 15,
    code: "015",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_015.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
  {
    id: 16,
    code: "016",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_016.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 17,
    code: "017",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_017.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 18,
    code: "018",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_018.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 19,
    code: "019",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_019.png",
    videoId: "YdEggax27GA"    // <--- QUI IL CODICE VIDEO (ESEMPIO)
  },
   {
    id: 20,
    code: "020",                   
    text: "Non devi farlo ora.",
    cardImage: "carta_020.png",
    videoId: "YdEggax27GA"    // <--- CARTA NUMERO 20
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
    id: 666,
    code: "666",
    text: "Non oggi, non adesso, no, non ora.",
    cardImage: "carta_666.png",
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
