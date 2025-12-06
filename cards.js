


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
    videoId: ""
  },
  {
    id: 3,
    code: "003",
    text: "Tu punti in alto. Il cielo è terso. Dove arriverai?",
    cardImage: "carta_003.png",
    videoId: ""
  },
  {
    id: 4,
    code: "004",
    text: "Arriverà il momento. Me lo sento. Arriverà.",
    cardImage: "carta_004.png",
    videoId: ""
  },
  {
    id: 5,
    code: "005",
    text: "Se non lo fai lo sai che lo rimpiangerai.",
    cardImage: "carta_005.png",
    videoId: ""
  },
  {
    id: 6,
    code: "006",
    text: "No. No, non aspettare un segno. Sii tu quel lampo fottutamente Rock!",
    cardImage: "carta_006.png",
    videoId: ""
  },
  {
    id: 7,
    code: "007",
    text: "Prendi il tuo tempo. Si, prenditi il tempo, che suona come questo Rock.",
    cardImage: "carta_007.png",
    videoId: ""
  },
  {
    id: 8,
    code: "008",
    text: "Fatti i cazzi tuoi! Fatti i cazzi i tuoi! Si, pensa ai fatti tuoi.",
    cardImage: "carta_008.png",
    videoId: ""
  },
  {
    id: 9,
    code: "009",
    text: "Follia! Si, questa è follia, ma mi piace. Si, ma che follia!",
    cardImage: "carta_009.png",
    videoId: ""
  },
  {
    id: 10,
    code: "010",
    text: "Forse c'ha un altro. Magari no. Forse mi sbaglio. Magari no.",
    cardImage: "carta_010.png",
    videoId: ""
  },
  {
    id: 11,
    code: "011",
    text: "C'è qualcosa che non sai. Ti tengono all'oscuro, Si, c'è qualcosa che non sai!",
    cardImage: "carta_011.png",
    videoId: ""
  },
  {
    id: 12,
    code: "012",
    text: "Non dipende da te. Oh, no no no no. Questo non dipende da te.",
    cardImage: "carta_012.png",
    videoId: ""
  },
  {
    id: 13,
    code: "013",
    text: "Non serve che sia perfetto, serve che suoni vero. Vero!",
    cardImage: "carta_013.png",
    videoId: ""
  },
  {
    id: 14,
    code: "014",
    text: "Adesso no, non ti serve urlare.\nMa lascia che sia il silenzio ad urlare per te.",
    cardImage: "carta_014.png",
    videoId: ""
  },
  {
    id: 15,
    code: "015",
    text: "Finché vibra, restaci dentro.",
    cardImage: "carta_015.png",
    videoId: ""
  },
  {
    id: 16,
    code: "016",
    text: "Non puoi accordare delle corde che non puoi ascoltare.",
    cardImage: "carta_016.png",
    videoId: ""
  },
  {
    id: 17,
    code: "017",
    text: "Ama e gridalo al mondo, si!",
    cardImage: "carta_017.png",
    videoId: ""
  },
  {
    id: 18,
    code: "018",
    text: "No. Non è amore, ma è sesso droga e Rock'n'Roll.",
    cardImage: "carta_018.png",
    videoId: ""
  },
  {
    id: 19,
    code: "019",
    text: "Si e non è per i deboli di cuore.",
    cardImage: "carta_019.png",
    videoId: ""
  },
  {
    id: 20,
    code: "020",
    text: "Chiudi quella chat e fallo di persona. Si! Ma chiudi quella chat!",
    cardImage: "carta_020.png",
    videoId: ""
  },
  {
    id: 21,
    code: "021",
    text: "Si, ma hai rotto il cazzo.",
    cardImage: "carta_021.png",
    videoId: ""
  },
  {
    id: 22,
    code: "022",
    text: "Sali su quel fottuto palco. E dai, non farti pregare ancora. Sali.",
    cardImage: "carta_022.png",
    videoId: ""
  },
  {
    id: 23,
    code: "023",
    text: "Ama. Ti dicono di no.\nMa se brucia tu ama, perché questo è Rock'n'Roll.",
    cardImage: "carta_023.png",
    videoId: ""
  },
  {
    id: 24,
    code: "024",
    text: "Bastano un paio di birre. Si, un paio di birre e ti sarà tutto chiaro, si!",
    cardImage: "carta_024.png",
    videoId: ""
  },
  {
    id: 25,
    code: "025",
    text: "Raccogli con gentilezza i pezzi ed accarezza l'anima.",
    cardImage: "carta_025.png",
    videoId: ""
  },
  {
    id: 26,
    code: "026",
    text: "No, oh no. Ti sta sfuggendo il tempo. Oh no.",
    cardImage: "carta_026.png",
    videoId: ""
  },
  {
    id: 27,
    code: "027",
    text: "Sarà memorabile ma solo per pochi fortunati, si.",
    cardImage: "carta_027.png",
    videoId: ""
  },
  {
    id: 28,
    code: "028",
    text: "Qualcuno si farà male e lo sai. Si lo sai, già.",
    cardImage: "carta_028.png",
    videoId: ""
  },
  {
    id: 29,
    code: "029",
    text: "La passione che brucia questo pazzo mondo è passata di moda, oppure no?",
    cardImage: "carta_029.png",
    videoId: ""
  },
  {
    id: 30,
    code: "030",
    text: "Si, se hai voglia di sudare e sputare sangue ancora. Si.\nSi se hai voglia di sudare e sputare altro sangue ancora allora, allora è un si!",
    cardImage: "carta_030.png",
    videoId: ""
  }
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
    videoId: "Pxxxxxxxxx"     // <--- ULTIMA CARTA 666
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
