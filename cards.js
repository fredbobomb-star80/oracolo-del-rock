


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
    videoId: "k1tlOd7Iy-g"
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
    videoId: ""   // <--- RISPOSTA NUMERO 30
  },
    {
    id: 31,
    code: "031",
    text: "Dai molla tutto, come una Rock star. Dai molla tutto come una dannata Rock star!",
    cardImage: "carta_031.png",
    videoId: ""
  },
  {
    id: 32,
    code: "032",
    text: "Preferisco vederti ballare sopra le fiamme dell'inferno piuttosto che vederti morire in una galera del paradiso.",
    cardImage: "carta_032.png",
    videoId: ""
  },
  {
    id: 33,
    code: "033",
    text: "La tua rabbia, ora, non è la tua musa migliore. No, ci puoi giurare che non lo è.",
    cardImage: "carta_033.png",
    videoId: ""
  },
  {
    id: 34,
    code: "034",
    text: "Spacca le tue catene e non voltarti mai. Dai su fallo, facci vedere.",
    cardImage: "carta_034.png",
    videoId: ""
  },
  {
    id: 35,
    code: "035",
    text: "Perdona prima te stesso, poi penserai a tutto il resto.",
    cardImage: "carta_035.png",
    videoId: ""
  },
  {
    id: 36,
    code: "036",
    text: "Non esistono sbagli per chi suona il Rock'n'Roll. Ci sono solo verità per chi vive Rock!",
    cardImage: "carta_036.png",
    videoId: ""
  },
  {
    id: 37,
    code: "037",
    text: "Stai guardando la luna, invece delle stelle. Ah si? E come mai? Come mai?",
    cardImage: "carta_037.png",
    videoId: ""
  },
  {
    id: 38,
    code: "038",
    text: "Lanciati sulla folla. Ma ricorda che non c’è mai stata una cintura di sicurezza nel Rock'n'Roll.",
    cardImage: "carta_038.png",
    videoId: ""
  },
  {
    id: 39,
    code: "039",
    text: "No, non tornare indietro. Non lo fare no! Non tornare solo perché hai sete un po'.",
    cardImage: "carta_039.png",
    videoId: ""
  },
  {
    id: 40,
    code: "040",
    text: "Fidati del caos perché è più onesto di chi ti dà certezze e poi ti tradirà.",
    cardImage: "carta_040.png",
    videoId: ""
  },
  {
    id: 41,
    code: "041",
    text: "Cerchi un segnale fuori, ma può essere solo rumore. Ascolta il suono che viene da dentro.",
    cardImage: "carta_041.png",
    videoId: ""
  },
  {
    id: 42,
    code: "042",
    text: "Scegli, anche se non sei pronto perché questo non è un treno che ti aspetta.",
    cardImage: "carta_042.png",
    videoId: ""
  },
  {
    id: 43,
    code: "043",
    text: "Smettila di chiedere permesso al destino. Non gliene frega un cazzo, lo hai capito o no?",
    cardImage: "carta_043.png",
    videoId: ""
  },
  {
    id: 44,
    code: "044",
    text: "Non esiste un buon Rock che nasce da un bonsai. Il Rock nasce dai tuoni e tu lo sai.",
    cardImage: "carta_044.png",
    videoId: ""
  },
  {
    id: 45,
    code: "045",
    text: "Smettila di inseguire i fantasmi. Sii tu l’incidente che cambia la trama.",
    cardImage: "carta_045.png",
    videoId: ""
  },
  {
    id: 46,
    code: "046",
    text: "Dimmi un po', cosa scriveranno sulla tua lapide? Leone o coglione oppure Rock'n'Roll.?",
    cardImage: "carta_046.png",
    videoId: ""
  },
  {
    id: 47,
    code: "047",
    text: "Consigli gratis non esistono. Sta a te il compito di condividere il verbo. Metti un faccino, metti un like e condividi, l'oracolo del Rock!",
    cardImage: "carta_047.png",
    videoId: ""
  },
  {
    id: 48,
    code: "048",
    text: "La mamma dei coglioni è sempre incinta e tu lo sai. La mamma dei coglioni, magari non ascolta il Rock.",
    cardImage: "carta_048.png",
    videoId: ""
  },
  {
    id: 49,
    code: "049",
    text: "Vuoi solo sesso. E vorresti farlo spesso, dai che magari lo farai.",
    cardImage: "carta_049.png",
    videoId: ""
  },
  {
    id: 50,
    code: "050",
    text: "Ma chi se ne frega della carriera, pensa un po' alla carrozzeria! Si, pensa alla tua via!",
    cardImage: "carta_050.png",
    videoId: ""
  },
  {
    id: 51,
    code: "051",
    text: "Come dice il proverbio? Tutto è impossibile finché un figlio di puttana non lo fà. Non lo fà.",
    cardImage: "carta_051.png",
    videoId: ""
  },
  {
    id: 52,
    code: "052",
    text: "Mandali a cagare. Fai in fretta si. Mandali a cagare almeno per un po'.",
    cardImage: "carta_052.png",
    videoId: ""
  },
  {
    id: 53,
    code: "053",
    text: "Fai qualcosa di più originale. Metti in moto i neuroni e coglioni e non copiare più.",
    cardImage: "carta_053.png",
    videoId: ""
  },
  {
    id: 54,
    code: "054",
    text: "Arriverà qualcosa di hot, troppo hot. Si. Prepara il ghiaccio, se vuoi assaggiarne almeno un po'.",
    cardImage: "carta_054.png",
    videoId: ""
  },
  {
    id: 55,
    code: "055",
    text: "La vita è troppo breve per farsi il sangue amaro per queste cazzate. Lo vuoi capire o no?",
    cardImage: "carta_055.png",
    videoId: ""
  },
  {
    id: 56,
    code: "056",
    text: "Goditela un po' e goditela un po'.",
    cardImage: "carta_056.png",
    videoId: ""
  },
  {
    id: 57,
    code: "057",
    text: "Fatti due domande. Si! Poi fattene tre. Quindi arriva a quattro e ti risponderò.",
    cardImage: "carta_057.png",
    videoId: ""
  },
  {
    id: 58,
    code: "058",
    text: "Alzati. Corri. Grida. Balla. E se non hai abbastanza fiato lo troverai, si lo ritroverai.",
    cardImage: "carta_058.png",
    videoId: ""
  },
  {
    id: 59,
    code: "059",
    text: "Cerchi la libertà. Ma hai abbastanza fegato per sostenerla?",
    cardImage: "carta_059.png",
    videoId: ""
  },
  {
    id: 60,
    code: "060",
    text: "Il dolore è arrivato per darti una bella sveglia. Allora che mi dici, ha funzionato o ne vuoi ancora un po'?",
    cardImage: "carta_060.png",
    videoId: ""
  },
  {
    id: 61,
    code: "061",
    text: "Sento più inutile rabbia che sana curiosità. Qualcuno ti ha cagato nel latte stamattina?",
    cardImage: "carta_061.png",
    videoId: ""
  },
  {
    id: 62,
    code: "062",
    text: "Fai quello che vuoi. Ma portati un amuleto, fidati che ti servirà.",
    cardImage: "carta_062.png",
    videoId: ""
  },
  {
    id: 63,
    code: "063",
    text: "A chi stai cercando di piacere? A gente a cui non gliene frega niente di te?",
    cardImage: "carta_063.png",
    videoId: ""
  },
  {
    id: 64,
    code: "064",
    text: "Preferisci suonare la batteria o la chitarra? Scegli, perché o mantieni il tempo o fai bruciare il pentagramma.",
    cardImage: "carta_064.png",
    videoId: ""
  },
  {
    id: 65,
    code: "065",
    text: "Hai poco fegato. Sento l'odore della tua paura. Fammi un favore, fatti un bel bagno di Rock.",
    cardImage: "carta_065.png",
    videoId: ""
  },
  {
    id: 66,
    code: "066",
    text: "Si, ma sappi che nessuno ti applaudirà. Allora, lo farai lo stesso, si?",
    cardImage: "carta_066.png",
    videoId: ""
  },
  {
    id: 67,
    code: "067",
    text: "Non rompere le palle e fatti un Black Jack! Ci metti coca, whiskey, southern comfort ed un top di Rock'n'Roll.",
    cardImage: "carta_067.png",
    videoId: ""
  },
  {
    id: 68,
    code: "068",
    text: "Alchimista dell' anima. Ma attenzione al veleno. Si, Alchimista dell' anima. Ma attenzione al veleno!",
    cardImage: "carta_068.png",
    videoId: ""
  },
  {
    id: 69,
    code: "069",
    text: "Ti stan portando sfiga! Qualcuno fa voodoo. Ti stan portando sfiga. Riflettici un po' su!",
    cardImage: "carta_069.png",
    videoId: ""
  },
  {
    id: 70,
    code: "070",
    text: "Falli crepare di invidia. Si. Falli crepare di invidia.",
    cardImage: "carta_070.png",
    videoId: ""
  },
  {
    id: 71,
    code: "071",
    text: "Ci vuole un caffè doppio. Magari anche corretto. Buttalo giù in un colpo. Serve lucidità!",
    cardImage: "carta_071.png",
    videoId: ""
  },
  {
    id: 72,
    code: "072",
    text: "Con il cuore ferito ogni strada che farai sarà livida.",
    cardImage: "carta_072.png",
    videoId: ""
  },
  {
    id: 73,
    code: "073",
    text: "E' come se stessi giocando un gioco di dadi truccato.",
    cardImage: "carta_073.png",
    videoId: ""
  },
  {
    id: 74,
    code: "074",
    text: "Qualcuno sta scommettendo forte contro di te. Ma tu puoi battere le fredde statistiche!",
    cardImage: "carta_074.png",
    videoId: ""
  },
  {
    id: 75,
    code: "075",
    text: "E' stata abolita la schiavitù, ma il mondo è ancora pieno di servi, e tu?",
    cardImage: "carta_075.png",
    videoId: ""
  },
  {
    id: 76,
    code: "076",
    text: "Guida fino a quando non incontri le onde dell'oceano. Poi cavalcale.",
    cardImage: "carta_076.png",
    videoId: ""
  },
  {
    id: 77,
    code: "077",
    text: "Smettila di guardare quelle foto sbiadite del passato.",
    cardImage: "carta_077.png",
    videoId: ""
  },
  {
    id: 78,
    code: "078",
    text: "Non ci crederai, ma qualcuno ti sta aspettando. Non so chi o dove sia, devi scoprirlo tu.",
    cardImage: "carta_078.png",
    videoId: ""
  },
  {
    id: 79,
    code: "079",
    text: "Questo non è un viaggio da fare da soli. No. Questo non è affatto un viaggio da fare da soli.",
    cardImage: "carta_079.png",
    videoId: ""
  },
  {
    id: 80,
    code: "080",
    text: "Ti stanno sottovalutando, non farlo anche tu. Oh no! Non farlo anche tu!",
    cardImage: "carta_080.png",
    videoId: ""
  },
  {
    id: 81,
    code: "081",
    text: "Si che vale la pena farlo. Ma questa volta ti suggerisco di muoverti con furbizia tra le ombre.",
    cardImage: "carta_081.png",
    videoId: ""
  },
  {
    id: 82,
    code: "082",
    text: "No, niente da fare. Lo sento che brucia, ma questo no, non è il momento.",
    cardImage: "carta_082.png",
    videoId: ""
  },
  {
    id: 83,
    code: "083",
    text: "Dai una bella lucidata al cuore. Lustra gli stivali e salta in sella.",
    cardImage: "carta_083.png",
    videoId: ""
  },
  {
    id: 84,
    code: "084",
    text: "E' il momento di uscire con il tuo nuovo album, qualunque esso sia.",
    cardImage: "carta_084.png",
    videoId: ""
  },
  {
    id: 85,
    code: "085",
    text: "Non avere paura di farti beccare con le mani nel sacco.",
    cardImage: "carta_085.png",
    videoId: ""
  },
  {
    id: 86,
    code: "086",
    text: "Prendi i soldi e scappa. Corri al aeroporto, prendi il primo volo e non tornare più.",
    cardImage: "carta_086.png",
    videoId: ""
  },
  {
    id: 87,
    code: "087",
    text: "Vivi con gli assi nascosti nelle maniche e con i sassi nel cuore.",
    cardImage: "carta_087.png",
    videoId: ""
  },
  {
    id: 88,
    code: "088",
    text: "Non è il momento di essere avidi o avari o taccagni.",
    cardImage: "carta_088.png",
    videoId: ""
  },
  {
    id: 89,
    code: "089",
    text: "Vedo tre porte. Un lupo. Una spia. Un serpente e solo l'ultimo colpo in canna.",
    cardImage: "carta_089.png",
    videoId: ""
  },
  {
    id: 90,
    code: "090",
    text: "Se quella belva si fida di te non ti sbranerà. No. Se quella belva si fida di te non ti sbranerà.",
    cardImage: "carta_090.png",
    videoId: ""
  },
  {
    id: 91,
    code: "091",
    text: "La prima regola dell'Oracolo del Rock è : L'Oracolo è un gioco serissimo. Si, stai giocando con il fuoco!",
    cardImage: "carta_091.png",
    videoId: ""
  },
  {
    id: 92,
    code: "092",
    text: "Se vuoi bruciare, fallo per te, non per dimostrare qualcosa a qualcuno.",
    cardImage: "carta_092.png",
    videoId: ""
  },
  {
    id: 93,
    code: "093",
    text: "Non farti fregare. Non farti accecare proprio ora da questi sterili scopi.",
    cardImage: "carta_093.png",
    videoId: ""
  },
  {
    id: 94,
    code: "094",
    text: "Insegui il piacere, ora, senza se e senza ma. Ora.",
    cardImage: "carta_094.png",
    videoId: ""
  },
  {
    id: 95,
    code: "095",
    text: "Togliti le cuffie, spegni tutto ed accarezza il mondo per un pò.",
    cardImage: "carta_095.png",
    videoId: ""
  },
  {
    id: 96,
    code: "096",
    text: "Ti stanno vendendo la prudenza a discapito della pazienza.",
    cardImage: "carta_096.png",
    videoId: ""
  },
  {
    id: 97,
    code: "097",
    text: "Prima devi visitare tre posti. Quelli che sono anni che ti dici che li visiterai e non lo fai mai.",
    cardImage: "carta_097.png",
    videoId: ""
  },
  {
    id: 98,
    code: "098",
    text: "L'omologazione è contagiosa, forza, distinguiti un po'.",
    cardImage: "carta_098.png",
    videoId: ""
  },
  {
    id: 99,
    code: "099",
    text: "Oggi non pensare al futuro. Pensa a chi eri durante la tua infanzia.",
    cardImage: "carta_099.png",
    videoId: ""
  },
  {
    id: 100,
    code: "100",
    text: "Non esiste giustizia in questo mondo. Altrimenti perché sarebbe nato il Rock?",
    cardImage: "carta_100.png",
    videoId: ""
  },
  {
    id: 101,
    code: "101",
    text: "Magari ti sei perso si, ma almeno non stai seguendo le orme di nessuno.",
    cardImage: "carta_101.png",
    videoId: ""
  },
  {
    id: 102,
    code: "102",
    text: "Si. Ma con più stile questa volta. Tipo a duecento all'ora contro mano.",
    cardImage: "carta_102.png",
    videoId: ""
  },
  {
    id: 103,
    code: "103",
    text: "No, non farlo no. Scegli meglio il tuo palco la prossima volta.",
    cardImage: "carta_103.png",
    videoId: ""
  },
  {
    id: 104,
    code: "104",
    text: "Allenta il carico. Svuota il peso dell'anima. Ripulisci l'armadio dei ricordi.",
    cardImage: "carta_104.png",
    videoId: ""
  },
  {
    id: 105,
    code: "105",
    text: "Il tuo ego vuole solo un biscottino. La tua anima vuole tutto il buffet.",
    cardImage: "carta_105.png",
    videoId: ""
  },
  {
    id: 106,
    code: "106",
    text: "Si, ma non permettere di farti sporcare l'abito nuovo. E giù quelle manacce!",
    cardImage: "carta_106.png",
    videoId: ""
  },
  {
    id: 107,
    code: "107",
    text: "Qui non è vietato piangere. Qui è vietato anestetizzare l'anima.",
    cardImage: "carta_107.png",
    videoId: ""
  },
  {
    id: 108,
    code: "108",
    text: "Prova a sfidare quella tua paura invece. Come? Metti un brano Rock e va.",
    cardImage: "carta_108.png",
    videoId: ""
  },
  {
    id: 109,
    code: "109",
    text: "Si, ma quando è l'ultima volta che hai fatto del buon sesso? Del buon sesso si!",
    cardImage: "carta_109.png",
    videoId: ""
  },
  {
    id: 110,
    code: "110",
    text: "Se vuoi incontrare un demone vai pure. Ma attento ai suoi tracobetti. Si dice così no?",
    cardImage: "carta_110.png",
    videoId: ""
  },
  {
    id: 111,
    code: "111",
    text: "Cosa? Adesso saresti tu il problema? Ma hai guardato bene chi lo ha sentenziato?",
    cardImage: "carta_111.png",
    videoId: ""
  },
  {
    id: 112,
    code: "112",
    text: "Su forza, ridi sopra a questa folle e bizzarra idea.",
    cardImage: "carta_112.png",
    videoId: ""
  },
  {
    id: 113,
    code: "113",
    text: "Hai voluto fare l’eroe ma ti sei trovato in prima fila all’inferno.",
    cardImage: "carta_113.png",
    videoId: ""
  },
  {
    id: 114,
    code: "114",
    text: "Puoi farlo, ma quei bastardi usciranno dalle fottute pareti. Da quelle fottute pareti, si.",
    cardImage: "carta_114.png",
    videoId: ""
  },
  {
    id: 115,
    code: "115",
    text: "Prima devi ritrovare la fede. Quella tua, quella vera, quella Rock.",
    cardImage: "carta_115.png",
    videoId: ""
  },
  {
    id: 116,
    code: "116",
    text: "Chiedi una mano a qualcuno che abbia almeno dieci anni meno di te.",
    cardImage: "carta_116.png",
    videoId: ""
  },
  {
    id: 117,
    code: "117",
    text: "Il purgatorio è pieno di musicisti che hanno smesso troppo presto di crederci. Non ti mettere in coda anche tu.",
    cardImage: "carta_117.png",
    videoId: ""
  },
  {
    id: 118,
    code: "118",
    text: "Improvvisa e facci il favore, si. Cerca di essere meno prevedibile di così.",
    cardImage: "carta_118.png",
    videoId: ""
  },
  {
    id: 119,
    code: "119",
    text: "Me lo chiedi solo per farmi girare i coglioni, non è vero? Non è così?",
    cardImage: "carta_119.png",
    videoId: ""
  },
  {
    id: 120,
    code: "120",
    text: "Non firmare niente. Questo è un accordo che si fa guardandosi dritto negli occhi e con forti strette di mano.",
    cardImage: "carta_120.png",
    videoId: ""
  },
  {
    id: 121,
    code: "121",
    text: "Sembra una montagna troppo alta da scalare. Con lo sguardo fisso in alto, respira e fai una presa per volta.",
    cardImage: "carta_121.png",
    videoId: ""
  },
  {
    id: 122,
    code: "122",
    text: "Il sistema ti vuole confuso ed infelice. Inverti il gioco, confondilo tu. Si scuoti le stramaledette acque.",
    cardImage: "carta_122.png",
    videoId: ""
  },
  {
    id: 123,
    code: "123",
    text: "Hai firmato un contratto con la paura, è il momento di disdire l’abbonamento.",
    cardImage: "carta_123.png",
    videoId: ""
  },
  {
    id: 124,
    code: "124",
    text: "Ti chiamano maestro, ma lo fanno con disprezzo. Questo ti fermerà?",
    cardImage: "carta_124.png",
    videoId: ""
  },
  {
    id: 125,
    code: "125",
    text: "Ogni palco è un tribunale, ogni applauso una sentenza.",
    cardImage: "carta_125.png",
    videoId: ""
  },
  {
    id: 126,
    code: "126",
    text: "Ribelli di oggi non ti vendono abbonamenti a corsi motivazionali. Ti fanno vedere come si fa, punto e basta.",
    cardImage: "carta_126.png",
    videoId: ""
  },
  {
    id: 127,
    code: "127",
    text: "La seconda regola dell'Oracolo del Rock è : tra una risposta e l'altra fatti una risata e se puoi balla.",
    cardImage: "carta_127.png",
    videoId: ""
  },
  {
    id: 128,
    code: "128",
    text: "Mode temporanee, meteore e fenomeni da baraccone.",
    cardImage: "carta_128.png",
    videoId: ""
  },
  {
    id: 129,
    code: "129",
    text: "Potrebbe cambiare la tua vita.",
    cardImage: "carta_129.png",
    videoId: ""
  },
  {
    id: 130,
    code: "130",
    text: "Non è colpa tua se ti hanno dato un microfono spento. Ma tu puoi ancora urlare.",
    cardImage: "carta_130.png",
    videoId: ""
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
