


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
    id: 131,
    code: "131",
    text: "Stacca la spina e guarda, si guarda le stelle e respira. Forse stanotte la tua stella splenderà.",
    cardImage: "carta_131.png",
    videoId: ""
  },
  {
    id: 132,
    code: "132",
    text: "Solo gli eroi cambiano il proprio destino, si ma lo fanno a caro, carissimo prezzo.",
    cardImage: "carta_132.png",
    videoId: ""
  },
  {
    id: 133,
    code: "133",
    text: "Ma cosa indossi, cosa sono quelle? Collane d'oro o catene d'oro?",
    cardImage: "carta_133.png",
    videoId: ""
  },
  {
    id: 134,
    code: "134",
    text: "Hai confuso i fan con gli amici. Dimmi, cosa te ne fai di un milione di like? Si dimmi cosa te ne fai?",
    cardImage: "carta_134.png",
    videoId: ""
  },
  {
    id: 135,
    code: "135",
    text: "Oggi fai un gioco, magari, lettere, verità e testamento. Oggi fai un gioco, si. Lettere, verità e testamento.",
    cardImage: "carta_135.png",
    videoId: ""
  },
  {
    id: 136,
    code: "136",
    text: "Non serve cambiare il mondo ma possiamo evitare di suonare per i bastardi.",
    cardImage: "carta_136.png",
    videoId: ""
  },
  {
    id: 137,
    code: "137",
    text: "La Dea della fortuna oggi busserà alla tua porta. Fatti trovare a casa.",
    cardImage: "carta_137.png",
    videoId: ""
  },
  {
    id: 138,
    code: "138",
    text: "Ti hanno convinto che ribellarti fosse fuori moda come il Rock.",
    cardImage: "carta_138.png",
    videoId: ""
  },
  {
    id: 139,
    code: "139",
    text: "Il tuo silenzio oggi farà più rumore dei loro comunicati stampa.",
    cardImage: "carta_139.png",
    videoId: ""
  },
  {
    id: 140,
    code: "140",
    text: "Prendi il toro per le maledette corna. Prendi il toro per le corna. Prendi il toro per le stramaledette corna.",
    cardImage: "carta_140.png",
    videoId: ""
  },
  {
    id: 141,
    code: "141",
    text: "Cambia mestiere che è meglio.",
    cardImage: "carta_141.png",
    videoId: ""
  },
  {
    id: 142,
    code: "142",
    text: "Non sei rotto, sei solo accordato per un’altra frequenza. Quella vera, quella tua.",
    cardImage: "carta_142.png",
    videoId: ""
  },
  {
    id: 143,
    code: "143",
    text: "Le verità non si urlano. Le bugie hanno bisogno di grossi megafoni.",
    cardImage: "carta_143.png",
    videoId: ""
  },
  {
    id: 144,
    code: "144",
    text: "L’anima Rock. Anche in silenzio. Ha un volume da paura.",
    cardImage: "carta_144.png",
    videoId: ""
  },
  {
    id: 145,
    code: "145",
    text: "Componi una hit, ma con solo quattro accordi. Si, i soliti banali quattro potenti accordi del Rock.",
    cardImage: "carta_145.png",
    videoId: ""
  },
  {
    id: 146,
    code: "146",
    text: "I sogni hanno bisogno di calli, di scelte e di sangue, non di likes. Ma di tutti quei likes dimmi che te ne fai?",
    cardImage: "carta_146.png",
    videoId: ""
  },
  {
    id: 147,
    code: "147",
    text: "Se non abbassi il volume, nessuno ti capirà, resterà solo quel dannato fischio nelle orecchie.",
    cardImage: "carta_147.png",
    videoId: ""
  },
  {
    id: 148,
    code: "148",
    text: "Componi con tutte le note ed il sangue di cui sarai capace.",
    cardImage: "carta_148.png",
    videoId: ""
  },
  {
    id: 149,
    code: "149",
    text: "Si ma non puntare alla top ten della mediocrità.",
    cardImage: "carta_149.png",
    videoId: ""
  },
  {
    id: 150,
    code: "150",
    text: "Non temere chi non ti capisce. Temi chi finge di non ascoltare.",
    cardImage: "carta_150.png",
    videoId: ""
  },
  {
    id: 151,
    code: "151",
    text: "Il rischio per un vero Rocker è la base della vita.",
    cardImage: "carta_151.png",
    videoId: ""
  },
  {
    id: 152,
    code: "152",
    text: "Potresti rimanere a terra. Fai prima il pieno. Il pieno di Rock, si.",
    cardImage: "carta_152.png",
    videoId: ""
  },
  {
    id: 153,
    code: "153",
    text: "Salta qualche ostacolo e stringi i denti.",
    cardImage: "carta_153.png",
    videoId: ""
  },
  {
    id: 154,
    code: "154",
    text: "Butta tutti quei vecchi spartiti scritti a metà. Adesso, te ne serve solo uno e completo.",
    cardImage: "carta_154.png",
    videoId: ""
  },
  {
    id: 155,
    code: "155",
    text: "Andrà bene e sarà intramontabile, così come i vinili sono tornati di moda.",
    cardImage: "carta_155.png",
    videoId: ""
  },
  {
    id: 156,
    code: "156",
    text: "Bene, questo renderà l'universo meno noioso.",
    cardImage: "carta_156.png",
    videoId: ""
  },
  {
    id: 157,
    code: "157",
    text: "Chi non inciampa non ha mai ballato davvero, davvero.",
    cardImage: "carta_157.png",
    videoId: ""
  },
  {
    id: 158,
    code: "158",
    text: "Chi ti ha spezzato non ti ha ferito, ti ha temprato.",
    cardImage: "carta_158.png",
    videoId: ""
  },
  {
    id: 159,
    code: "159",
    text: "Ricordati di goderti tutto il casino, non solo l’arrivo.",
    cardImage: "carta_159.png",
    videoId: ""
  },
  {
    id: 160,
    code: "160",
    text: "Magari tra un paio di mesi non avrà importanza, ma oggi, ma oggi sì.",
    cardImage: "carta_160.png",
    videoId: ""
  },
  {
    id: 161,
    code: "161",
    text: "Irresistibile e pericoloso come un bacio rubato nel backstage delle verità.",
    cardImage: "carta_161.png",
    videoId: ""
  },
  {
    id: 162,
    code: "162",
    text: "Si certo, originale come una cover band dei Queen.",
    cardImage: "carta_162.png",
    videoId: ""
  },
  {
    id: 163,
    code: "163",
    text: "Non sei in ritardo, ma cazzo, non prendertela troppo comoda.",
    cardImage: "carta_163.png",
    videoId: ""
  },
  {
    id: 164,
    code: "164",
    text: "Che titolo darai a questo nuovo capitolo?",
    cardImage: "carta_164.png",
    videoId: ""
  },
  {
    id: 165,
    code: "165",
    text: "Nessuno applaude le attese. Ma pochi le reggono.",
    cardImage: "carta_165.png",
    videoId: ""
  },
  {
    id: 166,
    code: "166",
    text: "Ci sono note che non vuoi suonare.",
    cardImage: "carta_166.png",
    videoId: ""
  },
  {
    id: 167,
    code: "167",
    text: "Esiste solo una probabilità di successo su cento. Ma la cosa non ti fermerà, vero?",
    cardImage: "carta_167.png",
    videoId: ""
  },
  {
    id: 168,
    code: "168",
    text: "Ogni notte senza la tua musica è solo una pausa.",
    cardImage: "carta_168.png",
    videoId: ""
  },
  {
    id: 169,
    code: "169",
    text: "L’orologio non ha cuore, ma se sai usarlo ti indicherà il nord.",
    cardImage: "carta_169.png",
    videoId: ""
  },
  {
    id: 170,
    code: "170",
    text: "Vacci piano.",
    cardImage: "carta_170.png",
    videoId: ""
  },
  {
    id: 171,
    code: "171",
    text: "Le parole dei vecchi Rocker hanno più spessore di quanto credi.",
    cardImage: "carta_171.png",
    videoId: ""
  },
  {
    id: 172,
    code: "172",
    text: "La malinconia sa essere puntuale, puntualissima. Ma tu spostale le lancette.",
    cardImage: "carta_172.png",
    videoId: ""
  },
  {
    id: 173,
    code: "173",
    text: "Ricorda di santificare i figli del Rock. Si, santifica i figli del Rock.",
    cardImage: "carta_173.png",
    videoId: ""
  },
  {
    id: 174,
    code: "174",
    text: "Smetti di correre: il tuo vero pubblico ti aspetterà sempre e comunque.",
    cardImage: "carta_174.png",
    videoId: ""
  },
  {
    id: 175,
    code: "175",
    text: "Scegli i ricordi e gli insegnamenti più giusti per te.",
    cardImage: "carta_175.png",
    videoId: ""
  },
  {
    id: 176,
    code: "176",
    text: "Anche l’attesa ha il suo ritmo. Puoi sostenerlo.",
    cardImage: "carta_176.png",
    videoId: ""
  },
  {
    id: 177,
    code: "177",
    text: "Quando tutto tace, ascolta il respiro corto del tuo amplificatore.",
    cardImage: "carta_177.png",
    videoId: ""
  },
  {
    id: 178,
    code: "178",
    text: "Ogni pausa può diventare un nuovo inizio.",
    cardImage: "carta_178.png",
    videoId: ""
  },
  {
    id: 179,
    code: "179",
    text: "Interessante come un accordo tra il fa cagare maggiore ed il si coglione bemolle.",
    cardImage: "carta_179.png",
    videoId: ""
  },
  {
    id: 180,
    code: "180",
    text: "Sei caduto sette volte? Risorgine otto.",
    cardImage: "carta_180.png",
    videoId: ""
  },
  {
    id: 181,
    code: "181",
    text: "No, non è la fine. E' solo un altro sound check.",
    cardImage: "carta_181.png",
    videoId: ""
  },
  {
    id: 182,
    code: "182",
    text: "Li chiamavano stupidi punk, ora li chiamano saggi, visionari, maestri, guru si prendi tutti i miei soldi e profeti.",
    cardImage: "carta_182.png",
    videoId: ""
  },
  {
    id: 183,
    code: "183",
    text: "Il dolore è stato il tuo primo produttore artistico.",
    cardImage: "carta_183.png",
    videoId: ""
  },
  {
    id: 184,
    code: "184",
    text: "Hai perso tutto, quindi, finalmente, puoi suonare libero.",
    cardImage: "carta_184.png",
    videoId: ""
  },
  {
    id: 185,
    code: "185",
    text: "Ogni cicatrice è un tatuaggio scelto dal destino.",
    cardImage: "carta_185.png",
    videoId: ""
  },
  {
    id: 186,
    code: "186",
    text: "Oggi celebrerai con una bevuta la vittoria di qualcun altro.",
    cardImage: "carta_186.png",
    videoId: ""
  },
  {
    id: 187,
    code: "187",
    text: "Oggi non mischiare la birra con il succo di fragola.",
    cardImage: "carta_187.png",
    videoId: ""
  },
  {
    id: 188,
    code: "188",
    text: "La notte è la tua migliore consigliera, fanne buon uso.",
    cardImage: "carta_188.png",
    videoId: ""
  },
  {
    id: 189,
    code: "189",
    text: "Non è il pubblico il problema, è il canale molto disturbato.",
    cardImage: "carta_189.png",
    videoId: ""
  },
  {
    id: 190,
    code: "190",
    text: "Sali sul palco e racconta a tutti i tuoi segreti.",
    cardImage: "carta_190.png",
    videoId: ""
  },
  {
    id: 191,
    code: "191",
    text: "Il Rock non guarisce gli zombie, il Rock è il vaccino all'epidemia. Si. Il vaccino all'epidemia!",
    cardImage: "carta_191.png",
    videoId: ""
  },
  {
    id: 192,
    code: "192",
    text: "L’universo ha un debole per chi non si arrende, mai.",
    cardImage: "carta_192.png",
    videoId: ""
  },
  {
    id: 193,
    code: "193",
    text: "Questa scelta farà tremare molte persone.",
    cardImage: "carta_193.png",
    videoId: ""
  },
  {
    id: 194,
    code: "194",
    text: "Ogni errore è un accordo stonato che ripeti finchè non è perfetto.",
    cardImage: "carta_194.png",
    videoId: ""
  },
  {
    id: 195,
    code: "195",
    text: "Non serve perdonare chi non ti chiede perdono.",
    cardImage: "carta_195.png",
    videoId: ""
  },
  {
    id: 196,
    code: "196",
    text: "La cenere non sa di morte, ma ha il sapore di un palco spento.",
    cardImage: "carta_196.png",
    videoId: ""
  },
  {
    id: 197,
    code: "197",
    text: "Le rinascite non si annunciano, all'improvviso esplodono. Si, esplodono!",
    cardImage: "carta_197.png",
    videoId: ""
  },
  {
    id: 198,
    code: "198",
    text: "Punta tutto. Si hai capito bene, vai All-In ora.",
    cardImage: "carta_198.png",
    videoId: ""
  },
  {
    id: 199,
    code: "199",
    text: "Torna in scena, fagli paura, torna in scena come un fantasma della storia, come il terrore della trama, si come l'incubo del Rock!",
    cardImage: "carta_199.png",
    videoId: ""
  },
  {
    id: 200,
    code: "200",
    text: "Non sei più tu che cerchi lo spirito Rock: ormai è lui che da la caccia a te.",
    cardImage: "carta_200.png",
    videoId: ""
  },
  {
    id: 201,
    code: "201",
    text: "Il mondo finisce ogni volta che parli a vanvera.",
    cardImage: "carta_201.png",
    videoId: ""
  },
  {
    id: 202,
    code: "202",
    text: "Gli dei del Rock ti hanno sentito. E ridono, tanto, tantissimo.",
    cardImage: "carta_202.png",
    videoId: ""
  },
  {
    id: 203,
    code: "203",
    text: "Non oggi, non adesso, no, non ora.",
    cardImage: "carta_203.png",
    videoId: ""
  },
  {
    id: 204,
    code: "204",
    text: "Riposati pure. Ma non staccare la chitarra.",
    cardImage: "carta_204.png",
    videoId: ""
  },
  {
    id: 205,
    code: "205",
    text: "Chiedilo a chi ti ha insegnato a camminare scalzo sulle macerie dei dischi rotti.",
    cardImage: "carta_205.png",
    videoId: ""
  },
  {
    id: 206,
    code: "206",
    text: "Non ti dicono tutta la verità? Maddai e perché mai dovrebbero?",
    cardImage: "carta_206.png",
    videoId: ""
  },
  {
    id: 207,
    code: "207",
    text: "Che cazzo vuoi? Dimmi che cazzo vuoi. Onestamente, che cazzo vuoi?",
    cardImage: "carta_207.png",
    videoId: ""
  },
  {
    id: 208,
    code: "208",
    text: "E questo sarebbe il massimo che puoi dare? Ah si? Davvero?",
    cardImage: "carta_208.png",
    videoId: ""
  },
  {
    id: 209,
    code: "209",
    text: "Non cercare il paradiso, cerca di evitare troppi rimpianti.",
    cardImage: "carta_209.png",
    videoId: ""
  },
  {
    id: 210,
    code: "210",
    text: "La fine del mondo fa sempre comodo a qualcuno.",
    cardImage: "carta_210.png",
    videoId: ""
  },
  {
    id: 211,
    code: "211",
    text: "Sei ciò che ami fare non ciò che ami collezionare.",
    cardImage: "carta_211.png",
    videoId: ""
  },
  {
    id: 212,
    code: "212",
    text: "Spegni tutto e stacca la spina per un po'.",
    cardImage: "carta_212.png",
    videoId: ""
  },
  {
    id: 213,
    code: "213",
    text: "L’anima Rock non ha bisogno di un cauto manager. Vuole un palco più grande ed un amplificatore più forte.",
    cardImage: "carta_213.png",
    videoId: ""
  },
  {
    id: 214,
    code: "214",
    text: "Hai lasciato il segno, ora lascia il suono Rock'n'Roll",
    cardImage: "carta_214.png",
    videoId: ""
  },
  {
    id: 215,
    code: "215",
    text: "Questa è solo la prima offerta. Chiediti se sarà la migliore.",
    cardImage: "carta_215.png",
    videoId: ""
  },
  {
    id: 216,
    code: "216",
    text: "La terza regola dell'Oracolo del Rock è : poni una domanda per volta. Se te lo sto dicendo ci sarà un motivo, si?",
    cardImage: "carta_216.png",
    videoId: ""
  },
  {
    id: 217,
    code: "217",
    text: "Il Rock sa anche fottersene di quello che sembrerebbe un buon ingaggio ma che di fatto non lo è.",
    cardImage: "carta_217.png",
    videoId: ""
  },
  {
    id: 218,
    code: "218",
    text: "Il Rock è morto? E tu cosa hai fatto per salvarlo?",
    cardImage: "carta_218.png",
    videoId: ""
  },
  {
    id: 219,
    code: "219",
    text: "Ti serve una nuova passione che ti rovini la pace.",
    cardImage: "carta_219.png",
    videoId: ""
  },
  {
    id: 220,
    code: "220",
    text: "Ascolta una playlist che non avresti mai ascoltato.",
    cardImage: "carta_220.png",
    videoId: ""
  },
  {
    id: 221,
    code: "221",
    text: "Non cercare amore, ma cerca una chitarra più affidabile.",
    cardImage: "carta_221.png",
    videoId: ""
  },
  {
    id: 222,
    code: "222",
    text: "Prenota il tuo prossimo viaggio.",
    cardImage: "carta_222.png",
    videoId: ""
  },
  {
    id: 223,
    code: "223",
    text: "Fai i debiti e compra quel biglietto. No, non mi interessa. Fai i debiti e compra quel biglietto.",
    cardImage: "carta_223.png",
    videoId: ""
  },
  {
    id: 224,
    code: "224",
    text: "Non è possibile.",
    cardImage: "carta_224.png",
    videoId: ""
  },
  {
    id: 225,
    code: "225",
    text: "Il peccato è un'invenzione redditizia per chi vende le redenzioni.",
    cardImage: "carta_225.png",
    videoId: ""
  },
  {
    id: 226,
    code: "226",
    text: "Se ti tocca l’anima non devi chiedere altro.",
    cardImage: "carta_226.png",
    videoId: ""
  },
  {
    id: 227,
    code: "227",
    text: "Ti serve una notte lunga, buona musica e niente domande.",
    cardImage: "carta_227.png",
    videoId: ""
  },
  {
    id: 228,
    code: "228",
    text: "Sei su questo mondo per far vibrare la pelle, non per far girare le palle!",
    cardImage: "carta_228.png",
    videoId: ""
  },
  {
    id: 229,
    code: "229",
    text: "Non sei fragile, sei solo in tensione come l'ultima corda.",
    cardImage: "carta_229.png",
    videoId: ""
  },
  {
    id: 230,
    code: "230",
    text: "Baciale le cicatrici non le curve.",
    cardImage: "carta_230.png",
    videoId: ""
  }, 
  {
    id: 231,
    code: "231",
    text: "Molla il vittimismo e prenditi quella cazzo di responsabilità",
    cardImage: "carta_231.png",
    videoId: ""
  },
  {
    id: 232,
    code: "232",
    text: "Il piacere è un giro di rivoluzione, ma devi saperlo suonare.",
    cardImage: "carta_232.png",
    videoId: ""
  },
  {
    id: 233,
    code: "233",
    text: "Le tue mani sono troppo stanche.",
    cardImage: "carta_233.png",
    videoId: ""
  },
  {
    id: 234,
    code: "234",
    text: "Le tue mani possono reggere questo peso.",
    cardImage: "carta_234.png",
    videoId: ""
  },
  {
    id: 235,
    code: "235",
    text: "Non chiamarlo amore, chiamalo Broken Negroni. Just a Broken Negroni.",
    cardImage: "carta_235.png",
    videoId: ""
  },
  {
    id: 236,
    code: "236",
    text: "Solo se hai già fissato tutte le date del tour.",
    cardImage: "carta_236.png",
    videoId: ""
  },
  {
    id: 237,
    code: "237",
    text: "Se hai paura di perderti come farai a trovare qualcosa di nuovo?",
    cardImage: "carta_237.png",
    videoId: ""
  },
  {
    id: 238,
    code: "238",
    text: "È un pericolo che ha il gusto di un buon Rock.",
    cardImage: "carta_238.png",
    videoId: ""
  },
  {
    id: 239,
    code: "239",
    text: "C'è chi fa sesso e poi ci sei tu.",
    cardImage: "carta_239.png",
    videoId: ""
  },
  {
    id: 240,
    code: "240",
    text: "Hai confuso una scoreggia per una Stratocaster.",
    cardImage: "carta_240.png",
    videoId: ""
  },
  {
    id: 241,
    code: "241",
    text: "Ogni bacio è un rischio. Vieni qui che ti do un bel bacetto.",
    cardImage: "carta_241.png",
    videoId: ""
  },
  {
    id: 242,
    code: "242",
    text: "Ci sono passioni che uccidono lentamente. Scegli con cura.",
    cardImage: "carta_242.png",
    videoId: ""
  },
  {
    id: 243,
    code: "243",
    text: "Se non ti sporchi le mani, non stai vivendo abbastanza Rock.",
    cardImage: "carta_243.png",
    videoId: ""
  },
  {
    id: 244,
    code: "244",
    text: "Ti salverà una birra fresca non una zuppa calda.",
    cardImage: "carta_244.png",
    videoId: ""
  },
  {
    id: 245,
    code: "245",
    text: "Non tutti i demoni vengono per farti soffrire. Qualcuno arriva per ricordarti chi sei.",
    cardImage: "carta_245.png",
    videoId: ""
  },
  {
    id: 246,
    code: "246",
    text: "Fai qualche sound check in più.",
    cardImage: "carta_246.png",
    videoId: ""
  },
  {
    id: 247,
    code: "247",
    text: "Ma dimmi un po'. Se non ti fa perdere il fiato, il sonno e sudore, non lo farebbe qualsiasi coglione?",
    cardImage: "carta_247.png",
    videoId: ""
  },
  {
    id: 248,
    code: "248",
    text: "E' come un biscotto della fortuna, ha il sapore di carta e ti racconta stronzate.",
    cardImage: "carta_248.png",
    videoId: ""
  },
  {
    id: 249,
    code: "249",
    text: "Smettila di accordare le chitarre degli altri.",
    cardImage: "carta_249.png",
    videoId: ""
  },
  {
    id: 250,
    code: "250",
    text: "Il corpo ha memorie che la mente nega ma che il cuore ricorda.",
    cardImage: "carta_250.png",
    videoId: ""
  },
  {
    id: 251,
    code: "251",
    text: "Fai un'offerta che non si può rifiutare.",
    cardImage: "carta_251.png",
    videoId: ""
  },
  {
    id: 252,
    code: "252",
    text: "Si, eccitante come una birra analcolica scaldata al microonde.",
    cardImage: "carta_252.png",
    videoId: ""
  },
  {
    id: 253,
    code: "253",
    text: "Aspetta che scotta, scotta, scotta. Aspetta che scatta, scatta, scatta. Aspetta che sboccia, sboccia, sboccia.",
    cardImage: "carta_253.png",
    videoId: ""
  },
  {
    id: 254,
    code: "254",
    text: "Blocca ed ignora. Blocca ed ignora. Blocca ed ignora. E perché no, segnala. God save the blocking.",
    cardImage: "carta_254.png",
    videoId: ""
  },
  {
    id: 255,
    code: "255",
    text: "La quarta regola dell'Oracolo del Rock è : nessun discorso troppo complicato, ci penserà l'Oracolo ad incasinarti un po'.",
    cardImage: "carta_255.png",
    videoId: ""
  },
  {
    id: 256,
    code: "256",
    text: "A questo punto qualcuno bestemmia. Lo fanno anche per molto meno si. Ma a questo punto qualcuno bestemmia.",
    cardImage: "carta_256.png",
    videoId: ""
  },
  {
    id: 257,
    code: "257",
    text: "Spegni quella televisione del cazzo.",
    cardImage: "carta_257.png",
    videoId: ""
  },
  {
    id: 258,
    code: "258",
    text: "Valuta di inserire i cori e di cambiare il riff. Se non hai la minima idea di cosa stia parlando allora è un vai a cagare! Si, vai a cagare si!",
    cardImage: "carta_258.png",
    videoId: ""
  },
  {
    id: 259,
    code: "259",
    text: "Il suo odore sarà la tua nuova religione.",
    cardImage: "carta_259.png",
    videoId: ""
  },
  {
    id: 260,
    code: "260",
    text: "Ti serve un letto più grande.",
    cardImage: "carta_260.png",
    videoId: ""
  },
  {
    id: 261,
    code: "261",
    text: "L’amore non è una materia obbligatoria. L'odio si impara dalla prima ora di scuola.",
    cardImage: "carta_261.png",
    videoId: ""
  },
  {
    id: 262,
    code: "262",
    text: "Fai qualcosa di tuo se ci riesci. Ma fai qualcosa di tuo.",
    cardImage: "carta_262.png",
    videoId: ""
  },
  {
    id: 263,
    code: "263",
    text: "La pelle non mente. Le labbra si.",
    cardImage: "carta_263.png",
    videoId: ""
  },
  {
    id: 264,
    code: "264",
    text: "Non fare debiti per comprare una nuova prigione. No, non fare debiti per comprare una nuova prigione.",
    cardImage: "carta_264.png",
    videoId: ""
  },
  {
    id: 265,
    code: "265",
    text: "Sarà fantastico, come un concerto live di quelli che non si dimenticano mai. Da pelle d'oca.",
    cardImage: "carta_265.png",
    videoId: ""
  },
  {
    id: 266,
    code: "266",
    text: "Se qualcuno stacca gli occhi dallo schermo e ti sorride, oggi giorno, vale più dell'oro.",
    cardImage: "carta_266.png",
    videoId: ""
  },
  {
    id: 267,
    code: "267",
    text: "Come un giro di basso che rivoluziona il tutto ma che, mette in crisi il produttore, la majors ed il DJ",
    cardImage: "carta_267.png",
    videoId: ""
  },
  {
    id: 268,
    code: "268",
    text: "Manda a fanculo il tuo capo.",
    cardImage: "carta_268.png",
    videoId: ""
  },
  {
    id: 269,
    code: "269",
    text: "Prima fai un regalo speciale a qualcuno.",
    cardImage: "carta_269.png",
    videoId: ""
  },
  {
    id: 270,
    code: "270",
    text: "Hai l'orecchio assoluto per certe stronzate.",
    cardImage: "carta_270.png",
    videoId: ""
  },
  {
    id: 271,
    code: "271",
    text: "Appropriato, si. Come uno sfollagente brandito su una folla di monaci tibetani, perché ultimamente le loro preghiere per la pace non stanno funzionando poi così tanto bene.",
    cardImage: "carta_271.png",
    videoId: ""
  },
  {
    id: 272,
    code: "272",
    text: "Complimenti. Ci vuole un talento speciale per far girare così tanto i coglioni al Karma.",
    cardImage: "carta_272.png",
    videoId: ""
  },
  {
    id: 273,
    code: "273",
    text: "Ascolta il primo brano in classifica di oggi.",
    cardImage: "carta_273.png",
    videoId: ""
  },
  {
    id: 274,
    code: "274",
    text: "Ascolta il brano che era primo in classifica il giorno della tua nascita.",
    cardImage: "carta_274.png",
    videoId: ""
  },
  {
    id: 275,
    code: "275",
    text: "La quinta regola dell'Oracolo del Rock è : non puoi chiedere per qualcun altro. Ma se proprio ci tieni a farlo, taggalo.",
    cardImage: "carta_275.png",
    videoId: ""
  },
  {
    id: 276,
    code: "276",
    text: "Hai pisciato fuori dal vaso. Hai decisamente pisciato fuori dal vaso, si.",
    cardImage: "carta_276.png",
    videoId: ""
  },
  {
    id: 277,
    code: "277",
    text: "Hai lasciato la tua chitarra migliore a casa, come mai?",
    cardImage: "carta_277.png",
    videoId: ""
  },
  {
    id: 278,
    code: "278",
    text: "Dai fastidio a qualcuno.",
    cardImage: "carta_278.png",
    videoId: ""
  },
  {
    id: 279,
    code: "279",
    text: "Si e sarà così che conquisterai nuovi fan.",
    cardImage: "carta_279.png",
    videoId: ""
  },
  {
    id: 280,
    code: "280",
    text: "No, non cercare il lieto fine. Cerca il fottuto, fottuto inizio, si.",
    cardImage: "carta_280.png",
    videoId: ""
  },
  {
    id: 281,
    code: "281",
    text: "Si ma perderai qualche fan.",
    cardImage: "carta_281.png",
    videoId: ""
  },
  {
    id: 282,
    code: "282",
    text: "Ti renderà bene.",
    cardImage: "carta_282.png",
    videoId: ""
  },
  {
    id: 283,
    code: "283",
    text: "Se continui così, pagherai più del dovuto.",
    cardImage: "carta_283.png",
    videoId: ""
  },
  {
    id: 284,
    code: "284",
    text: "Hai imparato a stento a suonare un citofono, ma ti lanci in feroci critiche Rock.",
    cardImage: "carta_284.png",
    videoId: ""
  },
  {
    id: 285,
    code: "285",
    text: "E' la spezia giusta che renderà le cose più piccanti.",
    cardImage: "carta_285.png",
    videoId: ""
  },
  {
    id: 286,
    code: "286",
    text: "Ti annoierai, ma tieni la bocca chiusa.",
    cardImage: "carta_286.png",
    videoId: ""
  },
  {
    id: 287,
    code: "287",
    text: "Un bacio è una prova microfono: se non vibra, cambia palco.",
    cardImage: "carta_287.png",
    videoId: ""
  },
  {
    id: 288,
    code: "288",
    text: "La vita è come una scatola di plettri, non sceglierai il migliore ma quello giusto per te.",
    cardImage: "carta_288.png",
    videoId: ""
  },
  {
    id: 289,
    code: "289",
    text: "Prima la follia poi la famiglia e poi la follia ancora.",
    cardImage: "carta_289.png",
    videoId: ""
  },
  {
    id: 290,
    code: "290",
    text: "Rock e fiamme.",
    cardImage: "carta_290.png",
    videoId: ""
  },
  {
    id: 291,
    code: "291",
    text: "Fallo, si! E che il Rock sia sempre con te!",
    cardImage: "carta_291.png",
    videoId: ""
  },
  {
    id: 292,
    code: "292",
    text: "Sì, ma festeggia col wiskey migliore.",
    cardImage: "carta_292.png",
    videoId: ""
  },
  {
    id: 293,
    code: "293",
    text: "La sesta regola dell'Oracolo del Rock è : niente haters e niente spazzatura. E' chiaro? Tenete le vostre boiate fuori di qui!",
    cardImage: "carta_293.png",
    videoId: ""
  },
  {
    id: 294,
    code: "294",
    text: "No, il destino oggi non prende appuntamenti inutili.",
    cardImage: "carta_294.png",
    videoId: ""
  },
  {
    id: 295,
    code: "295",
    text: "O prendi subito l’iniziativa o sarai fatto fuori dai giochi.",
    cardImage: "carta_295.png",
    videoId: ""
  },
  {
    id: 296,
    code: "296",
    text: "Affila per bene la lama.",
    cardImage: "carta_296.png",
    videoId: ""
  },
  {
    id: 297,
    code: "297",
    text: "Scrolla. Commenta. Crepa.",
    cardImage: "carta_297.png",
    videoId: ""
  },
  {
    id: 298,
    code: "298",
    text: "No, scordatelo pure.",
    cardImage: "carta_298.png",
    videoId: ""
  },
  {
    id: 299,
    code: "299",
    text: "Si, vai a tutto gas.",
    cardImage: "carta_299.png",
    videoId: ""
  },
  {
    id: 300,
    code: "300",
    text: "Non inciampare dalle scale del paradiso.",
    cardImage: "carta_300.png",
    videoId: ""
  },
  {
    id: 301,
    code: "301",
    text: "Non scivolare dalle scale dell'inferno.",
    cardImage: "carta_301.png",
    videoId: ""
  },
  {
    id: 302,
    code: "302",
    text: "Prima di sfrecciare lungo le strade controlla i freni.",
    cardImage: "carta_302.png",
    videoId: ""
  },
  {
    id: 303,
    code: "303",
    text: "Provane un pò. Se ti accende è la cura, se ti spegne è il veleno.",
    cardImage: "carta_303.png",
    videoId: ""
  },
  {
    id: 304,
    code: "304",
    text: "Le settima regola dell'Oracolo del Rock è : sono severamente vietati i leoni da tastiera. Tranne quelli che hanno fondato un gruppo Rock.",
    cardImage: "carta_304.png",
    videoId: ""
  },
  {
    id: 305,
    code: "305",
    text: "Pensa con la tua testaccia dura.",
    cardImage: "carta_305.png",
    videoId: ""
  },
  {
    id: 306,
    code: "306",
    text: "Fatti guidare dal tuo cuore ingolfato.",
    cardImage: "carta_306.png",
    videoId: ""
  },
  {
    id: 307,
    code: "307",
    text: "Non farti distrarre da quelle belle cosce!",
    cardImage: "carta_307.png",
    videoId: ""
  },
  {
    id: 308,
    code: "308",
    text: "Cerca degli antichi tesori nascosti tra le macerie dell'oblio.",
    cardImage: "carta_308.png",
    videoId: ""
  },
  {
    id: 309,
    code: "309",
    text: "Fatti distrarre un po' da quelle belle cosce.",
    cardImage: "carta_309.png",
    videoId: ""
  },
  {
    id: 310,
    code: "310",
    text: "Hai confuso un monopattino per una Harley.",
    cardImage: "carta_310.png",
    videoId: ""
  },
  {
    id: 311,
    code: "311",
    text: "Non vivere nell'ombra per paura della luce.",
    cardImage: "carta_311.png",
    videoId: ""
  },
  {
    id: 312,
    code: "312",
    text: "Sarà senza anima, come un concerto in playback senza il microfono.",
    cardImage: "carta_312.png",
    videoId: ""
  },
  {
    id: 313,
    code: "313",
    text: "Meglio ultimi in classifica che sul podio degli stronzi.",
    cardImage: "carta_313.png",
    videoId: ""
  },
  {
    id: 314,
    code: "314",
    text: "Fai un bel soundcheck di tutte le tue verità.",
    cardImage: "carta_314.png",
    videoId: ""
  },
  {
    id: 315,
    code: "315",
    text: "Cedi volentieri a questa nuova tentazione.",
    cardImage: "carta_315.png",
    videoId: ""
  },
  {
    id: 316,
    code: "316",
    text: "Cambia ruolo al bassista. Ma se non hai una band, almeno cambia quella foto profilo del novanta tre.",
    cardImage: "carta_316.png",
    videoId: ""
  },
  {
    id: 317,
    code: "317",
    text: "Prepara lo zaino per affrontare la prossima fine del mondo.",
    cardImage: "carta_317.png",
    videoId: ""
  },
  {
    id: 318,
    code: "318",
    text: "Siamo tutti colpevoli di non aver desiderato.",
    cardImage: "carta_318.png",
    videoId: ""
  },
  {
    id: 319,
    code: "319",
    text: "Non forgiare altre catene. Non forgiare altre catene, no!",
    cardImage: "carta_319.png",
    videoId: ""
  },
  {
    id: 320,
    code: "320",
    text: "Prepara lo zaino per un weekend al mare fuori stagione.",
    cardImage: "carta_320.png",
    videoId: ""
  },
  {
    id: 321,
    code: "321",
    text: "Prepara lo zaino e riempilo di cazzi tuoi.",
    cardImage: "carta_321.png",
    videoId: ""
  },
  {
    id: 322,
    code: "322",
    text: "Prepara lo zaino per un weekend ricco di peccato.",
    cardImage: "carta_322.png",
    videoId: ""
  },
  {
    id: 323,
    code: "323",
    text: "Impara a sognare più lontano.",
    cardImage: "carta_323.png",
    videoId: ""
  },
  {
    id: 324,
    code: "324",
    text: "Non pregare che vada bene piuttosto preparati per il maledetto bis.",
    cardImage: "carta_324.png",
    videoId: ""
  },
  {
    id: 325,
    code: "325",
    text: "Non inseguire quella luce, potrebbe essere una volante della polizia.",
    cardImage: "carta_325.png",
    videoId: ""
  },
  {
    id: 326,
    code: "326",
    text: "Inventati una scusa più plausibile.",
    cardImage: "carta_326.png",
    videoId: ""
  },
  {
    id: 327,
    code: "327",
    text: "Ruba tutte le password all'ispirazione.",
    cardImage: "carta_327.png",
    videoId: ""
  },
  {
    id: 328,
    code: "328",
    text: "Non sarà così semplice, a tratti detestabile, ma neanche facilmente dimenticabile. Imprevedibile. Senza regole. Intramontabile. Direi Irrefrenabile. Irripetibile ma mai stucchevole. Ma no, non così semplice, a tratti detestabile, ma neanche facilmente dimenticabile.",
    cardImage: "carta_328.png",
    videoId: ""
  },
  {
    id: 329,
    code: "329",
    text: "Dio non giudica, ma i vicini sì.",
    cardImage: "carta_329.png",
    videoId: ""
  },
  {
    id: 330,
    code: "330",
    text: "Spezza la croce e conserva i chiodi.",
    cardImage: "carta_330.png",
    videoId: ""
  },  
    {
    id: 331,
    code: "331",
    text: "Non aspettare sempre il segnale verde: le Rock star si lanciano col rosso.",
    cardImage: "carta_331.png",
    videoId: ""
  },
  {
    id: 332,
    code: "332",
    text: "L'ottava regola dell'Oracolo del Rock è : se una risposta ha risuonato con la tua anima, devi condividerla. La tua anima o la risposta!? Decidi tu.",
    cardImage: "carta_332.png",
    videoId: ""
  },
  {
    id: 333,
    code: "333",
    text: "Sii gentile, ma non disarmato.",
    cardImage: "carta_333.png",
    videoId: ""
  },
  {
    id: 334,
    code: "334",
    text: "Non hai altro tempo da perdere. Il tempo non ha pietà con chi non sa cavalcarlo.",
    cardImage: "carta_334.png",
    videoId: ""
  },
  {
    id: 335,
    code: "335",
    text: "Non ti illudere sul loro conto. Sono originali con soli dieci anni di ritardo.",
    cardImage: "carta_335.png",
    videoId: ""
  },
  {
    id: 336,
    code: "336",
    text: "Non è il momento di strappare contratti. E' il momento di farli rispettare da chi ti vuole fregare.",
    cardImage: "carta_336.png",
    videoId: ""
  },
  {
    id: 337,
    code: "337",
    text: "Strappa quel contratto che ti danneggia e basta. Non firmare più per nutrire il tuo ego. Strappa tutto per liberare l'anima.",
    cardImage: "carta_337.png",
    videoId: ""
  },
  {
    id: 338,
    code: "338",
    text: "Brucia le tappe. La destinazione scotta.",
    cardImage: "carta_338.png",
    videoId: ""
  },
  {
    id: 339,
    code: "339",
    text: "Prova quella chitarra che hai preso solo per bellezza. Non serve ad impressionare i tuoi ospiti, ma devi accarezzare il mito.",
    cardImage: "carta_339.png",
    videoId: ""
  },
  {
    id: 340,
    code: "340",
    text: "Devi aumentare il carico se vuoi vedere dei risultati. Il Rock non regala muscoli a nessuno.",
    cardImage: "carta_340.png",
    videoId: ""
  },
  {
    id: 341,
    code: "341",
    text: "Hai più bisogno di stretching che di nuovi carichi. Soprattutto per l'anima.",
    cardImage: "carta_341.png",
    videoId: ""
  },
  {
    id: 342,
    code: "342",
    text: "Esci tutte le sere.",
    cardImage: "carta_342.png",
    videoId: ""
  },
  {
    id: 343,
    code: "343",
    text: "Rintanati per un po' con la tua migliore musica. Il mondo può aspettare. La tua anima no.",
    cardImage: "carta_343.png",
    videoId: ""
  },
  {
    id: 344,
    code: "344",
    text: "A volte tra la scelta A e la scelta B quella giusta non è neanche nell'alfabeto.",
    cardImage: "carta_344.png",
    videoId: ""
  },
  {
    id: 345,
    code: "345",
    text: "Servirebbero tre fusti di birra del discount ed una sola buona idea.",
    cardImage: "carta_345.png",
    videoId: ""
  },
  {
    id: 346,
    code: "346",
    text: "Hai ordinato una birra scura e ti hanno servito del latte parzialmente scremato.",
    cardImage: "carta_346.png",
    videoId: ""
  },
  {
    id: 347,
    code: "347",
    text: "Gli assoli più complessi piacciono a pochi.",
    cardImage: "carta_347.png",
    videoId: ""
  },
  {
    id: 348,
    code: "348",
    text: "Su non essere faceto, non fare il finto tonto in stile Drugo.",
    cardImage: "carta_348.png",
    videoId: ""
  },
  {
    id: 349,
    code: "349",
    text: "Si, ma con una tavola da surf in spalla.",
    cardImage: "carta_349.png",
    videoId: ""
  },
  {
    id: 350,
    code: "350",
    text: "Si, ma con una moto su strada pronta a partire.",
    cardImage: "carta_350.png",
    videoId: ""
  },
  {
    id: 351,
    code: "351",
    text: "Si, ma parti con un mini van carico di buoni amici.",
    cardImage: "carta_351.png",
    videoId: ""
  },
  {
    id: 352,
    code: "352",
    text: "No, ti resteranno solo i postumi della sbronza ed una imbarazzante storia da nascondere.",
    cardImage: "carta_352.png",
    videoId: ""
  },
  {
    id: 353,
    code: "353",
    text: "Tatuati un ideogramma cinese senza saperne il significato. Dai, corri il rischio che sul tuo cuore ci sia un bel “Involtino primavera”.",
    cardImage: "carta_353.png",
    videoId: ""
  },
  {
    id: 354,
    code: "354",
    text: "A volte il coraggio è solo rimanere in silenzio per qualche secondo di più.",
    cardImage: "carta_354.png",
    videoId: ""
  },
  {
    id: 355,
    code: "355",
    text: "Siediti e respira. Lascia che sia la musica a trovare te.",
    cardImage: "carta_355.png",
    videoId: ""
  },
  {
    id: 356,
    code: "356",
    text: "Non è debole chi piange, è debole chi trattiene da troppo tempo.",
    cardImage: "carta_356.png",
    videoId: ""
  },
  {
    id: 357,
    code: "357",
    text: "Ogni crollo è solo la prova che stai ancora vivendo. Ed il Rock ti vuole vivo. Vivo, vivissimo.",
    cardImage: "carta_357.png",
    videoId: ""
  },
  {
    id: 358,
    code: "358",
    text: "Eroico come un' aperitivo analcolico con le olive bucate.",
    cardImage: "carta_358.png",
    videoId: ""
  },
  {
    id: 359,
    code: "359",
    text: "Fermati ad ascoltare cosa ti dice il Rock'n'Roll.",
    cardImage: "carta_359.png",
    videoId: ""
  },
  {
    id: 360,
    code: "360",
    text: "Lascia che questo pazzo mondo vada. Chi deve restare, resterà.",
    cardImage: "carta_360.png",
    videoId: ""
  },
  {
    id: 361,
    code: "361",
    text: "Non si tratta di vincere o perdere. Si tratta di restare autentici.",
    cardImage: "carta_361.png",
    videoId: ""
  },
  {
    id: 362,
    code: "362",
    text: "Problema tuo.",
    cardImage: "carta_362.png",
    videoId: ""
  },
  {
    id: 363,
    code: "363",
    text: "Se non puoi farne a meno, allora il pubblico, è il tuo inferno.",
    cardImage: "carta_363.png",
    videoId: ""
  },
  {
    id: 364,
    code: "364",
    text: "Non mi interessa.",
    cardImage: "carta_364.png",
    videoId: ""
  },
  {
    id: 365,
    code: "365",
    text: "Mostrati senza filtri. Il Rock ama tutte quelle adorabili imperfezioni.",
    cardImage: "carta_365.png",
    videoId: ""
  },
  {
    id: 366,
    code: "366",
    text: "Le lacrime non rovinano il trucco delle Rockstar, ma lo esaltano.",
    cardImage: "carta_366.png",
    videoId: ""
  },
  {
    id: 367,
    code: "367",
    text: "Se tra una risposta e l'altra hai sorriso, allora l'Oracolo del Rock ha fatto centro. Condividilo per un anno di grandi successi.",
    cardImage: "carta_367.png",
    videoId: ""
  },
  {
    id: 368,
    code: "368",
    text: "Siediti e tieniti forte : perché i deejay suonano.",
    cardImage: "carta_368.png",
    videoId: ""
  },
  {
    id: 369,
    code: "369",
    text: "Non cadere in una trappola che già conosci.",
    cardImage: "carta_369.png",
    videoId: ""
  },
  {
    id: 370,
    code: "370",
    text: "Se vuoi il Rock, vivi Rock. Se vuoi il Rock, non fare il Pop.",
    cardImage: "carta_370.png",
    videoId: ""
  },
  {
    id: 371,
    code: "371",
    text: "Ti hanno messo al collo un guinzaglio, su scioglilo prima che diventi un cappio.",
    cardImage: "carta_371.png",
    videoId: ""
  },
  {
    id: 372,
    code: "372",
    text: "Non farti rubare tutto il tuo tempo.",
    cardImage: "carta_372.png",
    videoId: ""
  },
  {
    id: 373,
    code: "373",
    text: "Non pretendere di realizzare ciò che non osi nemmeno desiderare.",
    cardImage: "carta_373.png",
    videoId: ""
  },
  {
    id: 374,
    code: "374",
    text: "Disintossicati da tutte quelle banalità che dici.",
    cardImage: "carta_374.png",
    videoId: ""
  },
  {
    id: 375,
    code: "375",
    text: "Ti illudono di essere indispensabile. Grazie mille, senza di te l'Oracolo del Rock non va da nessuna parte.",
    cardImage: "carta_375.png",
    videoId: ""
  },
  {
    id: 376,
    code: "376",
    text: "Io sarò anche un inquietante pupazzo meccanico ma a differenza tua io so di esserlo.",
    cardImage: "carta_376.png",
    videoId: ""
  },
  {
    id: 377,
    code: "377",
    text: "Datti una calmata e non rompermi il tasto.",
    cardImage: "carta_377.png",
    videoId: ""
  },
  {
    id: 378,
    code: "378",
    text: "Ti stai rilassando troppo sugli allori ma non sai neanche che cosa sono.",
    cardImage: "carta_378.png",
    videoId: ""
  },
  {
    id: 379,
    code: "379",
    text: "Che tristezza di domanda, piuttosto che risponderti mi spengo.",
    cardImage: "carta_379.png",
    videoId: ""
  },
  {
    id: 380,
    code: "380",
    text: "Che tristezza che mi fa, vedere che aspetti ancora qualcuno che ti ci porti.",
    cardImage: "carta_380.png",
    videoId: ""
  },
  {
    id: 381,
    code: "381",
    text: "La verità fa male. Ma da qualche parte del mondo è sempre estate.",
    cardImage: "carta_381.png",
    videoId: ""
  },
  {
    id: 382,
    code: "382",
    text: "L'ultima cosa Rock che ti ho visto fare è stato premere quel tasto. Fatti due domande.",
    cardImage: "carta_382.png",
    videoId: ""
  },
  {
    id: 383,
    code: "383",
    text: "Che tristezza i giovani che si credono già troppo vecchi.",
    cardImage: "carta_383.png",
    videoId: ""
  },
  {
    id: 384,
    code: "384",
    text: "Che tristezza i vecchi senza cuore che disprezzano i più giovani.",
    cardImage: "carta_384.png",
    videoId: ""
  },
  {
    id: 385,
    code: "385",
    text: "Puoi scommetterci la moto, le chitarre ed i vinili dei Pink Floyd.",
    cardImage: "carta_385.png",
    videoId: ""
  },
  {
    id: 386,
    code: "386",
    text: "Non fare la Rock star e rimetti a posto il letto, l'orgoglio ed il casino della vita che hai fatto.",
    cardImage: "carta_386.png",
    videoId: ""
  },
  {
    id: 387,
    code: "387",
    text: "Non ti serve capire tutto ora. Ti servono le palle per restare ancora in piedi.",
    cardImage: "carta_387.png",
    videoId: ""
  },
  {
    id: 388,
    code: "388",
    text: "Il Rock ti ha già scelto, per cui preparati a cambiare il tuo fottuto destino.",
    cardImage: "carta_388.png",
    videoId: ""
  },
  {
    id: 389,
    code: "389",
    text: "Ho visto tastieristi scopare più di te.",
    cardImage: "carta_389.png",
    videoId: ""
  },
  {
    id: 390,
    code: "390",
    text: "Fatti una tisana di calma, di rhum e di resistenza.",
    cardImage: "carta_390.png",
    videoId: ""
  },
  {
    id: 391,
    code: "391",
    text: "No, sarà delicato come un calcio in culo preso da Chuck Norris.",
    cardImage: "carta_391.png",
    videoId: ""
  },
  {
    id: 392,
    code: "392",
    text: "Non spaccare il palco ma spacca la chitarra.",
    cardImage: "carta_392.png",
    videoId: ""
  },
  {
    id: 393,
    code: "393",
    text: "Non esiste l’autotune del coraggio.",
    cardImage: "carta_393.png",
    videoId: ""
  },
  {
    id: 394,
    code: "394",
    text: "C'è chi sa fingere un orgasmo e chi sa fingere un Sold Out. Ma evita di fingere un bagliore che non hai.",
    cardImage: "carta_394.png",
    videoId: ""
  },
  {
    id: 395,
    code: "395",
    text: "Abbiamo già vinto tutti la lotteria della vita, per cui di rompere le palle falla finita.",
    cardImage: "carta_395.png",
    videoId: ""
  },
  {
    id: 396,
    code: "396",
    text: "Qualcuno ti tradirà.",
    cardImage: "carta_396.png",
    videoId: ""
  },
  {
    id: 397,
    code: "397",
    text: "Qualcuno di salverà.",
    cardImage: "carta_397.png",
    videoId: ""
  },
  {
    id: 398,
    code: "398",
    text: "Qualcuno ti farà innamorare di un gruppo che non conoscevi.",
    cardImage: "carta_398.png",
    videoId: ""
  },
  {
    id: 399,
    code: "399",
    text: "Condividere stronzate non porta da nessuna parte. Ma condividere l'Oracolo del Rock, dicono che porti benissimo.",
    cardImage: "carta_399.png",
    videoId: ""
  },
  {
    id: 400,
    code: "400",
    text: "No, è segreta come la prima regola del Fight Club.",
    cardImage: "carta_400.png",
    videoId: ""
  },
  {
    id: 401,
    code: "401",
    text: "C'è chi si trucca da pagliaccio e chi si trucca da Rock Star.",
    cardImage: "carta_401.png",
    videoId: ""
  },
  {
    id: 402,
    code: "402",
    text: "Il karma di sta già aiutando.",
    cardImage: "carta_402.png",
    videoId: ""
  },
  {
    id: 403,
    code: "403",
    text: "Non tentare il colpo. Qui sei tu il vero Jackpot. Non tentare il colpo. Qui sei tu il vero Jackpot del Rock'n'Roll.",
    cardImage: "carta_403.png",
    videoId: ""
  },
  {
    id: 404,
    code: "404",
    text: "Non farti abbindolare da falsi giudici e falsi testimoni.",
    cardImage: "carta_404.png",
    videoId: ""
  },
  {
    id: 405,
    code: "405",
    text: "Concediti il lusso di riprovarci ancora.",
    cardImage: "carta_405.png",
    videoId: ""
  },
  {
    id: 406,
    code: "406",
    text: "Sei uno spettacolo. Sei tu il prossimo show. Sei uno spettacolo. E qui regna il Rock'n'Roll.",
    cardImage: "carta_406.png",
    videoId: ""
  },
  {
    id: 407,
    code: "407",
    text: "No, non ti ripagherà abbastanza. Ne in gloria né in anima.",
    cardImage: "carta_407.png",
    videoId: ""
  },
  {
    id: 408,
    code: "408",
    text: "Ti vogliono vedere sconfitto piuttosto che vederti rialzare e risplendere di Rock.",
    cardImage: "carta_408.png",
    videoId: ""
  },
  {
    id: 409,
    code: "409",
    text: "Se sei abbastanza Rock potresti essere immune a certe stronzate.",
    cardImage: "carta_409.png",
    videoId: ""
  },
  {
    id: 410,
    code: "410",
    text: "Prova a farlo senza l'aiuto del pubblico.",
    cardImage: "carta_410.png",
    videoId: ""
  },
  {
    id: 411,
    code: "411",
    text: "Fanculo. Fanculo. Eh si fanculo. Perchè si. Perchè no. Perchè non so. Fanculo a go go.",
    cardImage: "carta_411.png",
    videoId: ""
  },
  {
    id: 412,
    code: "412",
    text: "Si ma non aspettare di avere ottanta anni per farlo.",
    cardImage: "carta_412.png",
    videoId: ""
  },
  {
    id: 413,
    code: "413",
    text: "Hai spaccato tutto. Si ma che spettacolo. Hai spaccato tutto. Perchè sei il Rock'n'Roll.",
    cardImage: "carta_413.png",
    videoId: ""
  },
  {
    id: 414,
    code: "414",
    text: "Tu fai Sold out. E chi non c'è più è out. Tu fai Sold out. Sei tu il loro Black out.",
    cardImage: "carta_414.png",
    videoId: ""
  },
  {
    id: 415,
    code: "415",
    text: "Si ma soddisfa anche il piacere della gola.",
    cardImage: "carta_415.png",
    videoId: ""
  },
  {
    id: 416,
    code: "416",
    text: "Ricontrolla per bene i tuoi piani.",
    cardImage: "carta_416.png",
    videoId: ""
  },
  {
    id: 417,
    code: "417",
    text: "Agisci con prudenza, almeno per questa volta.",
    cardImage: "carta_417.png",
    videoId: ""
  },
  {
    id: 418,
    code: "418",
    text: "No, tre gin tonic non miglioreranno il tuo jogging mattutino. Tanto meno le tue prestazioni nel padel.",
    cardImage: "carta_418.png",
    videoId: ""
  },
  {
    id: 419,
    code: "419",
    text: "No, questa volta non convincerai nessuno con il tuo talento straordinario.",
    cardImage: "carta_419.png",
    videoId: ""
  },
  {
    id: 420,
    code: "420",
    text: "Si e farai storcere il naso a qualche bigotto.",
    cardImage: "carta_420.png",
    videoId: ""
  },
  {
    id: 421,
    code: "421",
    text: "Raccoglierai solo le ceneri.",
    cardImage: "carta_421.png",
    videoId: ""
  },
  {
    id: 422,
    code: "422",
    text: "Preparati a firmare gli autografi.",
    cardImage: "carta_422.png",
    videoId: ""
  },
  {
    id: 423,
    code: "423",
    text: "Quando arrivi tu si riempiono gli stadi. Dimmi come fai, su dimmi come fai. Come fai?",
    cardImage: "carta_423.png",
    videoId: ""
  },
  {
    id: 424,
    code: "424",
    text: "No, non pagherà l'affitto ma pagherà il tuo animo Rock. Si, il tuo animo Rock.",
    cardImage: "carta_424.png",
    videoId: ""
  },
  {
    id: 425,
    code: "425",
    text: "Tutti vogliono essere NEO ma pochi sopravvivono alla realtà di Matrix.",
    cardImage: "carta_425.png",
    videoId: ""
  },
  {
    id: 426,
    code: "426",
    text: "Ogni volta che cadi, il Rock ti sta offrendo un nuovo palco su cui salire.",
    cardImage: "carta_426.png",
    videoId: ""
  },
  {
    id: 427,
    code: "427",
    text: "Ci sarà un giorno in cui capirai che il dolore era solo un pentagramma su cui incidere la tua canzone.",
    cardImage: "carta_427.png",
    videoId: ""
  },
  {
    id: 428,
    code: "428",
    text: "Rialzati piano, con la grazia di chi è stato buttato all’inferno ed è tornato accompagnato dal diavolo in persona.",
    cardImage: "carta_428.png",
    videoId: ""
  },
  {
    id: 429,
    code: "429",
    text: "Si apri il sipario ed inizi lo show ed inizi lo show. Chi ha atteso e lottato si vivi il bel flow. Brindiamo al successo, che è solo nostro. Brindiamo allo spasso e tutti gli altri nel cesso.",
    cardImage: "carta_429.png",
    videoId: ""
  },
  {
    id: 430,
    code: "430",
    text: "Forse la domanda giusta non è che altro fare, ma è cosa c'è da sentire meglio.",
    cardImage: "carta_430.png",
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
