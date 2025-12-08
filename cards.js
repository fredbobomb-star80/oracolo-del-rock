


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
    videoId: "YdEggax27GA"    
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
    videoId: "nAYIU2PIJJI"
  },
  {
    id: 4,
    code: "004",
    text: "Arriverà il momento. Me lo sento. Arriverà.",
    cardImage: "carta_004.png",
    videoId: "BjbPTpv-rCA"
  },
  {
    id: 5,
    code: "005",
    text: "Se non lo fai lo sai che lo rimpiangerai.",
    cardImage: "carta_005.png",
    videoId: "AWf0_6KypMc"
  },
  {
    id: 6,
    code: "006",
    text: "No. No, non aspettare un segno. Sii tu quel lampo fottutamente Rock!",
    cardImage: "carta_006.png",
    videoId: "bHmpeTSu_Z8"
  },
  {
    id: 7,
    code: "007",
    text: "Prendi il tuo tempo. Si, prenditi il tempo, che suona come questo Rock.",
    cardImage: "carta_007.png",
    videoId: "14iiUqChork"
  },
  {
    id: 8,
    code: "008",
    text: "Fatti i cazzi tuoi! Fatti i cazzi i tuoi! Si, pensa ai fatti tuoi.",
    cardImage: "carta_008.png",
    videoId: "VA1FmwnjeEE"
  },
  {
    id: 9,
    code: "009",
    text: "Follia! Si, questa è follia, ma mi piace. Si, ma che follia!",
    cardImage: "carta_009.png",
    videoId: "Cr-hUVQZ4XA"
  },
  {
    id: 10,
    code: "010",
    text: "Forse c'ha un altro. Magari no. Forse mi sbaglio. Magari no.",
    cardImage: "carta_010.png",
    videoId: "lKzWbJgaHFc"
  },
  {
    id: 11,
    code: "011",
    text: "C'è qualcosa che non sai. Ti tengono all'oscuro, Si, c'è qualcosa che non sai!",
    cardImage: "carta_011.png",
    videoId: "aah4wdOaoKA"
  },
  {
    id: 12,
    code: "012",
    text: "Non dipende da te. Oh, no no no no. Questo non dipende da te.",
    cardImage: "carta_012.png",
    videoId: "8gqzDuwbfcg"
  },
  {
    id: 13,
    code: "013",
    text: "Non serve che sia perfetto, serve che suoni vero. Vero!",
    cardImage: "carta_013.png",
    videoId: "SBK8msfRrss"
  },
  {
    id: 14,
    code: "014",
    text: "Adesso no, non ti serve urlare.\nMa lascia che sia il silenzio ad urlare per te.",
    cardImage: "carta_014.png",
    videoId: "haalUoYa3kg"
  },
  {
    id: 15,
    code: "015",
    text: "Finché vibra, restaci dentro.",
    cardImage: "carta_015.png",
    videoId: "7pYcY82VnDk"
  },
  {
    id: 16,
    code: "016",
    text: "Non puoi accordare delle corde che non puoi ascoltare.",
    cardImage: "carta_016.png",
    videoId: "3lamXJdnQYc"
  },
  {
    id: 17,
    code: "017",
    text: "Ama e gridalo al mondo, si!",
    cardImage: "carta_017.png",
    videoId: "AqYJP8-Whl0"
  },
  {
    id: 18,
    code: "018",
    text: "No. Non è amore, ma è sesso droga e Rock'n'Roll.",
    cardImage: "carta_018.png",
    videoId: "U-YcdNzGDAU"
  },
  {
    id: 19,
    code: "019",
    text: "Si e non è per i deboli di cuore.",
    cardImage: "carta_019.png",
    videoId: "aQPqgSM2hAs"
  },
  {
    id: 20,
    code: "020",
    text: "Chiudi quella chat e fallo di persona. Si! Ma chiudi quella chat!",
    cardImage: "carta_020.png",
    videoId: "MPbRqmQ3RQY"
  },
  {
    id: 21,
    code: "021",
    text: "Si, ma hai rotto il cazzo.",
    cardImage: "carta_021.png",
    videoId: "h3Z2YV8KhuM"
  },
  {
    id: 22,
    code: "022",
    text: "Sali su quel fottuto palco. E dai, non farti pregare ancora. Sali.",
    cardImage: "carta_022.png",
    videoId: "4XX_8tchdZM"
  },
  {
    id: 23,
    code: "023",
    text: "Ama. Ti dicono di no.\nMa se brucia tu ama, perché questo è Rock'n'Roll.",
    cardImage: "carta_023.png",
    videoId: "Nh0bPuEyA40"
  },
  {
    id: 24,
    code: "024",
    text: "Bastano un paio di birre. Si, un paio di birre e ti sarà tutto chiaro, si!",
    cardImage: "carta_024.png",
    videoId: "5dSMY3MmQx4"
  },
  {
    id: 25,
    code: "025",
    text: "Raccogli con gentilezza i pezzi ed accarezza l'anima.",
    cardImage: "carta_025.png",
    videoId: "_JgFttFnrlY"
  },
  {
    id: 26,
    code: "026",
    text: "No, oh no. Ti sta sfuggendo il tempo. Oh no.",
    cardImage: "carta_026.png",
    videoId: "O76xonqwSuw"
  },
  {
    id: 27,
    code: "027",
    text: "Sarà memorabile ma solo per pochi fortunati, si.",
    cardImage: "carta_027.png",
    videoId: "79R4LM5D3Xs"
  },
  {
    id: 28,
    code: "028",
    text: "Qualcuno si farà male e lo sai. Si lo sai, già.",
    cardImage: "carta_028.png",
    videoId: "ozvnikOZXCo"
  },
  {
    id: 29,
    code: "029",
    text: "La passione che brucia questo pazzo mondo è passata di moda, oppure no?",
    cardImage: "carta_029.png",
    videoId: "QFyb4OLYc2Y"
  },
  {
    id: 30,
    code: "030",
    text: "Si, se hai voglia di sudare e sputare sangue ancora. Si.\nSi se hai voglia di sudare e sputare altro sangue ancora allora, allora è un si!",
    cardImage: "carta_030.png",
    videoId: "vWjE0FgnYjE"   // <--- RISPOSTA NUMERO 30
  },
    {
    id: 31,
    code: "031",
    text: "Dai molla tutto, come una Rock star. Dai molla tutto come una dannata Rock star!",
    cardImage: "carta_031.png",
    videoId: "iDg9mOPv6Zk"
  },
  {
    id: 32,
    code: "032",
    text: "Preferisco vederti ballare sopra le fiamme dell'inferno piuttosto che vederti morire in una galera del paradiso.",
    cardImage: "carta_032.png",
    videoId: "Z9qdrTHgtyM"
  },
  {
    id: 33,
    code: "033",
    text: "La tua rabbia, ora, non è la tua musa migliore. No, ci puoi giurare che non lo è.",
    cardImage: "carta_033.png",
    videoId: "Pp5hKx-mqiU"
  },
  {
    id: 34,
    code: "034",
    text: "Spacca le tue catene e non voltarti mai. Dai su fallo, facci vedere.",
    cardImage: "carta_034.png",
    videoId: "IG0fdcaIFx4"
  },
  {
    id: 35,
    code: "035",
    text: "Perdona prima te stesso, poi penserai a tutto il resto.",
    cardImage: "carta_035.png",
    videoId: "C7JLcq2e3Ik"
  },
  {
    id: 36,
    code: "036",
    text: "Non esistono sbagli per chi suona il Rock'n'Roll. Ci sono solo verità per chi vive Rock!",
    cardImage: "carta_036.png",
    videoId: "BSMiFSY-wYE"
  },
  {
    id: 37,
    code: "037",
    text: "Stai guardando la luna, invece delle stelle. Ah si? E come mai? Come mai?",
    cardImage: "carta_037.png",
    videoId: "4WINkHNc6SQ"
  },
  {
    id: 38,
    code: "038",
    text: "Lanciati sulla folla. Ma ricorda che non c’è mai stata una cintura di sicurezza nel Rock'n'Roll.",
    cardImage: "carta_038.png",
    videoId: "LXGjnvKSyOk"
  },
  {
    id: 39,
    code: "039",
    text: "No, non tornare indietro. Non lo fare no! Non tornare solo perché hai sete un po'.",
    cardImage: "carta_039.png",
    videoId: "eRAHzs9FQBc"
  },
  {
    id: 40,
    code: "040",
    text: "Fidati del caos perché è più onesto di chi ti dà certezze e poi ti tradirà.",
    cardImage: "carta_040.png",
    videoId: "ux9A4N0kLdE"
  },
  {
    id: 41,
    code: "041",
    text: "Cerchi un segnale fuori, ma può essere solo rumore. Ascolta il suono che viene da dentro.",
    cardImage: "carta_041.png",
    videoId: "pHghI_hrUK4"
  },
  {
    id: 42,
    code: "042",
    text: "Scegli, anche se non sei pronto perché questo non è un treno che ti aspetta.",
    cardImage: "carta_042.png",
    videoId: "K2vozN6PQMw"
  },
  {
    id: 43,
    code: "043",
    text: "Smettila di chiedere permesso al destino. Non gliene frega un cazzo, lo hai capito o no?",
    cardImage: "carta_043.png",
    videoId: "7G2ruBhYrj4"
  },
  {
    id: 44,
    code: "044",
    text: "Non esiste un buon Rock che nasce da un bonsai. Il Rock nasce dai tuoni e tu lo sai.",
    cardImage: "carta_044.png",
    videoId: "OUDBhAfPCAM"
  },
  {
    id: 45,
    code: "045",
    text: "Smettila di inseguire i fantasmi. Sii tu l’incidente che cambia la trama.",
    cardImage: "carta_045.png",
    videoId: "rS50QmPqx3c"
  },
  {
    id: 46,
    code: "046",
    text: "Dimmi un po', cosa scriveranno sulla tua lapide? Leone o coglione oppure Rock'n'Roll.?",
    cardImage: "carta_046.png",
    videoId: "iNRo1J7o2tU"
  },
  {
    id: 47,
    code: "047",
    text: "Consigli gratis non esistono. Sta a te il compito di condividere il verbo. Metti un faccino, metti un like e condividi, l'oracolo del Rock!",
    cardImage: "carta_047.png",
    videoId: "iumbdZAsQ4g"
  },
  {
    id: 48,
    code: "048",
    text: "La mamma dei coglioni è sempre incinta e tu lo sai. La mamma dei coglioni, magari non ascolta il Rock.",
    cardImage: "carta_048.png",
    videoId: "m15IGkojZj8"
  },
  {
    id: 49,
    code: "049",
    text: "Vuoi solo sesso. E vorresti farlo spesso, dai che magari lo farai.",
    cardImage: "carta_049.png",
    videoId: "1xuqDpfAvpc"
  },
  {
    id: 50,
    code: "050",
    text: "Ma chi se ne frega della carriera, pensa un po' alla carrozzeria! Si, pensa alla tua via!",
    cardImage: "carta_050.png",
    videoId: "UjqshVy6jUs"
  },
  {
    id: 51,
    code: "051",
    text: "Come dice il proverbio? Tutto è impossibile finché un figlio di puttana non lo fà. Non lo fà.",
    cardImage: "carta_051.png",
    videoId: "cY97tI2MVK8"
  },
  {
    id: 52,
    code: "052",
    text: "Mandali a cagare. Fai in fretta si. Mandali a cagare almeno per un po'.",
    cardImage: "carta_052.png",
    videoId: "RiR9t0k8H1c"
  },
  {
    id: 53,
    code: "053",
    text: "Fai qualcosa di più originale. Metti in moto i neuroni e coglioni e non copiare più.",
    cardImage: "carta_053.png",
    videoId: "IJyQsoERYz4"
  },
  {
    id: 54,
    code: "054",
    text: "Arriverà qualcosa di hot, troppo hot. Si. Prepara il ghiaccio, se vuoi assaggiarne almeno un po'.",
    cardImage: "carta_054.png",
    videoId: "_v1CyRA-gbY"
  },
  {
    id: 55,
    code: "055",
    text: "La vita è troppo breve per farsi il sangue amaro per queste cazzate. Lo vuoi capire o no?",
    cardImage: "carta_055.png",
    videoId: "qHwItmMW6o8"
  },
  {
    id: 56,
    code: "056",
    text: "Goditela un po' e goditela un po'.",
    cardImage: "carta_056.png",
    videoId: "pcqeWves-fY"
  },
  {
    id: 57,
    code: "057",
    text: "Fatti due domande. Si! Poi fattene tre. Quindi arriva a quattro e ti risponderò.",
    cardImage: "carta_057.png",
    videoId: "JT6ZsE-NlsY"
  },
  {
    id: 58,
    code: "058",
    text: "Alzati. Corri. Grida. Balla. E se non hai abbastanza fiato lo troverai, si lo ritroverai.",
    cardImage: "carta_058.png",
    videoId: "8s951SSWWHg"
  },
  {
    id: 59,
    code: "059",
    text: "Cerchi la libertà. Ma hai abbastanza fegato per sostenerla?",
    cardImage: "carta_059.png",
    videoId: "w9gFG6Uq7kk"
  },
  {
    id: 60,
    code: "060",
    text: "Il dolore è arrivato per darti una bella sveglia. Allora che mi dici, ha funzionato o ne vuoi ancora un po'?",
    cardImage: "carta_060.png",
    videoId: "Fge3q4sVn8s"
  },
  {
    id: 61,
    code: "061",
    text: "Sento più inutile rabbia che sana curiosità. Qualcuno ti ha cagato nel latte stamattina?",
    cardImage: "carta_061.png",
    videoId: "6gN184oaUAw"
  },
  {
    id: 62,
    code: "062",
    text: "Fai quello che vuoi. Ma portati un amuleto, fidati che ti servirà.",
    cardImage: "carta_062.png",
    videoId: "sbmAburkkPY"
  },
  {
    id: 63,
    code: "063",
    text: "A chi stai cercando di piacere? A gente a cui non gliene frega niente di te?",
    cardImage: "carta_063.png",
    videoId: "DZJYtqt66tY"
  },
  {
    id: 64,
    code: "064",
    text: "Preferisci suonare la batteria o la chitarra? Scegli, perché o mantieni il tempo o fai bruciare il pentagramma.",
    cardImage: "carta_064.png",
    videoId: "4TVEM9ydFYA"
  },
  {
    id: 65,
    code: "065",
    text: "Hai poco fegato. Sento l'odore della tua paura. Fammi un favore, fatti un bel bagno di Rock.",
    cardImage: "carta_065.png",
    videoId: "MMgyz4YEits"
  },
  {
    id: 66,
    code: "066",
    text: "Si, ma sappi che nessuno ti applaudirà. Allora, lo farai lo stesso, si?",
    cardImage: "carta_066.png",
    videoId: "mGHTeBw-thg"
  },
  {
    id: 67,
    code: "067",
    text: "Non rompere le palle e fatti un Black Jack! Ci metti coca, whiskey, southern comfort ed un top di Rock'n'Roll.",
    cardImage: "carta_067.png",
    videoId: "YQbat4CTvS8"
  },
  {
    id: 68,
    code: "068",
    text: "Alchimista dell' anima. Ma attenzione al veleno. Si, Alchimista dell' anima. Ma attenzione al veleno!",
    cardImage: "carta_068.png",
    videoId: "uCCBwgc_T7Y"
  },
  {
    id: 69,
    code: "069",
    text: "Ti stan portando sfiga! Qualcuno fa voodoo. Ti stan portando sfiga. Riflettici un po' su!",
    cardImage: "carta_069.png",
    videoId: "YQLIWk1zxPU"
  },
  {
    id: 70,
    code: "070",
    text: "Falli crepare di invidia. Si. Falli crepare di invidia.",
    cardImage: "carta_070.png",
    videoId: "t0sshooHhls"
  },
  {
    id: 71,
    code: "071",
    text: "Ci vuole un caffè doppio. Magari anche corretto. Buttalo giù in un colpo. Serve lucidità!",
    cardImage: "carta_071.png",
    videoId: "KhwiudloPxU"
  },
  {
    id: 72,
    code: "072",
    text: "Con il cuore ferito ogni strada che farai sarà livida.",
    cardImage: "carta_072.png",
    videoId: "is2EOSa-H2w"
  },
  {
    id: 73,
    code: "073",
    text: "E' come se stessi giocando un gioco di dadi truccato. Ma chi ha portato il dado?",
    cardImage: "carta_073.png",
    videoId: "VaIL4ahoEec"
  },
  {
    id: 74,
    code: "074",
    text: "Qualcuno sta scommettendo forte contro di te. Ma tu puoi battere le fredde statistiche!",
    cardImage: "carta_074.png",
    videoId: "Lfanl51HdAE"
  },
  {
    id: 75,
    code: "075",
    text: "E' stata abolita la schiavitù, ma il mondo è ancora pieno di servi, e tu?",
    cardImage: "carta_075.png",
    videoId: "isA3pVIongQ"
  },
  {
    id: 76,
    code: "076",
    text: "Guida fino a quando non incontri le onde dell'oceano. Poi cavalcale.",
    cardImage: "carta_076.png",
    videoId: "79-DOuTCQM8"
  },
  {
    id: 77,
    code: "077",
    text: "Smettila di guardare quelle foto sbiadite del passato.",
    cardImage: "carta_077.png",
    videoId: "TZS-n03lJqA"
  },
  {
    id: 78,
    code: "078",
    text: "Non ci crederai, ma qualcuno ti sta aspettando. Non so chi o dove sia, devi scoprirlo tu.",
    cardImage: "carta_078.png",
    videoId: "vjelqKasrnM"
  },
  {
    id: 79,
    code: "079",
    text: "Questo non è un viaggio da fare da soli. No. Questo non è affatto un viaggio da fare da soli.",
    cardImage: "carta_079.png",
    videoId: "GfDPdgUuYgc"
  },
  {
    id: 80,
    code: "080",
    text: "Ti stanno sottovalutando, non farlo anche tu. Oh no! Non farlo anche tu!",
    cardImage: "carta_080.png",
    videoId: "sv2LI9b7kco"
  },
  {
    id: 81,
    code: "081",
    text: "Si che vale la pena farlo. Ma questa volta ti suggerisco di muoverti con furbizia tra le ombre.",
    cardImage: "carta_081.png",
    videoId: "AW6OsjTBgVY"
  },
  {
    id: 82,
    code: "082",
    text: "No, niente da fare. Lo sento che brucia, ma questo no, non è il momento.",
    cardImage: "carta_082.png",
    videoId: "Lxd52-mCV7M"
  },
  {
    id: 83,
    code: "083",
    text: "Dai una bella lucidata al cuore. Lustra gli stivali e salta in sella.",
    cardImage: "carta_083.png",
    videoId: "c4ogyYfZz6M"
  },
  {
    id: 84,
    code: "084",
    text: "E' il momento di uscire con il tuo nuovo album, qualunque esso sia.",
    cardImage: "carta_084.png",
    videoId: "ermWXTo_eYA"
  },
  {
    id: 85,
    code: "085",
    text: "Non avere paura di farti beccare con le mani nel sacco.",
    cardImage: "carta_085.png",
    videoId: "janQsliAItw"
  },
  {
    id: 86,
    code: "086",
    text: "Prendi i soldi e scappa. Corri al aeroporto, prendi il primo volo e non tornare più.",
    cardImage: "carta_086.png",
    videoId: "zFtErxJjo7A"
  },
  {
    id: 87,
    code: "087",
    text: "Vivi con gli assi nascosti nelle maniche e con i sassi nel cuore.",
    cardImage: "carta_087.png",
    videoId: "NZrT0ZvnnCc"
  },
  {
    id: 88,
    code: "088",
    text: "Non è il momento di essere avidi o avari o taccagni.",
    cardImage: "carta_088.png",
    videoId: "bYa7_sr27vY"
  },
  {
    id: 89,
    code: "089",
    text: "Vedo tre porte. Un lupo. Una spia. Un serpente e solo l'ultimo colpo in canna.",
    cardImage: "carta_089.png",
    videoId: "G4Oh7bMEJgk"
  },
  {
    id: 90,
    code: "090",
    text: "Se quella belva si fida di te non ti sbranerà. No. Se quella belva si fida di te non ti sbranerà.",
    cardImage: "carta_090.png",
    videoId: "KWAJR2eBYhQ"
  },
  {
    id: 91,
    code: "091",
    text: "La prima regola dell'Oracolo del Rock è : L'Oracolo è un gioco serissimo. Si, stai giocando con il fuoco!",
    cardImage: "carta_091.png",
    videoId: "45CM2Xp8Auw"
  },
  {
    id: 92,
    code: "092",
    text: "Se vuoi bruciare, fallo per te, non per dimostrare qualcosa a qualcuno.",
    cardImage: "carta_092.png",
    videoId: "Cq4mzAcnmrk"
  },
  {
    id: 93,
    code: "093",
    text: "Non farti fregare. Non farti accecare proprio ora da questi sterili scopi.",
    cardImage: "carta_093.png",
    videoId: "FV23nBXTyl8"
  },
  {
    id: 94,
    code: "094",
    text: "Insegui il piacere, ora, senza se e senza ma. Ora.",
    cardImage: "carta_094.png",
    videoId: "LqkqU-vb2XU"
  },
  {
    id: 95,
    code: "095",
    text: "Togliti le cuffie, spegni tutto ed accarezza il mondo per un pò.",
    cardImage: "carta_095.png",
    videoId: "2ky6FEoiVCQ"
  },
  {
    id: 96,
    code: "096",
    text: "Ti stanno vendendo la prudenza a discapito della pazienza.",
    cardImage: "carta_096.png",
    videoId: "dPuYdewR3hY"
  },
  {
    id: 97,
    code: "097",
    text: "Prima devi visitare tre posti. Quelli che sono anni che ti dici che li visiterai e non lo fai mai.",
    cardImage: "carta_097.png",
    videoId: "c7OLwhNHkhY"
  },
  {
    id: 98,
    code: "098",
    text: "L'omologazione è contagiosa, forza, distinguiti un po'.",
    cardImage: "carta_098.png",
    videoId: "8M6OTDuMfHY"
  },
  {
    id: 99,
    code: "099",
    text: "Oggi non pensare al futuro. Pensa a chi eri durante la tua infanzia.",
    cardImage: "carta_099.png",
    videoId: "XCD9yuAFBLo"
  },
  {
    id: 100,
    code: "100",
    text: "Non esiste giustizia in questo mondo. Altrimenti perché sarebbe nato il Rock?",
    cardImage: "carta_100.png",
    videoId: "27D07z3uL2o"
  },
  {
    id: 101,
    code: "101",
    text: "Magari ti sei perso si, ma almeno non stai seguendo le orme di nessuno.",
    cardImage: "carta_101.png",
    videoId: "KmIUWazjDT8"
  },
  {
    id: 102,
    code: "102",
    text: "Si. Ma con più stile questa volta. Tipo a duecento all'ora contro mano.",
    cardImage: "carta_102.png",
    videoId: "3FBxBvxeRu8"
  },
  {
    id: 103,
    code: "103",
    text: "No, non farlo no. Scegli meglio il tuo palco la prossima volta.",
    cardImage: "carta_103.png",
    videoId: "xoncoEj5KMw"
  },
  {
    id: 104,
    code: "104",
    text: "Allenta il carico. Svuota il peso dell'anima. Ripulisci l'armadio dei ricordi.",
    cardImage: "carta_104.png",
    videoId: "ENV07It-X50"
  },
  {
    id: 105,
    code: "105",
    text: "Il tuo ego vuole solo un biscottino. La tua anima vuole tutto il buffet.",
    cardImage: "carta_105.png",
    videoId: "4W-FWCQUy3U"
  },
  {
    id: 106,
    code: "106",
    text: "Si, ma non permettere di farti sporcare l'abito nuovo. E giù quelle manacce!",
    cardImage: "carta_106.png",
    videoId: "AAmD0rcTBTs"
  },
  {
    id: 107,
    code: "107",
    text: "Qui non è vietato piangere. Qui è vietato anestetizzare l'anima.",
    cardImage: "carta_107.png",
    videoId: "HlmZKnuojXY"
  },
  {
    id: 108,
    code: "108",
    text: "Prova a sfidare quella tua paura invece. Come? Metti un brano Rock e va.",
    cardImage: "carta_108.png",
    videoId: "_HpZVzoSFQw"
  },
  {
    id: 109,
    code: "109",
    text: "Si, ma quando è l'ultima volta che hai fatto del buon sesso? Del buon sesso si!",
    cardImage: "carta_109.png",
    videoId: "tbMyZ5lG5oI"
  },
  {
    id: 110,
    code: "110",
    text: "Se vuoi incontrare un demone vai pure. Ma attento ai suoi tracobetti. Si dice così no?",
    cardImage: "carta_110.png",
    videoId: "u0iVI0JtUSA"
  },
  {
    id: 111,
    code: "111",
    text: "Cosa? Adesso saresti tu il problema? Ma hai guardato bene chi lo ha sentenziato?",
    cardImage: "carta_111.png",
    videoId: "KMxBxyrY8sY"
  },
  {
    id: 112,
    code: "112",
    text: "Su forza, ridi sopra a questa folle e bizzarra idea.",
    cardImage: "carta_112.png",
    videoId: "uDlhcjmvm3Y"
  },
  {
    id: 113,
    code: "113",
    text: "Hai voluto fare l’eroe ma ti sei trovato in prima fila all’inferno.",
    cardImage: "carta_113.png",
    videoId: "rvlEgArpaPU"
  },
  {
    id: 114,
    code: "114",
    text: "Puoi farlo, ma quei bastardi usciranno dalle fottute pareti. Da quelle fottute pareti, si.",
    cardImage: "carta_114.png",
    videoId: "EB5FuH-DamY"
  },
  {
    id: 115,
    code: "115",
    text: "Prima devi ritrovare la fede. Quella tua, quella vera, quella Rock.",
    cardImage: "carta_115.png",
    videoId: "q2VZlm9fgkw"
  },
  {
    id: 116,
    code: "116",
    text: "Chiedi una mano a qualcuno che abbia almeno dieci anni meno di te.",
    cardImage: "carta_116.png",
    videoId: "Fbg7A9y552o"
  },
  {
    id: 117,
    code: "117",
    text: "Il purgatorio è pieno di musicisti che hanno smesso troppo presto di crederci. Non ti mettere in coda anche tu.",
    cardImage: "carta_117.png",
    videoId: "BXe8aQO5ReM"
  },
  {
    id: 118,
    code: "118",
    text: "Improvvisa e facci il favore, si. Cerca di essere meno prevedibile di così.",
    cardImage: "carta_118.png",
    videoId: "YCxR-OgyRVs"
  },
  {
    id: 119,
    code: "119",
    text: "Me lo chiedi solo per farmi girare i coglioni, non è vero? Non è così?",
    cardImage: "carta_119.png",
    videoId: "c0tweQL-LDc"
  },
  {
    id: 120,
    code: "120",
    text: "Non firmare niente. Questo è un accordo che si fa guardandosi dritto negli occhi e con forti strette di mano.",
    cardImage: "carta_120.png",
    videoId: "uu8HVLFOmVc"
  },
  {
    id: 121,
    code: "121",
    text: "Sembra una montagna troppo alta da scalare. Con lo sguardo fisso in alto, respira e fai una presa per volta.",
    cardImage: "carta_121.png",
    videoId: "kdci1eitvlM"
  },
  {
    id: 122,
    code: "122",
    text: "Il sistema ti vuole confuso ed infelice. Inverti il gioco, confondilo tu. Si scuoti le stramaledette acque.",
    cardImage: "carta_122.png",
    videoId: "gSF-XM9tfhA"
  },
  {
    id: 123,
    code: "123",
    text: "Hai firmato un contratto con la paura, è il momento di disdire l’abbonamento.",
    cardImage: "carta_123.png",
    videoId: "ve0-To3NNO0"
  },
  {
    id: 124,
    code: "124",
    text: "Ti chiamano maestro, ma lo fanno con disprezzo. Questo ti fermerà?",
    cardImage: "carta_124.png",
    videoId: "AnFlBIY6bjY"
  },
  {
    id: 125,
    code: "125",
    text: "Ogni palco è un tribunale, ogni applauso una sentenza.",
    cardImage: "carta_125.png",
    videoId: "nDhoQr62bNw"
  },
  {
    id: 126,
    code: "126",
    text: "Ribelli di oggi non ti vendono abbonamenti a corsi motivazionali. Ti fanno vedere come si fa, punto e basta.",
    cardImage: "carta_126.png",
    videoId: "nZr1p8s_Ccw"
  },
  {
    id: 127,
    code: "127",
    text: "La seconda regola dell'Oracolo del Rock è : tra una risposta e l'altra fatti una risata e se puoi balla.",
    cardImage: "carta_127.png",
    videoId: "IYlP30s88aA"
  },
  {
    id: 128,
    code: "128",
    text: "Mode temporanee, meteore e fenomeni da baraccone.",
    cardImage: "carta_128.png",
    videoId: "IFSDWDDF5zc"
  },
  {
    id: 129,
    code: "129",
    text: "Potrebbe cambiare la tua vita.",
    cardImage: "carta_129.png",
    videoId: "XX_sjlKyLiM"
  },
  {
    id: 130,
    code: "130",
    text: "Non è colpa tua se ti hanno dato un microfono spento. Ma tu puoi ancora urlare.",
    cardImage: "carta_130.png",
    videoId: "M5ajl-ieuAo"
  },
  {
    id: 131,
    code: "131",
    text: "Stacca la spina e guarda, si guarda le stelle e respira. Forse stanotte la tua stella splenderà.",
    cardImage: "carta_131.png",
    videoId: "M2n-_hZVtCI"
  },
  {
    id: 132,
    code: "132",
    text: "Solo gli eroi cambiano il proprio destino, si ma lo fanno a caro, carissimo prezzo.",
    cardImage: "carta_132.png",
    videoId: "Zx8_tzszRJQ"
  },
  {
    id: 133,
    code: "133",
    text: "Ma cosa indossi, cosa sono quelle? Collane d'oro o catene d'oro?",
    cardImage: "carta_133.png",
    videoId: "jmYb1wpyNJk"
  },
  {
    id: 134,
    code: "134",
    text: "Hai confuso i fan con gli amici. Dimmi, cosa te ne fai di un milione di like? Si dimmi cosa te ne fai?",
    cardImage: "carta_134.png",
    videoId: "iIbQsMJY0bk"
  },
  {
    id: 135,
    code: "135",
    text: "Oggi fai un gioco, magari, lettere, verità e testamento. Oggi fai un gioco, si. Lettere, verità e testamento.",
    cardImage: "carta_135.png",
    videoId: "7mKYtW-Az6Y"
  },
  {
    id: 136,
    code: "136",
    text: "Non serve cambiare il mondo ma possiamo evitare di suonare per i bastardi.",
    cardImage: "carta_136.png",
    videoId: "xnAvpt7ZeGY"
  },
  {
    id: 137,
    code: "137",
    text: "La Dea della fortuna oggi busserà alla tua porta. Fatti trovare a casa.",
    cardImage: "carta_137.png",
    videoId: "kWSBe3YGGLk"
  },
  {
    id: 138,
    code: "138",
    text: "Ti hanno convinto che ribellarti fosse fuori moda come il Rock.",
    cardImage: "carta_138.png",
    videoId: "_y1svxhiBw0"
  },
  {
    id: 139,
    code: "139",
    text: "Il tuo silenzio oggi farà più rumore dei loro comunicati stampa.",
    cardImage: "carta_139.png",
    videoId: "auXrJDC94MQ"
  },
  {
    id: 140,
    code: "140",
    text: "Prendi il toro per le maledette corna. Prendi il toro per le corna. Prendi il toro per le stramaledette corna.",
    cardImage: "carta_140.png",
    videoId: "Bg2sSpmpogw"
  },
  {
    id: 141,
    code: "141",
    text: "Cambia mestiere che è meglio.",
    cardImage: "carta_141.png",
    videoId: "xB9MU9DwDoM"
  },
  {
    id: 142,
    code: "142",
    text: "Non sei rotto, sei solo accordato per un’altra frequenza. Quella vera, quella tua.",
    cardImage: "carta_142.png",
    videoId: "o1507d2dWSY"
  },
  {
    id: 143,
    code: "143",
    text: "Le verità non si urlano. Le bugie hanno bisogno di grossi megafoni.",
    cardImage: "carta_143.png",
    videoId: "6BxMspauNLI"
  },
  {
    id: 144,
    code: "144",
    text: "L’anima Rock. Anche in silenzio. Ha un volume da paura.",
    cardImage: "carta_144.png",
    videoId: "4Tt9O9mNOXo"
  },
  {
    id: 145,
    code: "145",
    text: "Componi una hit, ma con solo quattro accordi. Si, i soliti banali quattro potenti accordi del Rock.",
    cardImage: "carta_145.png",
    videoId: "lPCQ0heyzGU"
  },
  {
    id: 146,
    code: "146",
    text: "I sogni hanno bisogno di calli, di scelte e di sangue, non di likes. Ma di tutti quei likes dimmi che te ne fai?",
    cardImage: "carta_146.png",
    videoId: "Mg5KeAHDk-o"
  },
  {
    id: 147,
    code: "147",
    text: "Se non abbassi il volume, nessuno ti capirà, resterà solo quel dannato fischio nelle orecchie.",
    cardImage: "carta_147.png",
    videoId: "5EW5NbqAr-0"
  },
  {
    id: 148,
    code: "148",
    text: "Componi con tutte le note ed il sangue di cui sarai capace.",
    cardImage: "carta_148.png",
    videoId: "GJA3A-M5dWU"
  },
  {
    id: 149,
    code: "149",
    text: "Si ma non puntare alla top ten della mediocrità.",
    cardImage: "carta_149.png",
    videoId: "ayhyzK9jAmA"
  },
  {
    id: 150,
    code: "150",
    text: "Non temere chi non ti capisce. Temi chi finge di non ascoltare.",
    cardImage: "carta_150.png",
    videoId: "T7Fr1l4be8s"
  },
  {
    id: 151,
    code: "151",
    text: "Il rischio per un vero Rocker è la base della vita.",
    cardImage: "carta_151.png",
    videoId: "wTtQ-1rJAeU"
  },
  {
    id: 152,
    code: "152",
    text: "Potresti rimanere a terra. Fai prima il pieno. Il pieno di Rock, si.",
    cardImage: "carta_152.png",
    videoId: "df8WinyB01c"
  },
  {
    id: 153,
    code: "153",
    text: "Salta qualche ostacolo e stringi i denti.",
    cardImage: "carta_153.png",
    videoId: "AdpxXz_3sS8"
  },
  {
    id: 154,
    code: "154",
    text: "Butta tutti quei vecchi spartiti scritti a metà. Adesso, te ne serve solo uno e completo.",
    cardImage: "carta_154.png",
    videoId: "uxzrZZWJZJ8"
  },
  {
    id: 155,
    code: "155",
    text: "Andrà bene e sarà intramontabile, così come i vinili sono tornati di moda.",
    cardImage: "carta_155.png",
    videoId: "6U8cl2TG8Qo"
  },
  {
    id: 156,
    code: "156",
    text: "Bene, questo renderà l'universo meno noioso.",
    cardImage: "carta_156.png",
    videoId: "mQ_9oj8JmnE"
  },
  {
    id: 157,
    code: "157",
    text: "Chi non inciampa non ha mai ballato davvero, davvero.",
    cardImage: "carta_157.png",
    videoId: "fVy-ljyFSUU"
  },
  {
    id: 158,
    code: "158",
    text: "Chi ti ha spezzato non ti ha ferito, ti ha temprato.",
    cardImage: "carta_158.png",
    videoId: "Tipcw6O_3dE"
  },
  {
    id: 159,
    code: "159",
    text: "Ricordati di goderti tutto il casino, non solo l’arrivo.",
    cardImage: "carta_159.png",
    videoId: "46OkkWFvaC8"
  },
  {
    id: 160,
    code: "160",
    text: "Magari tra un paio di mesi non avrà importanza, ma oggi, ma oggi sì.",
    cardImage: "carta_160.png",
    videoId: "WVkbLDI1XNM"
  },
  {
    id: 161,
    code: "161",
    text: "Irresistibile e pericoloso come un bacio rubato nel backstage delle verità.",
    cardImage: "carta_161.png",
    videoId: "zbk4ErokZXU"
  },
  {
    id: 162,
    code: "162",
    text: "Si certo, originale come una cover band dei Queen.",
    cardImage: "carta_162.png",
    videoId: "aAEXgGs8hEY"
  },
  {
    id: 163,
    code: "163",
    text: "Non sei in ritardo, ma cazzo, non prendertela troppo comoda.",
    cardImage: "carta_163.png",
    videoId: "NE4uHZW2HIc"
  },
  {
    id: 164,
    code: "164",
    text: "Che titolo darai a questo nuovo capitolo?",
    cardImage: "carta_164.png",
    videoId: "n0M0jba4J4Q"
  },
  {
    id: 165,
    code: "165",
    text: "Nessuno applaude le attese. Ma pochi le reggono.",
    cardImage: "carta_165.png",
    videoId: "0ZOOuEkcVMo"
  },
  {
    id: 166,
    code: "166",
    text: "Ci sono note che non vuoi suonare.",
    cardImage: "carta_166.png",
    videoId: "e8oSrEULLyo"
  },
  {
    id: 167,
    code: "167",
    text: "Esiste solo una probabilità di successo su cento. Ma la cosa non ti fermerà, vero?",
    cardImage: "carta_167.png",
    videoId: "D_eAIK4v3kY"
  },
  {
    id: 168,
    code: "168",
    text: "Ogni notte senza la tua musica è solo una pausa.",
    cardImage: "carta_168.png",
    videoId: "TAok_U7Voac"
  },
  {
    id: 169,
    code: "169",
    text: "L’orologio non ha cuore, ma se sai usarlo ti indicherà il nord.",
    cardImage: "carta_169.png",
    videoId: "7uAYQSZJYoI"
  },
  {
    id: 170,
    code: "170",
    text: "Vacci piano.",
    cardImage: "carta_170.png",
    videoId: "5pGJe3WzHY0"
  },
  {
    id: 171,
    code: "171",
    text: "Le parole dei vecchi Rocker hanno più spessore di quanto credi.",
    cardImage: "carta_171.png",
    videoId: "Og6fOK7SJ18"
  },
  {
    id: 172,
    code: "172",
    text: "La malinconia sa essere puntuale, puntualissima. Ma tu spostale le lancette.",
    cardImage: "carta_172.png",
    videoId: "ss9siIbOZ6M"
  },
  {
    id: 173,
    code: "173",
    text: "Ricorda di santificare i figli del Rock. Si, santifica i figli del Rock.",
    cardImage: "carta_173.png",
    videoId: "gAL81n68UZ8"
  },
  {
    id: 174,
    code: "174",
    text: "Smetti di correre: il tuo vero pubblico ti aspetterà sempre e comunque.",
    cardImage: "carta_174.png",
    videoId: "DVYDjo7Vdvw"
  },
  {
    id: 175,
    code: "175",
    text: "Scegli i ricordi e gli insegnamenti più giusti per te.",
    cardImage: "carta_175.png",
    videoId: "D3ONpnfIKlI"
  },
  {
    id: 176,
    code: "176",
    text: "Anche l’attesa ha il suo ritmo. Puoi sostenerlo.",
    cardImage: "carta_176.png",
    videoId: "-64xcbJloGI"
  },
  {
    id: 177,
    code: "177",
    text: "Quando tutto tace, ascolta il respiro corto del tuo amplificatore.",
    cardImage: "carta_177.png",
    videoId: "DbgpRHKzNtI"
  },
  {
    id: 178,
    code: "178",
    text: "Ogni pausa può diventare un nuovo inizio.",
    cardImage: "carta_178.png",
    videoId: "I7U2xU3P2XY"
  },
  {
    id: 179,
    code: "179",
    text: "Interessante come un accordo tra il fa cagare maggiore ed il si coglione bemolle.",
    cardImage: "carta_179.png",
    videoId: "91dFxD1FiSw"
  },
  {
    id: 180,
    code: "180",
    text: "Sei caduto sette volte? Risorgine otto.",
    cardImage: "carta_180.png",
    videoId: "FXqBOVeMWDw"
  },
  {
    id: 181,
    code: "181",
    text: "No, non è la fine. E' solo un altro sound check.",
    cardImage: "carta_181.png",
    videoId: "6jcahFb_8hM"
  },
  {
    id: 182,
    code: "182",
    text: "Li chiamavano stupidi punk, ora li chiamano saggi, visionari, maestri, guru si prendi tutti i miei soldi e profeti.",
    cardImage: "carta_182.png",
    videoId: "dGJjcBaYpGk"
  },
  {
    id: 183,
    code: "183",
    text: "Il dolore è stato il tuo primo produttore artistico.",
    cardImage: "carta_183.png",
    videoId: "gIuQMUP97WY"
  },
  {
    id: 184,
    code: "184",
    text: "Hai perso tutto, quindi, finalmente, puoi suonare libero.",
    cardImage: "carta_184.png",
    videoId: "1SGfK8tZEjg"
  },
  {
    id: 185,
    code: "185",
    text: "Ogni cicatrice è un tatuaggio scelto dal destino.",
    cardImage: "carta_185.png",
    videoId: "0Cgh4eunz_8"
  },
  {
    id: 186,
    code: "186",
    text: "Oggi celebrerai con una bevuta la vittoria di qualcun altro.",
    cardImage: "carta_186.png",
    videoId: "rK0OQOI1Tcs"
  },
  {
    id: 187,
    code: "187",
    text: "Oggi non mischiare la birra con il succo di fragola.",
    cardImage: "carta_187.png",
    videoId: "btYmsXtiltE"
  },
  {
    id: 188,
    code: "188",
    text: "La notte è la tua migliore consigliera, fanne buon uso.",
    cardImage: "carta_188.png",
    videoId: "yt4kYB4ZKsI"
  },
  {
    id: 189,
    code: "189",
    text: "Non è il pubblico il problema, è il canale molto disturbato.",
    cardImage: "carta_189.png",
    videoId: "8OLmaZ3Dm9w"
  },
  {
    id: 190,
    code: "190",
    text: "Sali sul palco e racconta a tutti i tuoi segreti.",
    cardImage: "carta_190.png",
    videoId: "cfNhOlPnH_c"
  },
  {
    id: 191,
    code: "191",
    text: "Il Rock non guarisce gli zombie, il Rock è il vaccino all'epidemia. Si. Il vaccino all'epidemia!",
    cardImage: "carta_191.png",
    videoId: "EaL1g1aM9pg"
  },
  {
    id: 192,
    code: "192",
    text: "L’universo ha un debole per chi non si arrende, mai.",
    cardImage: "carta_192.png",
    videoId: "z0QlR-eat8g"
  },
  {
    id: 193,
    code: "193",
    text: "Questa scelta farà tremare molte persone.",
    cardImage: "carta_193.png",
    videoId: "kQSkYERK9-w"
  },
  {
    id: 194,
    code: "194",
    text: "Ogni errore è un accordo stonato che ripeti finchè non è perfetto.",
    cardImage: "carta_194.png",
    videoId: "c8WxLVtwjBM"
  },
  {
    id: 195,
    code: "195",
    text: "Non serve perdonare chi non ti chiede perdono.",
    cardImage: "carta_195.png",
    videoId: "UWFZENqOmKc"
  },
  {
    id: 196,
    code: "196",
    text: "La cenere non sa di morte, ma ha il sapore di un palco spento.",
    cardImage: "carta_196.png",
    videoId: "xy8tY13MwlA"
  },
  {
    id: 197,
    code: "197",
    text: "Le rinascite non si annunciano, all'improvviso esplodono. Si, esplodono!",
    cardImage: "carta_197.png",
    videoId: "hXvQfHj1VLk"
  },
  {
    id: 198,
    code: "198",
    text: "Punta tutto. Si hai capito bene, vai All-In ora.",
    cardImage: "carta_198.png",
    videoId: "7lWA6zFVrnM"
  },
  {
    id: 199,
    code: "199",
    text: "Torna in scena, fagli paura, torna in scena come un fantasma della storia, come il terrore della trama, si come l'incubo del Rock!",
    cardImage: "carta_199.png",
    videoId: "OWxAqkUxPi0"
  },
  {
    id: 200,
    code: "200",
    text: "Non sei più tu che cerchi lo spirito Rock: ormai è lui che da la caccia a te.",
    cardImage: "carta_200.png",
    videoId: "DbNXOeaMb4U"
  },
  {
    id: 201,
    code: "201",
    text: "Il mondo finisce ogni volta che parli a vanvera.",
    cardImage: "carta_201.png",
    videoId: "8nqNVa3pokQ"
  },
  {
    id: 202,
    code: "202",
    text: "Gli dei del Rock ti hanno sentito. E ridono, tanto, tantissimo.",
    cardImage: "carta_202.png",
    videoId: "HJ6rJ0v4WJ0"
  },
  {
    id: 203,
    code: "203",
    text: "Non oggi, non adesso, no, non ora.",
    cardImage: "carta_203.png",
    videoId: "H-iqP-EpPxU"
  },
  {
    id: 204,
    code: "204",
    text: "Riposati pure. Ma non staccare la chitarra.",
    cardImage: "carta_204.png",
    videoId: "sAIJ4MD6HIk"
  },
  {
    id: 205,
    code: "205",
    text: "Chiedilo a chi ti ha insegnato a camminare scalzo sulle macerie dei dischi rotti.",
    cardImage: "carta_205.png",
    videoId: "y-or6wdB_RQ"
  },
  {
    id: 206,
    code: "206",
    text: "Non ti dicono tutta la verità? Maddai e perché mai dovrebbero?",
    cardImage: "carta_206.png",
    videoId: "AEmiGOis2rc"
  },
  {
    id: 207,
    code: "207",
    text: "Che cazzo vuoi? Dimmi che cazzo vuoi. Onestamente, che cazzo vuoi?",
    cardImage: "carta_207.png",
    videoId: "k6McUcHdHlE"
  },
  {
    id: 208,
    code: "208",
    text: "E questo sarebbe il massimo che puoi dare? Ah si? Davvero?",
    cardImage: "carta_208.png",
    videoId: "YTrOvYoXfQQ"
  },
  {
    id: 209,
    code: "209",
    text: "Non cercare il paradiso, cerca di evitare troppi rimpianti.",
    cardImage: "carta_209.png",
    videoId: "x0Tjzguxei4"
  },
  {
    id: 210,
    code: "210",
    text: "La fine del mondo fa sempre comodo a qualcuno.",
    cardImage: "carta_210.png",
    videoId: "7nbO7R-6bcg"
  },
  {
    id: 211,
    code: "211",
    text: "Sei ciò che ami fare non ciò che ami collezionare.",
    cardImage: "carta_211.png",
    videoId: "osuFW8LT2QY"
  },
  {
    id: 212,
    code: "212",
    text: "Spegni tutto e stacca la spina per un po'.",
    cardImage: "carta_212.png",
    videoId: "NNht8zMnCfg"
  },
  {
    id: 213,
    code: "213",
    text: "L’anima Rock non ha bisogno di un cauto manager. Vuole un palco più grande ed un amplificatore più forte.",
    cardImage: "carta_213.png",
    videoId: "KB1gDkeEeCw"
  },
  {
    id: 214,
    code: "214",
    text: "Hai lasciato il segno, ora lascia il suono Rock'n'Roll",
    cardImage: "carta_214.png",
    videoId: "HTOgdOj45nE"
  },
  {
    id: 215,
    code: "215",
    text: "Questa è solo la prima offerta. Chiediti se sarà la migliore.",
    cardImage: "carta_215.png",
    videoId: "SfC7x0Y7wcM"
  },
  {
    id: 216,
    code: "216",
    text: "La terza regola dell'Oracolo del Rock è : poni una domanda per volta. Se te lo sto dicendo ci sarà un motivo, si?",
    cardImage: "carta_216.png",
    videoId: "MuLIzZ74a9M"
  },
  {
    id: 217,
    code: "217",
    text: "Il Rock sa anche fottersene di quello che sembrerebbe un buon ingaggio ma che di fatto non lo è.",
    cardImage: "carta_217.png",
    videoId: "aCk01u_7ACY"
  },
  {
    id: 218,
    code: "218",
    text: "Il Rock è morto? E tu cosa hai fatto per salvarlo?",
    cardImage: "carta_218.png",
    videoId: "2TGqYcd1smo"
  },
  {
    id: 219,
    code: "219",
    text: "Ti serve una nuova passione che ti rovini la pace.",
    cardImage: "carta_219.png",
    videoId: "IJFfP4aCu_Y"
  },
  {
    id: 220,
    code: "220",
    text: "Ascolta una playlist che non avresti mai ascoltato.",
    cardImage: "carta_220.png",
    videoId: "ASrd1BtgSP0"
  },
  {
    id: 221,
    code: "221",
    text: "Non cercare amore, ma cerca una chitarra più affidabile.",
    cardImage: "carta_221.png",
    videoId: "g-WbM_7Jwtg"
  },
  {
    id: 222,
    code: "222",
    text: "Prenota il tuo prossimo viaggio.",
    cardImage: "carta_222.png",
    videoId: "OUqHZoKTjyk"
  },
  {
    id: 223,
    code: "223",
    text: "Fai i debiti e compra quel biglietto. No, non mi interessa. Fai i debiti e compra quel biglietto.",
    cardImage: "carta_223.png",
    videoId: "dwKwY_RNm-k"
  },
  {
    id: 224,
    code: "224",
    text: "Non è possibile.",
    cardImage: "carta_224.png",
    videoId: "ZbFh8zo4cOI"
  },
  {
    id: 225,
    code: "225",
    text: "Il peccato è un'invenzione redditizia per chi vende le redenzioni.",
    cardImage: "carta_225.png",
    videoId: "JndN6jPe6OM"
  },
  {
    id: 226,
    code: "226",
    text: "Se ti tocca l’anima non devi chiedere altro.",
    cardImage: "carta_226.png",
    videoId: "YZQneo5zfXs"
  },
  {
    id: 227,
    code: "227",
    text: "Ti serve una notte lunga, buona musica e niente domande.",
    cardImage: "carta_227.png",
    videoId: "MNnjTtjeTLY"
  },
  {
    id: 228,
    code: "228",
    text: "Sei su questo mondo per far vibrare la pelle, non per far girare le palle!",
    cardImage: "carta_228.png",
    videoId: "3d6uSxuE3sk"
  },
  {
    id: 229,
    code: "229",
    text: "Non sei fragile, sei solo in tensione come l'ultima corda.",
    cardImage: "carta_229.png",
    videoId: "6PuyjiqLlQQ"
  },
  {
    id: 230,
    code: "230",
    text: "Baciale le cicatrici non le curve.",
    cardImage: "carta_230.png",
    videoId: "AQq9ysXkchY"
  }, 
  {
    id: 231,
    code: "231",
    text: "Molla il vittimismo e prenditi quella cazzo di responsabilità",
    cardImage: "carta_231.png",
    videoId: "FRxVFjr2COs"
  },
  {
    id: 232,
    code: "232",
    text: "Il piacere è un giro di rivoluzione, ma devi saperlo suonare.",
    cardImage: "carta_232.png",
    videoId: "HZUnSXzyrYk"
  },
  {
    id: 233,
    code: "233",
    text: "Le tue mani sono troppo stanche.",
    cardImage: "carta_233.png",
    videoId: "yrDweEhk4dM"
  },
  {
    id: 234,
    code: "234",
    text: "Le tue mani possono reggere questo peso.",
    cardImage: "carta_234.png",
    videoId: "UlJiHa_BRFU"
  },
  {
    id: 235,
    code: "235",
    text: "Non chiamarlo amore, chiamalo Broken Negroni. Just a Broken Negroni.",
    cardImage: "carta_235.png",
    videoId: "Jyp3kjvf0DE"
  },
  {
    id: 236,
    code: "236",
    text: "Solo se hai già fissato tutte le date del tour.",
    cardImage: "carta_236.png",
    videoId: "hLBXPAAlPR8"
  },
  {
    id: 237,
    code: "237",
    text: "Se hai paura di perderti come farai a trovare qualcosa di nuovo?",
    cardImage: "carta_237.png",
    videoId: "lmbtW9C2UvE"
  },
  {
    id: 238,
    code: "238",
    text: "È un pericolo che ha il gusto di un buon Rock.",
    cardImage: "carta_238.png",
    videoId: "93TSjuXWc5U"
  },
  {
    id: 239,
    code: "239",
    text: "C'è chi fa sesso e poi ci sei tu.",
    cardImage: "carta_239.png",
    videoId: "bvz6_RIGxWA"
  },
  {
    id: 240,
    code: "240",
    text: "Hai confuso una scoreggia per una Stratocaster.",
    cardImage: "carta_240.png",
    videoId: "6rolG9FfrIE"
  },
  {
    id: 241,
    code: "241",
    text: "Ogni bacio è un rischio. Vieni qui che ti do un bel bacetto.",
    cardImage: "carta_241.png",
    videoId: "NOMTAEL2v1U"
  },
  {
    id: 242,
    code: "242",
    text: "Ci sono passioni che uccidono lentamente. Scegli con cura.",
    cardImage: "carta_242.png",
    videoId: "XPufhOdlyZA"
  },
  {
    id: 243,
    code: "243",
    text: "Se non ti sporchi le mani, non stai vivendo abbastanza Rock.",
    cardImage: "carta_243.png",
    videoId: "_-fEDuNd798"
  },
  {
    id: 244,
    code: "244",
    text: "Ti salverà una birra fresca non una zuppa calda.",
    cardImage: "carta_244.png",
    videoId: "HQYMYt8a3n4"
  },
  {
    id: 245,
    code: "245",
    text: "Non tutti i demoni vengono per farti soffrire. Qualcuno arriva per ricordarti chi sei.",
    cardImage: "carta_245.png",
    videoId: "YFwbRMkDC_M"
  },
  {
    id: 246,
    code: "246",
    text: "Fai qualche sound check in più.",
    cardImage: "carta_246.png",
    videoId: "GLdZ1LmGD_E"
  },
  {
    id: 247,
    code: "247",
    text: "Ma dimmi un po'. Se non ti fa perdere il fiato, il sonno e sudore, non lo farebbe qualsiasi coglione?",
    cardImage: "carta_247.png",
    videoId: "JDqmm5qP11E"
  },
  {
    id: 248,
    code: "248",
    text: "E' come un biscotto della fortuna, ha il sapore di carta e ti racconta stronzate.",
    cardImage: "carta_248.png",
    videoId: "FIsx_N-9rgM"
  },
  {
    id: 249,
    code: "249",
    text: "Smettila di accordare le chitarre degli altri.",
    cardImage: "carta_249.png",
    videoId: "A23lzw-m5Kc"
  },
  {
    id: 250,
    code: "250",
    text: "Il corpo ha memorie che la mente nega ma che il cuore ricorda.",
    cardImage: "carta_250.png",
    videoId: "DGtfA3WTEJY"
  },
  {
    id: 251,
    code: "251",
    text: "Fai un'offerta che non si può rifiutare.",
    cardImage: "carta_251.png",
    videoId: "t5r-JoSf2BY"
  },
  {
    id: 252,
    code: "252",
    text: "Si, eccitante come una birra analcolica scaldata al microonde.",
    cardImage: "carta_252.png",
    videoId: "eKr4GLdqaOA"
  },
  {
    id: 253,
    code: "253",
    text: "Aspetta che scotta, scotta, scotta. Aspetta che scatta, scatta, scatta. Aspetta che sboccia, sboccia, sboccia.",
    cardImage: "carta_253.png",
    videoId: "I8ctpxfpFvU"
  },
  {
    id: 254,
    code: "254",
    text: "Blocca ed ignora. Blocca ed ignora. Blocca ed ignora. E perché no, segnala. God save the blocking.",
    cardImage: "carta_254.png",
    videoId: "nZfXsZtjVtI"
  },
  {
    id: 255,
    code: "255",
    text: "La quarta regola dell'Oracolo del Rock è : nessun discorso troppo complicato, ci penserà l'Oracolo ad incasinarti un po'.",
    cardImage: "carta_255.png",
    videoId: "i7oY4ywhOJE"
  },
  {
    id: 256,
    code: "256",
    text: "A questo punto qualcuno bestemmia. Lo fanno anche per molto meno si. Ma a questo punto qualcuno bestemmia.",
    cardImage: "carta_256.png",
    videoId: "p7PvxIk6X3M"
  },
  {
    id: 257,
    code: "257",
    text: "Spegni quella televisione del cazzo.",
    cardImage: "carta_257.png",
    videoId: "mSuxaPRH1Ho"
  },
  {
    id: 258,
    code: "258",
    text: "Valuta di inserire i cori e di cambiare il riff. Se non hai la minima idea di cosa stia parlando allora è un vai a cagare! Si, vai a cagare si!",
    cardImage: "carta_258.png",
    videoId: "4qMIfg6-fck"
  },
  {
    id: 259,
    code: "259",
    text: "Il suo odore sarà la tua nuova religione.",
    cardImage: "carta_259.png",
    videoId: "1dSwnR6FOa0"
  },
  {
    id: 260,
    code: "260",
    text: "Ti serve un letto più grande.",
    cardImage: "carta_260.png",
    videoId: "fKPWvHfU7VU"
  },
  {
    id: 261,
    code: "261",
    text: "L’amore non è una materia obbligatoria. L'odio si impara dalla prima ora di scuola.",
    cardImage: "carta_261.png",
    videoId: "EkOUF313zjU"
  },
  {
    id: 262,
    code: "262",
    text: "Fai qualcosa di tuo se ci riesci. Ma fai qualcosa di tuo.",
    cardImage: "carta_262.png",
    videoId: "0W-KKRCzBXw"
  },
  {
    id: 263,
    code: "263",
    text: "La pelle non mente. Le labbra si.",
    cardImage: "carta_263.png",
    videoId: "j49Wt_g07CQ"
  },
  {
    id: 264,
    code: "264",
    text: "Non fare debiti per comprare una nuova prigione. No, non fare debiti per comprare una nuova prigione.",
    cardImage: "carta_264.png",
    videoId: "N6NeJI3J28Y"
  },
  {
    id: 265,
    code: "265",
    text: "Sarà fantastico, come un concerto live di quelli che non si dimenticano mai. Da pelle d'oca.",
    cardImage: "carta_265.png",
    videoId: "UIPJUJPPpfA"
  },
  {
    id: 266,
    code: "266",
    text: "Se qualcuno stacca gli occhi dallo schermo e ti sorride, oggi giorno, vale più dell'oro.",
    cardImage: "carta_266.png",
    videoId: "m9c3E7W7tT0"
  },
  {
    id: 267,
    code: "267",
    text: "Come un giro di basso che rivoluziona il tutto ma che, mette in crisi il produttore, la majors ed il DJ",
    cardImage: "carta_267.png",
    videoId: "blOHhPixQz4"
  },
  {
    id: 268,
    code: "268",
    text: "Manda a fanculo il tuo capo.",
    cardImage: "carta_268.png",
    videoId: "qrtqt3oM5s4"
  },
  {
    id: 269,
    code: "269",
    text: "Prima fai un regalo speciale a qualcuno.",
    cardImage: "carta_269.png",
    videoId: "Ib-CT904Lnw"
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
    videoId: "GjfIxdVnz0A"
  },
  {
    id: 272,
    code: "272",
    text: "Complimenti. Ci vuole un talento speciale per far girare così tanto i coglioni al Karma.",
    cardImage: "carta_272.png",
    videoId: "CEIOTUt12k4"
  },
  {
    id: 273,
    code: "273",
    text: "Ascolta il primo brano in classifica di oggi.",
    cardImage: "carta_273.png",
    videoId: "tGcsHTDpXYE"
  },
  {
    id: 274,
    code: "274",
    text: "Ascolta il brano che era primo in classifica il giorno della tua nascita.",
    cardImage: "carta_274.png",
    videoId: "uMq3oiQruYk"
  },
  {
    id: 275,
    code: "275",
    text: "La quinta regola dell'Oracolo del Rock è : non puoi chiedere per qualcun altro. Ma se proprio ci tieni a farlo, taggalo.",
    cardImage: "carta_275.png",
    videoId: "zh0BtwS5_zg"
  },
  {
    id: 276,
    code: "276",
    text: "Hai pisciato fuori dal vaso. Hai decisamente pisciato fuori dal vaso, si.",
    cardImage: "carta_276.png",
    videoId: "mYo6HWeA2Po"
  },
  {
    id: 277,
    code: "277",
    text: "Hai lasciato la tua chitarra migliore a casa, come mai?",
    cardImage: "carta_277.png",
    videoId: "hDnsTWg_ctk"
  },
  {
    id: 278,
    code: "278",
    text: "Dai fastidio a qualcuno.",
    cardImage: "carta_278.png",
    videoId: "bK1irwtGhDE"
  },
  {
    id: 279,
    code: "279",
    text: "Si e sarà così che conquisterai nuovi fan.",
    cardImage: "carta_279.png",
    videoId: "SJtTLHp4Cq8"
  },
  {
    id: 280,
    code: "280",
    text: "No, non cercare il lieto fine. Cerca il fottuto, fottuto inizio, si.",
    cardImage: "carta_280.png",
    videoId: "cgbpBDA514g"
  },
  {
    id: 281,
    code: "281",
    text: "Si ma perderai qualche fan.",
    cardImage: "carta_281.png",
    videoId: "N8snSlcyiBU"
  },
  {
    id: 282,
    code: "282",
    text: "Ti renderà bene.",
    cardImage: "carta_282.png",
    videoId: "QSh9OsgUjbo"
  },
  {
    id: 283,
    code: "283",
    text: "Se continui così, pagherai più del dovuto.",
    cardImage: "carta_283.png",
    videoId: "Ym9I91gEz_I"
  },
  {
    id: 284,
    code: "284",
    text: "Hai imparato a stento a suonare un citofono, ma ti lanci in feroci critiche Rock.",
    cardImage: "carta_284.png",
    videoId: "Ki4WQXNmOGE"
  },
  {
    id: 285,
    code: "285",
    text: "E' la spezia giusta che renderà le cose più piccanti.",
    cardImage: "carta_285.png",
    videoId: "8aViI8RXfAw"
  },
  {
    id: 286,
    code: "286",
    text: "Ti annoierai, ma tieni la bocca chiusa.",
    cardImage: "carta_286.png",
    videoId: "7wAQOAMAcQc"
  },
  {
    id: 287,
    code: "287",
    text: "Un bacio è una prova microfono: se non vibra, cambia palco.",
    cardImage: "carta_287.png",
    videoId: "UNKVSzdeclg"
  },
  {
    id: 288,
    code: "288",
    text: "La vita è come una scatola di plettri, non sceglierai il migliore ma quello giusto per te.",
    cardImage: "carta_288.png",
    videoId: "dM51gyr_4gQ"
  },
  {
    id: 289,
    code: "289",
    text: "Prima la follia poi la famiglia e poi la follia ancora.",
    cardImage: "carta_289.png",
    videoId: "rWFMMHMeJuk"
  },
  {
    id: 290,
    code: "290",
    text: "Rock e fiamme.",
    cardImage: "carta_290.png",
    videoId: "zHL1m_AZwhI"
  },
  {
    id: 291,
    code: "291",
    text: "Fallo, si! E che il Rock sia sempre con te!",
    cardImage: "carta_291.png",
    videoId: "AX0gWTV3bck"
  },
  {
    id: 292,
    code: "292",
    text: "Sì, ma festeggia col wiskey migliore.",
    cardImage: "carta_292.png",
    videoId: "KOtrgHe_GWY"
  },
  {
    id: 293,
    code: "293",
    text: "La sesta regola dell'Oracolo del Rock è : niente haters e niente spazzatura. E' chiaro? Tenete le vostre boiate fuori di qui!",
    cardImage: "carta_293.png",
    videoId: "KFiFBgtjFko"
  },
  {
    id: 294,
    code: "294",
    text: "No, il destino oggi non prende appuntamenti inutili.",
    cardImage: "carta_294.png",
    videoId: "tub3lBuew_U"
  },
  {
    id: 295,
    code: "295",
    text: "O prendi subito l’iniziativa o sarai fatto fuori dai giochi.",
    cardImage: "carta_295.png",
    videoId: "eWP-8Tf2JuI"
  },
  {
    id: 296,
    code: "296",
    text: "Affila per bene la lama.",
    cardImage: "carta_296.png",
    videoId: "0VULYSCLyFI"
  },
  {
    id: 297,
    code: "297",
    text: "Scrolla. Commenta. Crepa.",
    cardImage: "carta_297.png",
    videoId: "rbbmYRnxn70"
  },
  {
    id: 298,
    code: "298",
    text: "No, scordatelo pure.",
    cardImage: "carta_298.png",
    videoId: "YPEpoFpDxGw"
  },
  {
    id: 299,
    code: "299",
    text: "Si, vai a tutto gas.",
    cardImage: "carta_299.png",
    videoId: "rnFqq0SLhWE"
  },
  {
    id: 300,
    code: "300",
    text: "Non inciampare dalle scale del paradiso.",
    cardImage: "carta_300.png",
    videoId: "beoTEK-V8Xc"
  },
  {
    id: 301,
    code: "301",
    text: "Non scivolare dalle scale dell'inferno.",
    cardImage: "carta_301.png",
    videoId: "tk1lGcPfYS8"
  },
  {
    id: 302,
    code: "302",
    text: "Prima di sfrecciare lungo le strade controlla i freni.",
    cardImage: "carta_302.png",
    videoId: "UJVxMvJliVI"
  },
  {
    id: 303,
    code: "303",
    text: "Provane un pò. Se ti accende è la cura, se ti spegne è il veleno.",
    cardImage: "carta_303.png",
    videoId: "XsGbAX0C6s0"
  },
  {
    id: 304,
    code: "304",
    text: "Le settima regola dell'Oracolo del Rock è : sono severamente vietati i leoni da tastiera. Tranne quelli che hanno fondato un gruppo Rock.",
    cardImage: "carta_304.png",
    videoId: "U1ajvmsbeK4"
  },
  {
    id: 305,
    code: "305",
    text: "Pensa con la tua testaccia dura.",
    cardImage: "carta_305.png",
    videoId: "eT2v4D7Yd7Y"
  },
  {
    id: 306,
    code: "306",
    text: "Fatti guidare dal tuo cuore ingolfato.",
    cardImage: "carta_306.png",
    videoId: "tB8qsipKEjw"
  },
  {
    id: 307,
    code: "307",
    text: "Non farti distrarre da quelle belle cosce!",
    cardImage: "carta_307.png",
    videoId: "OKY2pfwcems"
  },
  {
    id: 308,
    code: "308",
    text: "Cerca degli antichi tesori nascosti tra le macerie dell'oblio.",
    cardImage: "carta_308.png",
    videoId: "wOGQAzQS5BU"
  },
  {
    id: 309,
    code: "309",
    text: "Fatti distrarre un po' da quelle belle cosce.",
    cardImage: "carta_309.png",
    videoId: "zvrWe7unY_Y"
  },
  {
    id: 310,
    code: "310",
    text: "Hai confuso un monopattino per una Harley.",
    cardImage: "carta_310.png",
    videoId: "t8SVA8V6YSQ"
  },
  {
    id: 311,
    code: "311",
    text: "Non vivere nell'ombra per paura della luce.",
    cardImage: "carta_311.png",
    videoId: "II1C6l4MjIs"
  },
  {
    id: 312,
    code: "312",
    text: "Sarà senza anima, come un concerto in playback senza il microfono.",
    cardImage: "carta_312.png",
    videoId: "b0n5IWDJlHA"
  },
  {
    id: 313,
    code: "313",
    text: "Meglio ultimi in classifica che sul podio degli stronzi.",
    cardImage: "carta_313.png",
    videoId: "Pl3MIommSZ4"
  },
  {
    id: 314,
    code: "314",
    text: "Fai un bel soundcheck di tutte le tue verità.",
    cardImage: "carta_314.png",
    videoId: "PR25-t2jrWE"
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
    videoId: "desI1zGJunI"
  },
  {
    id: 317,
    code: "317",
    text: "Prepara lo zaino per affrontare la prossima fine del mondo.",
    cardImage: "carta_317.png",
    videoId: "afHdhjirgfM"
  },
  {
    id: 318,
    code: "318",
    text: "Siamo tutti colpevoli di non aver desiderato.",
    cardImage: "carta_318.png",
    videoId: "BfPVejebG84"
  },
  {
    id: 319,
    code: "319",
    text: "Non forgiare altre catene. Non forgiare altre catene, no!",
    cardImage: "carta_319.png",
    videoId: "Kw_5cYMowJM"
  },
  {
    id: 320,
    code: "320",
    text: "Prepara lo zaino per un weekend al mare fuori stagione.",
    cardImage: "carta_320.png",
    videoId: "6JC47gnDKMY"
  },
  {
    id: 321,
    code: "321",
    text: "Prepara lo zaino e riempilo di cazzi tuoi.",
    cardImage: "carta_321.png",
    videoId: "GMgj5d51f74"
  },
  {
    id: 322,
    code: "322",
    text: "Prepara lo zaino per un weekend ricco di peccato.",
    cardImage: "carta_322.png",
    videoId: "Hy0XXGRpNKQ"
  },
  {
    id: 323,
    code: "323",
    text: "Impara a sognare più lontano.",
    cardImage: "carta_323.png",
    videoId: "VLR5QOq7YVU"
  },
  {
    id: 324,
    code: "324",
    text: "Non pregare che vada bene piuttosto preparati per il maledetto bis.",
    cardImage: "carta_324.png",
    videoId: "7zcG2iRffpY"
  },
  {
    id: 325,
    code: "325",
    text: "Non inseguire quella luce, potrebbe essere una volante della polizia.",
    cardImage: "carta_325.png",
    videoId: "WhiM2TYChGc"
  },
  {
    id: 326,
    code: "326",
    text: "Inventati una scusa più plausibile.",
    cardImage: "carta_326.png",
    videoId: "bm_COLRjW4s"
  },
  {
    id: 327,
    code: "327",
    text: "Ruba tutte le password all'ispirazione.",
    cardImage: "carta_327.png",
    videoId: "vOApCXeYfbw"
  },
  {
    id: 328,
    code: "328",
    text: "Non sarà così semplice, a tratti detestabile, ma neanche facilmente dimenticabile. Imprevedibile. Senza regole. Intramontabile. Direi Irrefrenabile. Irripetibile ma mai stucchevole. Ma no, non così semplice, a tratti detestabile, ma neanche facilmente dimenticabile.",
    cardImage: "carta_328.png",
    videoId: "Z7NTk-TundY"
  },
  {
    id: 329,
    code: "329",
    text: "Dio non giudica, ma i vicini sì.",
    cardImage: "carta_329.png",
    videoId: "E1_t6ZdoTV4"
  },
  {
    id: 330,
    code: "330",
    text: "Spezza la croce e conserva i chiodi.",
    cardImage: "carta_330.png",
    videoId: "y1gSf26vs0o"
  },  
    {
    id: 331,
    code: "331",
    text: "Non aspettare sempre il segnale verde: le Rock star si lanciano col rosso.",
    cardImage: "carta_331.png",
    videoId: "JNWQdBqdEY4"
  },
  {
    id: 332,
    code: "332",
    text: "L'ottava regola dell'Oracolo del Rock è : se una risposta ha risuonato con la tua anima, devi condividerla. La tua anima o la risposta!? Decidi tu.",
    cardImage: "carta_332.png",
    videoId: "B_DpxNxgS28"
  },
  {
    id: 333,
    code: "333",
    text: "Sii gentile, ma non disarmato.",
    cardImage: "carta_333.png",
    videoId: "y43yGq8vAbo"
  },
  {
    id: 334,
    code: "334",
    text: "Non hai altro tempo da perdere. Il tempo non ha pietà con chi non sa cavalcarlo.",
    cardImage: "carta_334.png",
    videoId: "hdrtAN1xI5o"
  },
  {
    id: 335,
    code: "335",
    text: "Non ti illudere sul loro conto. Sono originali con soli dieci anni di ritardo.",
    cardImage: "carta_335.png",
    videoId: "oVORSCjzsg8"
  },
  {
    id: 336,
    code: "336",
    text: "Non è il momento di strappare contratti. E' il momento di farli rispettare da chi ti vuole fregare.",
    cardImage: "carta_336.png",
    videoId: "9SNJgpnYKhI"
  },
  {
    id: 337,
    code: "337",
    text: "Strappa quel contratto che ti danneggia e basta. Non firmare più per nutrire il tuo ego. Strappa tutto per liberare l'anima.",
    cardImage: "carta_337.png",
    videoId: "Llwsr8DvVYs"
  },
  {
    id: 338,
    code: "338",
    text: "Brucia le tappe. La destinazione scotta.",
    cardImage: "carta_338.png",
    videoId: "iO9JMBrBMb0"
  },
  {
    id: 339,
    code: "339",
    text: "Prova quella chitarra che hai preso solo per bellezza. Non serve ad impressionare i tuoi ospiti, ma devi accarezzare il mito.",
    cardImage: "carta_339.png",
    videoId: "IYqBIxCPI-I"
  },
  {
    id: 340,
    code: "340",
    text: "Devi aumentare il carico se vuoi vedere dei risultati. Il Rock non regala muscoli a nessuno.",
    cardImage: "carta_340.png",
    videoId: "yFhxJktZleU"
  },
  {
    id: 341,
    code: "341",
    text: "Hai più bisogno di stretching che di nuovi carichi. Soprattutto per l'anima.",
    cardImage: "carta_341.png",
    videoId: "rHgoFVNVqvE"
  },
  {
    id: 342,
    code: "342",
    text: "Esci tutte le sere.",
    cardImage: "carta_342.png",
    videoId: "x8gi4K8x6OA"
  },
  {
    id: 343,
    code: "343",
    text: "Rintanati per un po' con la tua migliore musica. Il mondo può aspettare. La tua anima no.",
    cardImage: "carta_343.png",
    videoId: "q8GrMvKQQCk"
  },
  {
    id: 344,
    code: "344",
    text: "A volte tra la scelta A e la scelta B quella giusta non è neanche nell'alfabeto.",
    cardImage: "carta_344.png",
    videoId: "b4-fWnrzgFY"
  },
  {
    id: 345,
    code: "345",
    text: "Servirebbero tre fusti di birra del discount ed una sola buona idea.",
    cardImage: "carta_345.png",
    videoId: "59PP5ur8lg0"
  },
  {
    id: 346,
    code: "346",
    text: "Hai ordinato una birra scura e ti hanno servito del latte parzialmente scremato.",
    cardImage: "carta_346.png",
    videoId: "4kYiKIBzgmk"
  },
  {
    id: 347,
    code: "347",
    text: "Gli assoli più complessi piacciono a pochi.",
    cardImage: "carta_347.png",
    videoId: "TYVcboRbCqs"
  },
  {
    id: 348,
    code: "348",
    text: "Su non essere faceto, non fare il finto tonto in stile Drugo.",
    cardImage: "carta_348.png",
    videoId: "KdPrTrT7tnY"
  },
  {
    id: 349,
    code: "349",
    text: "Si, ma con una tavola da surf in spalla.",
    cardImage: "carta_349.png",
    videoId: "uPazuoDiKOA"
  },
  {
    id: 350,
    code: "350",
    text: "Si, ma con una moto su strada pronta a partire.",
    cardImage: "carta_350.png",
    videoId: "tTZ_aTrADzg"
  },
  {
    id: 351,
    code: "351",
    text: "Si, ma parti con un mini van carico di buoni amici.",
    cardImage: "carta_351.png",
    videoId: "RrZd3-3rf-0"
  },
  {
    id: 352,
    code: "352",
    text: "No, ti resteranno solo i postumi della sbronza ed una imbarazzante storia da nascondere.",
    cardImage: "carta_352.png",
    videoId: "N6muNbcfLrw"
  },
  {
    id: 353,
    code: "353",
    text: "Tatuati un ideogramma cinese senza saperne il significato. Dai, corri il rischio che sul tuo cuore ci sia un bel “Involtino primavera”.",
    cardImage: "carta_353.png",
    videoId: "cxC11sqEVLw"
  },
  {
    id: 354,
    code: "354",
    text: "A volte il coraggio è solo rimanere in silenzio per qualche secondo di più.",
    cardImage: "carta_354.png",
    videoId: "z2NQvUHi2qk"
  },
  {
    id: 355,
    code: "355",
    text: "Siediti e respira. Lascia che sia la musica a trovare te.",
    cardImage: "carta_355.png",
    videoId: "8X9kzWtlCmc"
  },
  {
    id: 356,
    code: "356",
    text: "Non è debole chi piange, è debole chi trattiene da troppo tempo.",
    cardImage: "carta_356.png",
    videoId: "aMOvL9ftiH4"
  },
  {
    id: 357,
    code: "357",
    text: "Ogni crollo è solo la prova che stai ancora vivendo. Ed il Rock ti vuole vivo. Vivo, vivissimo.",
    cardImage: "carta_357.png",
    videoId: "Q8xjXn9wdlA"
  },
  {
    id: 358,
    code: "358",
    text: "Eroico come un' aperitivo analcolico con le olive bucate.",
    cardImage: "carta_358.png",
    videoId: "sID9SkwiuMs"
  },
  {
    id: 359,
    code: "359",
    text: "Fermati ad ascoltare cosa ti dice il Rock'n'Roll.",
    cardImage: "carta_359.png",
    videoId: "rxkcslU2sUQ"
  },
  {
    id: 360,
    code: "360",
    text: "Lascia che questo pazzo mondo vada. Chi deve restare, resterà.",
    cardImage: "carta_360.png",
    videoId: "ubcuM29GwFo"
  },
  {
    id: 361,
    code: "361",
    text: "Non si tratta di vincere o perdere. Si tratta di restare autentici.",
    cardImage: "carta_361.png",
    videoId: "xHSlMhT5W6U"
  },
  {
    id: 362,
    code: "362",
    text: "Problema tuo.",
    cardImage: "carta_362.png",
    videoId: "evvAM0z0ojU"
  },
  {
    id: 363,
    code: "363",
    text: "Se non puoi farne a meno, allora il pubblico, è il tuo inferno.",
    cardImage: "carta_363.png",
    videoId: "NKibtSs5auw"
  },
  {
    id: 364,
    code: "364",
    text: "Non mi interessa.",
    cardImage: "carta_364.png",
    videoId: "3PrXJ28TUkY"
  },
  {
    id: 365,
    code: "365",
    text: "Mostrati senza filtri. Il Rock ama tutte quelle adorabili imperfezioni.",
    cardImage: "carta_365.png",
    videoId: "QsydrAtCoyU"
  },
  {
    id: 366,
    code: "366",
    text: "Le lacrime non rovinano il trucco delle Rockstar, ma lo esaltano.",
    cardImage: "carta_366.png",
    videoId: "uM3_ZSFUlu4"
  },
  {
    id: 367,
    code: "367",
    text: "Se tra una risposta e l'altra hai sorriso, allora l'Oracolo del Rock ha fatto centro. Condividilo per un anno di grandi successi.",
    cardImage: "carta_367.png",
    videoId: "bvLTvWlTZtA"
  },
  {
    id: 368,
    code: "368",
    text: "Siediti e tieniti forte : perché i deejay suonano.",
    cardImage: "carta_368.png",
    videoId: "mL0mesO-snk"
  },
  {
    id: 369,
    code: "369",
    text: "Non cadere in una trappola che già conosci.",
    cardImage: "carta_369.png",
    videoId: "xqzpRUZwmLM"
  },
  {
    id: 370,
    code: "370",
    text: "Se vuoi il Rock, vivi Rock. Se vuoi il Rock, non fare il Pop.",
    cardImage: "carta_370.png",
    videoId: "P5olhs1RLP0"
  },
  {
    id: 371,
    code: "371",
    text: "Ti hanno messo al collo un guinzaglio, su scioglilo prima che diventi un cappio.",
    cardImage: "carta_371.png",
    videoId: "cHfl3-R5sa8"
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
    videoId: "TRtoT1om7XM"
  },
  {
    id: 374,
    code: "374",
    text: "Disintossicati da tutte quelle banalità che dici.",
    cardImage: "carta_374.png",
    videoId: "1YydeOztNqo"
  },
  {
    id: 375,
    code: "375",
    text: "Ti illudono di essere indispensabile. Grazie mille, senza di te l'Oracolo del Rock non va da nessuna parte.",
    cardImage: "carta_375.png",
    videoId: "JS0oKg7lS7Q"
  },
  {
    id: 376,
    code: "376",
    text: "Io sarò anche un inquietante pupazzo meccanico ma a differenza tua io so di esserlo.",
    cardImage: "carta_376.png",
    videoId: "2heu9Dj_EBw"
  },
  {
    id: 377,
    code: "377",
    text: "Datti una calmata e non rompermi il tasto.",
    cardImage: "carta_377.png",
    videoId: "2Vjyny98gu0"
  },
  {
    id: 378,
    code: "378",
    text: "Ti stai rilassando troppo sugli allori ma non sai neanche che cosa sono.",
    cardImage: "carta_378.png",
    videoId: "GUdpDSBdmsg"
  },
  {
    id: 379,
    code: "379",
    text: "Che tristezza di domanda, piuttosto che risponderti mi spengo.",
    cardImage: "carta_379.png",
    videoId: "nefZlM-mRRU"
  },
  {
    id: 380,
    code: "380",
    text: "Che tristezza che mi fa, vedere che aspetti ancora qualcuno che ti ci porti.",
    cardImage: "carta_380.png",
    videoId: "3TMzyCU9ojQ"
  },
  {
    id: 381,
    code: "381",
    text: "La verità fa male. Ma da qualche parte del mondo è sempre estate.",
    cardImage: "carta_381.png",
    videoId: "DrgXGzN6zhY"
  },
  {
    id: 382,
    code: "382",
    text: "L'ultima cosa Rock che ti ho visto fare è stato premere quel tasto. Fatti due domande.",
    cardImage: "carta_382.png",
    videoId: "5aiK-8x9960"
  },
  {
    id: 383,
    code: "383",
    text: "Che tristezza i giovani che si credono già troppo vecchi.",
    cardImage: "carta_383.png",
    videoId: "hkKXz0eYtxk"
  },
  {
    id: 384,
    code: "384",
    text: "Che tristezza i vecchi senza cuore che disprezzano i più giovani.",
    cardImage: "carta_384.png",
    videoId: "URgxGjm6m5s"
  },
  {
    id: 385,
    code: "385",
    text: "Puoi scommetterci la moto, le chitarre ed i vinili dei Pink Floyd.",
    cardImage: "carta_385.png",
    videoId: "EaVlVmYYpb8"
  },
  {
    id: 386,
    code: "386",
    text: "Non fare la Rock star e rimetti a posto il letto, l'orgoglio ed il casino della vita che hai fatto.",
    cardImage: "carta_386.png",
    videoId: "C2wi_8QoasM"
  },
  {
    id: 387,
    code: "387",
    text: "Non ti serve capire tutto ora. Ti servono le palle per restare ancora in piedi.",
    cardImage: "carta_387.png",
    videoId: "xUyicSD2jNg"
  },
  {
    id: 388,
    code: "388",
    text: "Il Rock ti ha già scelto, per cui preparati a cambiare il tuo fottuto destino.",
    cardImage: "carta_388.png",
    videoId: "1JMDtQquI24"
  },
  {
    id: 389,
    code: "389",
    text: "Ho visto tastieristi scopare più di te.",
    cardImage: "carta_389.png",
    videoId: "GlyWHCWC-3Q"
  },
  {
    id: 390,
    code: "390",
    text: "Fatti una tisana di calma, di rhum e di resistenza.",
    cardImage: "carta_390.png",
    videoId: "0d07mMvPTrc"
  },
  {
    id: 391,
    code: "391",
    text: "No, sarà delicato come un calcio in culo preso da Chuck Norris.",
    cardImage: "carta_391.png",
    videoId: "sYAmBGntCrw"
  },
  {
    id: 392,
    code: "392",
    text: "Non spaccare il palco ma spacca la chitarra.",
    cardImage: "carta_392.png",
    videoId: "ZE3H10ySvO0"
  },
  {
    id: 393,
    code: "393",
    text: "Non esiste l’autotune del coraggio.",
    cardImage: "carta_393.png",
    videoId: "26OL14x7myQ"
  },
  {
    id: 394,
    code: "394",
    text: "C'è chi sa fingere un orgasmo e chi sa fingere un Sold Out. Ma evita di fingere un bagliore che non hai.",
    cardImage: "carta_394.png",
    videoId: "lYElGxwym-w"
  },
  {
    id: 395,
    code: "395",
    text: "Abbiamo già vinto tutti la lotteria della vita, per cui di rompere le palle falla finita.",
    cardImage: "carta_395.png",
    videoId: "yigshZjev3Y"
  },
  {
    id: 396,
    code: "396",
    text: "Qualcuno ti tradirà.",
    cardImage: "carta_396.png",
    videoId: "OZaFRzr69q8"
  },
  {
    id: 397,
    code: "397",
    text: "Qualcuno di salverà.",
    cardImage: "carta_397.png",
    videoId: "8Di4H0Erjh8"
  },
  {
    id: 398,
    code: "398",
    text: "Qualcuno ti farà innamorare di un gruppo che non conoscevi.",
    cardImage: "carta_398.png",
    videoId: "EzG-jN8ItKs"
  },
  {
    id: 399,
    code: "399",
    text: "Condividere stronzate non porta da nessuna parte. Ma condividere l'Oracolo del Rock, dicono che porti benissimo.",
    cardImage: "carta_399.png",
    videoId: "Pgy5LidbD-Q"
  },
  {
    id: 400,
    code: "400",
    text: "No, è segreta come la prima regola del Fight Club.",
    cardImage: "carta_400.png",
    videoId: "IahH3sJ73OQ"
  },
  {
    id: 401,
    code: "401",
    text: "C'è chi si trucca da pagliaccio e chi si trucca da Rock Star.",
    cardImage: "carta_401.png",
    videoId: "cOUwcdNW_p0"
  },
  {
    id: 402,
    code: "402",
    text: "Il karma di sta già aiutando.",
    cardImage: "carta_402.png",
    videoId: "PaqSz0r19TQ"
  },
  {
    id: 403,
    code: "403",
    text: "Non tentare il colpo. Qui sei tu il vero Jackpot. Non tentare il colpo. Qui sei tu il vero Jackpot del Rock'n'Roll.",
    cardImage: "carta_403.png",
    videoId: "M_k03h5MoCA"
  },
  {
    id: 404,
    code: "404",
    text: "Non farti abbindolare da falsi giudici e falsi testimoni.",
    cardImage: "carta_404.png",
    videoId: "4WkTf7_viZo"
  },
  {
    id: 405,
    code: "405",
    text: "Concediti il lusso di riprovarci ancora.",
    cardImage: "carta_405.png",
    videoId: "IgBBquy7DTA"
  },
  {
    id: 406,
    code: "406",
    text: "Sei uno spettacolo. Sei tu il prossimo show. Sei uno spettacolo. E qui regna il Rock'n'Roll.",
    cardImage: "carta_406.png",
    videoId: "lNLAPD7Gglk"
  },
  {
    id: 407,
    code: "407",
    text: "No, non ti ripagherà abbastanza. Ne in gloria né in anima.",
    cardImage: "carta_407.png",
    videoId: "l3BKcCkZrqg"
  },
  {
    id: 408,
    code: "408",
    text: "Ti vogliono vedere sconfitto piuttosto che vederti rialzare e risplendere di Rock.",
    cardImage: "carta_408.png",
    videoId: "yO_WajeP0TU"
  },
  {
    id: 409,
    code: "409",
    text: "Se sei abbastanza Rock potresti essere immune a certe stronzate.",
    cardImage: "carta_409.png",
    videoId: "_rsTSHMB-DA"
  },
  {
    id: 410,
    code: "410",
    text: "Prova a farlo senza l'aiuto del pubblico.",
    cardImage: "carta_410.png",
    videoId: "gIbzEM6WC2I"
  },
  {
    id: 411,
    code: "411",
    text: "Fanculo. Fanculo. Eh si fanculo. Perchè si. Perchè no. Perchè non so. Fanculo a go go.",
    cardImage: "carta_411.png",
    videoId: "4tEA31jHTMg"
  },
  {
    id: 412,
    code: "412",
    text: "Si ma non aspettare di avere ottanta anni per farlo.",
    cardImage: "carta_412.png",
    videoId: "fZMzO_gZOro"
  },
  {
    id: 413,
    code: "413",
    text: "Hai spaccato tutto. Si ma che spettacolo. Hai spaccato tutto. Perchè sei il Rock'n'Roll.",
    cardImage: "carta_413.png",
    videoId: "RvJbYf32LyE"
  },
  {
    id: 414,
    code: "414",
    text: "Tu fai Sold out. E chi non c'è più è out. Tu fai Sold out. Sei tu il loro Black out.",
    cardImage: "carta_414.png",
    videoId: "5bcEVbfDt70"
  },
  {
    id: 415,
    code: "415",
    text: "Si ma soddisfa anche il piacere della gola.",
    cardImage: "carta_415.png",
    videoId: "5eN2Le85AGQ"
  },
  {
    id: 416,
    code: "416",
    text: "Ricontrolla per bene i tuoi piani.",
    cardImage: "carta_416.png",
    videoId: "hCMsCl95QTY"
  },
  {
    id: 417,
    code: "417",
    text: "Agisci con prudenza, almeno per questa volta.",
    cardImage: "carta_417.png",
    videoId: "Hz1IvXNxc1A"
  },
  {
    id: 418,
    code: "418",
    text: "No, tre gin tonic non miglioreranno il tuo jogging mattutino. Tanto meno le tue prestazioni nel padel.",
    cardImage: "carta_418.png",
    videoId: "atRLqf0UkUk"
  },
  {
    id: 419,
    code: "419",
    text: "No, questa volta non convincerai nessuno con il tuo talento straordinario.",
    cardImage: "carta_419.png",
    videoId: "MulKvyfBwd4"
  },
  {
    id: 420,
    code: "420",
    text: "Si e farai storcere il naso a qualche bigotto.",
    cardImage: "carta_420.png",
    videoId: "o9TeDRk-cFs"
  },
  {
    id: 421,
    code: "421",
    text: "Raccoglierai solo le ceneri.",
    cardImage: "carta_421.png",
    videoId: "u4mka_EHq30"
  },
  {
    id: 422,
    code: "422",
    text: "Preparati a firmare gli autografi.",
    cardImage: "carta_422.png",
    videoId: "YPO-4sBW9Ac"
  },
  {
    id: 423,
    code: "423",
    text: "Quando arrivi tu si riempiono gli stadi. Dimmi come fai, su dimmi come fai. Come fai?",
    cardImage: "carta_423.png",
    videoId: "fTW3Q9L6lBQ"
  },
  {
    id: 424,
    code: "424",
    text: "No, non pagherà l'affitto ma pagherà il tuo animo Rock. Si, il tuo animo Rock.",
    cardImage: "carta_424.png",
    videoId: "Mi5MtnhGepI"
  },
  {
    id: 425,
    code: "425",
    text: "Tutti vogliono essere NEO ma pochi sopravvivono alla realtà di Matrix.",
    cardImage: "carta_425.png",
    videoId: "mqqR0zLFLlI"
  },
  {
    id: 426,
    code: "426",
    text: "Ogni volta che cadi, il Rock ti sta offrendo un nuovo palco su cui salire.",
    cardImage: "carta_426.png",
    videoId: "7I69A0pnOzI"
  },
  {
    id: 427,
    code: "427",
    text: "Ci sarà un giorno in cui capirai che il dolore era solo un pentagramma su cui incidere la tua canzone.",
    cardImage: "carta_427.png",
    videoId: "asvDJGd94ec"
  },
  {
    id: 428,
    code: "428",
    text: "Rialzati piano, con la grazia di chi è stato buttato all’inferno ed è tornato accompagnato dal diavolo in persona.",
    cardImage: "carta_428.png",
    videoId: "2ywjnJE8d3o"
  },
  {
    id: 429,
    code: "429",
    text: "Si apri il sipario ed inizi lo show ed inizi lo show. Chi ha atteso e lottato si vivi il bel flow. Brindiamo al successo, che è solo nostro. Brindiamo allo spasso e tutti gli altri nel cesso.",
    cardImage: "carta_429.png",
    videoId: "Nm6qk9817G4"
  },
  {
    id: 430,
    code: "430",
    text: "Forse la domanda giusta non è che altro fare, ma è cosa c'è da sentire meglio.",
    cardImage: "carta_430.png",
    videoId: "KNFeLNwc-0M"
   },
  {
    id: 431,
    code: "431",
    text: "Quando credi di non avere più voce lascia che sia il tuo cuore a cantare.",
    cardImage: "carta_431.png",
    videoId: "BpGn9Le3UYM"
  },
  {
    id: 432,
    code: "432",
    text: "Nessuno nasce in piedi.",
    cardImage: "carta_432.png",
    videoId: "GOZrBzF-U-Q"
  },
  {
    id: 433,
    code: "433",
    text: "Hai cercato la luce dove ti vendevano ombre.",
    cardImage: "carta_433.png",
    videoId: "l4E_YMh2jVQ"
  },
  {
    id: 434,
    code: "434",
    text: "Ti rialzi se lo desideri ma resta a terra se ti piace mollare.",
    cardImage: "carta_434.png",
    videoId: "Sw-sZMecSb0"
  },
  {
    id: 435,
    code: "435",
    text: "La pace non intende le ragioni della guerra. Ma la guerra di rompere la pace lo intende benissimo.",
    cardImage: "carta_435.png",
    videoId: "PVclMC0JmI4"
  },
  {
    id: 436,
    code: "436",
    text: "No, non arriverà un giorno in cui tutto sarà risolto. La libertà comincia danzando sulle macerie dell'incertezza.",
    cardImage: "carta_436.png",
    videoId: "Hhwd5Wrk8HI"
  },
  {
    id: 437,
    code: "437",
    text: "Tutto questo disprezzo, non farà altro che darti la giusta carica per affrontare il prossimo palco.",
    cardImage: "carta_437.png",
    videoId: "M-ykqjfUoqw"
  },
  {
    id: 438,
    code: "438",
    text: "Scegli, o diventi leader o continui a seguire il flow ma senza rompere troppo i coglioni.",
    cardImage: "carta_438.png",
    videoId: "Sv_USC0T4DU"
  },
  {
    id: 439,
    code: "439",
    text: "Invece tu provaci lo stesso, nonostante tutto e tutti.",
    cardImage: "carta_439.png",
    videoId: "swH4f1gLl0M"
  },
  {
    id: 440,
    code: "440",
    text: "Spaccherai di brutto.",
    cardImage: "carta_440.png",
    videoId: "G_WScEw_uYg"
  },
  {
    id: 441,
    code: "441",
    text: "Difendi meglio i tuoi spazi interiori.",
    cardImage: "carta_441.png",
    videoId: "SKbyYGGeIXM"
  },
  {
    id: 442,
    code: "442",
    text: "Coerente come un terrapiattista sulla luna.",
    cardImage: "carta_442.png",
    videoId: "68ChtjxA7ow"
  },
  {
    id: 443,
    code: "443",
    text: "Hai disegnato con il sangue e dipinto con il tuo dolore. Vendi i tuoi capolavori a caro prezzo. A caro prezzo.",
    cardImage: "carta_443.png",
    videoId: "jOjkftI8pJ4"
  },
  {
    id: 444,
    code: "444",
    text: "Una Rock star non vende corsi su come diventare una Rock star.",
    cardImage: "carta_444.png",
    videoId: "L7d7oT3ySoo"
  },
  {
    id: 445,
    code: "445",
    text: "Qualcuno è vecchio, qualcun altro è Lenny Kravitz.",
    cardImage: "carta_445.png",
    videoId: "uSNMROk2Ok4"
  },
  {
    id: 446,
    code: "446",
    text: "C'è così tanta mediocrità in giro, che l'originalità non piace.",
    cardImage: "carta_446.png",
    videoId: "5dOYti2cDEQ"
  },
  {
    id: 447,
    code: "447",
    text: "Già fai proprio così. Come se fosse scritto e diretto da Quentin Tarantino. Da, Quentin Tarantino, si!",
    cardImage: "carta_447.png",
    videoId: "wIfJAi2UT-g"
  },
  {
    id: 448,
    code: "448",
    text: "Quand'è stata l'ultima volta che hai dormito otto sacrosante ore di fila?",
    cardImage: "carta_448.png",
    videoId: "jQgv9tbvWK8"
  },
  {
    id: 449,
    code: "449",
    text: "I tuoi demoni saranno i tuoi migliori alleati se gli dai un bel biscottino fatto in casa alla vaniglia.",
    cardImage: "carta_449.png",
    videoId: "lgx96RgUhpw"
  },
  {
    id: 450,
    code: "450",
    text: "Parli dei supereroi come se esistessero. Sparli delle Rock star come se ti cagassero.",
    cardImage: "carta_450.png",
    videoId: "wBHLUAoUIuY"
  },
  {
    id: 451,
    code: "451",
    text: "Chi ti sta rubando, tempo, idee ed energie, se la vedrà con l'ira implacabile degli dei del Rock.",
    cardImage: "carta_451.png",
    videoId: "8wtjwReBDHg"
  },
  {
    id: 452,
    code: "452",
    text: "I tuoi falsi amici si mangeranno il fegato farcito con una spruzzatina di culo bruciato.",
    cardImage: "carta_452.png",
    videoId: "XaLb05mz8bo"
  },
  {
    id: 453,
    code: "453",
    text: "I tuoi nemici continueranno a parlare male di te, si, ma con le quattro mura del manicomio.",
    cardImage: "carta_453.png",
    videoId: "sH0TNCCDBK0"
  },
  {
    id: 454,
    code: "454",
    text: "Chi vuole colpirti sotto la cintura inciamperà sulla sua ridicola coda di topo da laboratorio.",
    cardImage: "carta_454.png",
    videoId: "mNk51mpSaO4"
  },
  {
    id: 455,
    code: "455",
    text: "Chi ti ha tradito passerà più tempo seduto sul cesso che sul suo trono di carta igienica.",
    cardImage: "carta_455.png",
    videoId: "CgRbLbZypLs"
  },
  {
    id: 456,
    code: "456",
    text: "Non crederti sto gran cazzo.",
    cardImage: "carta_456.png",
    videoId: "nGnLkFTfE2c"
  },
  {
    id: 457,
    code: "457",
    text: "Chi ti ha messo all'angolo quando avevi bisogno di lui, fidati che andrà in KO tecnico per un bel po'.",
    cardImage: "carta_457.png",
    videoId: "V5GUlfySU6M"
  },
  {
    id: 458,
    code: "458",
    text: "Chi ti sta sminuendo perché si crede migliore di te, verrà a lucidarti le chitarre, le scarpe e tutti i tuoi trofei.",
    cardImage: "carta_458.png",
    videoId: "cQ0QHndTHuI"
  },
  {
    id: 459,
    code: "459",
    text: "Chi ti ha preso in giro alle tue spalle, riderà ancora ma solo nei suoi sogni migliori.",
    cardImage: "carta_459.png",
    videoId: "8dkJvjPYPfM"
  },
  {
    id: 460,
    code: "460",
    text: "Tra cento anni avranno ben altro di cui preoccuparsi.",
    cardImage: "carta_460.png",
    videoId: "l03EBNjfOXY"
  },
  {
    id: 461,
    code: "461",
    text: "Chi ti ha tradito solo per farsi bello, pagherà caro per entrare ai tuoi concerti ma non entrerà mai.",
    cardImage: "carta_461.png",
    videoId: "fESf6R49-M0"
  },
  {
    id: 462,
    code: "462",
    text: "Chi ti ha invidiato e covato rancore per te, saprà solo scimmiottare i tuoi peggiori sbagli.",
    cardImage: "carta_462.png",
    videoId: "o7XJAmNsk3c"
  },
  {
    id: 463,
    code: "463",
    text: "No, questo non è un film di Nolan, anche se sta implodendo tutto. Tutto, sta implodendo tutto.",
    cardImage: "carta_463.png",
    videoId: "xBCVFMD1Dtg"
  },
  {
    id: 464,
    code: "464",
    text: "Chi ti ha ignorato perché gli è convenuto, vedrà i propri figli tatuarsi in petto il tuo nome.",
    cardImage: "carta_464.png",
    videoId: "H3LJSYwK5Po"
  },
  {
    id: 465,
    code: "465",
    text: "Chi ti ha sputato addosso il suo ego, odio e veleno, ingoierà la sua lingua e litri di bile.",
    cardImage: "carta_465.png",
    videoId: "TO_xe7gaCmc"
  },
  {
    id: 466,
    code: "466",
    text: "Fatti guidare dalla lussuria per un po'.",
    cardImage: "carta_466.png",
    videoId: "PZTLpTCoM48"
  },
  {
    id: 467,
    code: "467",
    text: "Si, sobrio come un santo protettore dei gin tonic.",
    cardImage: "carta_467.png",
    videoId: "_ekgZaR2t1o"
  },
  {
    id: 468,
    code: "468",
    text: "Ogni tanto coltiva un po' di sana superbia.",
    cardImage: "carta_468.png",
    videoId: "HSOu5x4TQ1Q"
  },
  {
    id: 469,
    code: "469",
    text: "Non cantare vittoria, può essere ancora troppo presto per il Rock.",
    cardImage: "carta_469.png",
    videoId: "NaCwWoLQ6UI"
  },
  {
    id: 470,
    code: "470",
    text: "Non invidi mai quello che non hai, invidi solo quello che ti sottrai.",
    cardImage: "carta_470.png",
    videoId: "hp4O-j_2bFY"
  },
  {
    id: 471,
    code: "471",
    text: "Si, come un bacio al retrogusto di bruciato.",
    cardImage: "carta_471.png",
    videoId: "AyeAg-SuhPM"
  },
  {
    id: 472,
    code: "472",
    text: "Ma dove vai? Ma cosa fai? Cosa provi? Come stai?",
    cardImage: "carta_472.png",
    videoId: "R-AXGfSWENc"
  },
  {
    id: 473,
    code: "473",
    text: "L'accidia ti ha sedotto. L'ego ti ha distratto. Ma il tempo non fa sconto. Adotta un altro gatto.",
    cardImage: "carta_473.png",
    videoId: "Ch2n9KCxewU"
  },
  {
    id: 474,
    code: "474",
    text: "Si, è come l'ultimo giorno di galera.",
    cardImage: "carta_474.png",
    videoId: "rX_7H6nNc7A"
  },
  {
    id: 475,
    code: "475",
    text: "Non sei il professore de “La casa di carta”. Pianifica meglio questo colpo.",
    cardImage: "carta_475.png",
    videoId: "fzLqGkp5Exk"
  },
  {
    id: 476,
    code: "476",
    text: "Si, prezioso e raro come il plettro del destino.",
    cardImage: "carta_476.png",
    videoId: "CpHt1t-u7Tw"
  },
  {
    id: 477,
    code: "477",
    text: "Si, è tutto magico come un open bar. Come un open bar.",
    cardImage: "carta_477.png",
    videoId: "a1pXo1ok9g0"
  },
  {
    id: 478,
    code: "478",
    text: "Si, adrenalinico come un concerto in prima fila.",
    cardImage: "carta_478.png",
    videoId: "IFTu2uuiiFA"
  },
  {
    id: 479,
    code: "479",
    text: "Sorridi e già sai che la vita sorriderà. Rocckeggia e vedrai che la vita spaccherà.",
    cardImage: "carta_479.png",
    videoId: "MTlKZZyLK_k"
  },
  {
    id: 480,
    code: "480",
    text: "Si, avventuroso come il primo giorno di vacanze ma con il bagaglio smarrito.",
    cardImage: "carta_480.png",
    videoId: "FcAqkcQS1nU"
  },
  {
    id: 481,
    code: "481",
    text: "E' un tuo sacrosanto diritto. Dire no. Dire stop. Dire non ci sto.",
    cardImage: "carta_481.png",
    videoId: "4OJaKxknNbc"
  },
  {
    id: 482,
    code: "482",
    text: "Sono questioni che non ti riguardano. Sono questioni che ti fan male al Rock'n'Roll.",
    cardImage: "carta_482.png",
    videoId: "zkGIf6yZR6A"
  },
  {
    id: 483,
    code: "483",
    text: "Ricordati il tuo ultimo sogno e svela il suo vero significato.",
    cardImage: "carta_483.png",
    videoId: "cKv-Txg-i8w"
  },
  {
    id: 484,
    code: "484",
    text: "Ricordati il tuo ultimo incubo e dai un volto alla tua paura.",
    cardImage: "carta_484.png",
    videoId: "A0e_TJWP73I"
  },
  {
    id: 485,
    code: "485",
    text: "Si, ti hanno premuto il sacro punto di pressione, per farti sganciare tutti i soldi. Ti hanno aperto come un salvadanaio a forma di coglione, astuto come un bancomat senza il pin.",
    cardImage: "carta_485.png",
    videoId: "q8f4q-WHmws"
  },
  {
    id: 486,
    code: "486",
    text: "Cosa diavolo ti ha suggerito di farlo. Cosa diavolo ti ha suggerito di dirlo. Insomma, cosa diavolo.",
    cardImage: "carta_486.png",
    videoId: "hPiG9aAqB4M"
  },
  {
    id: 487,
    code: "487",
    text: "Solo se sconfiggerai la paura della solitudine.",
    cardImage: "carta_487.png",
    videoId: "iad3Y3i62UY"
  },
  {
    id: 488,
    code: "488",
    text: "Solo se sconfiggerai la paura del successo.",
    cardImage: "carta_488.png",
    videoId: "ZJq-VyGy4yw"
  },
  {
    id: 489,
    code: "489",
    text: "Solo se sconfiggerai la paura di concedertelo.",
    cardImage: "carta_489.png",
    videoId: "dlsjeT8dLiM"
  },
  {
    id: 490,
    code: "490",
    text: "C'è chi lo dice e chi lo fa.",
    cardImage: "carta_490.png",
    videoId: "6TkUsBDZ0-o"
  },
  {
    id: 491,
    code: "491",
    text: "Tutto ciò è imbarazzante come uno stadio con un finto Sold Out.",
    cardImage: "carta_491.png",
    videoId: "ETpEjb2Mzi8"
  },
  {
    id: 492,
    code: "492",
    text: "Che lo spettacolo abbia inizio.",
    cardImage: "carta_492.png",
    videoId: "tXu53rVMi-U"
  },
  {
    id: 493,
    code: "493",
    text: "Chiudi tutti e fallo presto. Non è il momento dello show.",
    cardImage: "carta_493.png",
    videoId: "-7-YyKCAd1g"
  },
  {
    id: 494,
    code: "494",
    text: "E tu, quale pillola ingoieresti, la blu o la rossa? Già... ci avrei scommesso.",
    cardImage: "carta_494.png",
    videoId: "aJYeqoCKH8Q"
  },
  {
    id: 495,
    code: "495",
    text: "Compra tanti preservativi. Per lui o per lei, basta che ce li hai.",
    cardImage: "carta_495.png",
    videoId: "1huy5f-zMXY"
  },
  {
    id: 496,
    code: "496",
    text: "Smettila di migliorarti per gli altri. Sei già perfettamente scomodo così come sei.",
    cardImage: "carta_496.png",
    videoId: "NoDLX_bi4nU"
  },
  {
    id: 497,
    code: "497",
    text: "No. Non vai dal maestro di spade per imparare l'uncinetto. No!",
    cardImage: "carta_497.png",
    videoId: "9aMsSD8Bwng"
  },
  {
    id: 498,
    code: "498",
    text: "Siamo figli di dei che non ci hanno desiderato, per questo ti conviene abbracciare i fragorosi dei del Rock.",
    cardImage: "carta_498.png",
    videoId: "e8YOxVLLpoY"
  },
  {
    id: 499,
    code: "499",
    text: "Che importa? Siamo tutti fratelli e sorelle, figli del dottor Frankenstein, Mostri, assemblati fatti di pezzi di ego di cadaveri, ed alla fine mal voluti, perché dovevano seguire un piano e tenere in piedi solo un macabro show.",
    cardImage: "carta_499.png",
    videoId: "kB43eHIJZVQ"
  },
  {
    id: 500,
    code: "500",
    text: "Controcorrente. Contro tutto e tutti. Perchè in questo pazzo mondo è giusto anche così.",
    cardImage: "carta_500.png",
    videoId: "2lRHejoxm1w"
  },
  {
    id: 501,
    code: "501",
    text: "Chiedi aiuto a qualcuno che ha per lo meno dieci anni più di te ed una moto.",
    cardImage: "carta_501.png",
    videoId: "75wC2i2Jabg"
  },
  {
    id: 502,
    code: "502",
    text: "L’anima Rock non ha bisogno di un cauto manager. Vuole un avvocato più forte per bruciare tutti i contratti.",
    cardImage: "carta_502.png",
    videoId: "B3SMRIQ7zAY"
  },
  {
    id: 503,
    code: "503",
    text: "Ci sono paure, ombre, serpenti e demoni che dovrai sconfiggere.",
    cardImage: "carta_503.png",
    videoId: "opsRhHHdh30"
  },
  {
    id: 504,
    code: "504",
    text: "Su dai chiedimelo di nuovo.",
    cardImage: "carta_504.png",
    videoId: "Ujr7w1gsOlw"
  },
  {
    id: 505,
    code: "505",
    text: "Perchè continui a chiedermelo se in realtà hai già deciso.",
    cardImage: "carta_505.png",
    videoId: "Ajuv_y8qDDg"
  },
  {
    id: 506,
    code: "506",
    text: "Accadrà perché è destino.",
    cardImage: "carta_506.png",
    videoId: "TbANKMD59MM"
  },
  {
    id: 507,
    code: "507",
    text: "Le pagine del destino non sono ancora scritte.",
    cardImage: "carta_507.png",
    videoId: "haQMZKNjAwg"
  },
  {
    id: 508,
    code: "508",
    text: "Figliolo, chiedi un consiglio a chi ha visto tutti i film di Clint Eastwood.",
    cardImage: "carta_508.png",
    videoId: "V8pzjPPB0WI"
  },
  {
    id: 509,
    code: "509",
    text: "Chiedi pure quello che ti turba. L'Oracolo del Rock ti farà una burla.",
    cardImage: "carta_509.png",
    videoId: "AgS5yjJVRfA"
  },
  {
    id: 510,
    code: "510",
    text: "Era meglio il primo album. Era meglio il romanzo. Era meglio la prima serie. Era meglio l'universo ancora prima delle sue macerie.",
    cardImage: "carta_510.png",
    videoId: "lxD3gdoBsLs"
  },
  {
    id: 511,
    code: "511",
    text: "Il tuo desiderio sarà esaudito. L'Oracolo del Rock non ti ha mai tradito.",
    cardImage: "carta_511.png",
    videoId: "n3Gp0uiQmk8"
  },
  {
    id: 512,
    code: "512",
    text: "Vendi cara la tua pelle. Tira fuori il tuo animo ribelle.",
    cardImage: "carta_512.png",
    videoId: "Pf6xZsCvFOE"
  },
  {
    id: 513,
    code: "513",
    text: "Tenta pure la fortuna. L'uomo non è stato per caso sulla Luna.",
    cardImage: "carta_513.png",
    videoId: "qTBmAGRUMU8"
  },
  {
    id: 514,
    code: "514",
    text: "Il destino non è ancora scritto. Il tuo cuore non starà più zitto.",
    cardImage: "carta_514.png",
    videoId: "eo-4YAN6RIo"
  },
  {
    id: 515,
    code: "515",
    text: "Non rubare il parcheggio, a chi suona il Rock'n'Roll.",
    cardImage: "carta_515.png",
    videoId: "SK-QNhGZA10"
  },
  {
    id: 516,
    code: "516",
    text: "Gira la Terra. Gira la ruota. Salta a tempo, fai una capriola.",
    cardImage: "carta_516.png",
    videoId: "8yu7YCa0BpM"
  },
  {
    id: 517,
    code: "517",
    text: "Si può fingere un orgasmo non si può fingere il buon Rock.",
    cardImage: "carta_517.png",
    videoId: "EWL0SQe9msA"
  },
  {
    id: 518,
    code: "518",
    text: "Sarà meglio di un orgasmo.",
    cardImage: "carta_518.png",
    videoId: "xfMd8ODOZx0"
  },
  {
    id: 519,
    code: "519",
    text: "Qui la fortuna non è contemplata, sarà solo il talento a determinarne l'esito.",
    cardImage: "carta_519.png",
    videoId: "4Kz2vlVzlvs"
  },
  {
    id: 520,
    code: "520",
    text: "Puoi puntare sul talento ma questo giro sceglierà solo la fortuna.",
    cardImage: "carta_520.png",
    videoId: "VXCDnY4ffNg"
  },
  {
    id: 521,
    code: "521",
    text: "Abbonati alla tua felicità. Zero noie e con giga illimitati.",
    cardImage: "carta_521.png",
    videoId: "7Z1MH4aVyls"
  },
  {
    id: 522,
    code: "522",
    text: "Scrolla tra i ricordi delle tue vite passate.",
    cardImage: "carta_522.png",
    videoId: "WEYnXQ8wnFo"
  },
  {
    id: 523,
    code: "523",
    text: "Scarica il tuo nuovo angelo custode ed assicurati che sia abbastanza Rock!",
    cardImage: "carta_523.png",
    videoId: "FrFV4yWZpSI"
  },
  {
    id: 524,
    code: "524",
    text: "Su forza corri al Black Friday delle mezze verità.",
    cardImage: "carta_524.png",
    videoId: "QVwKaTHuukI"
  },
  {
    id: 525,
    code: "525",
    text: "Sarai tu a stabilire se sarà la fine di tutto o la nascita di un nuovo impero.",
    cardImage: "carta_525.png",
    videoId: "UmATDkG0PvQ"
  },
  {
    id: 526,
    code: "526",
    text: "Tutto chiaro : il tuo messaggio è stato ricevuto e verrà recapitato al diretto interessato.",
    cardImage: "carta_526.png",
    videoId: "6uypm06h7Jw"
  },
  {
    id: 527,
    code: "527",
    text: "Un gattino che dorme ha più follower di te che lavori come un dannato. Ora dimmi chi governa realmente questo mondo.",
    cardImage: "carta_527.png",
    videoId: "f1D5wIK8itE"
  },
  {
    id: 528,
    code: "528",
    text: "A volta tre desideri non bastano. Conceditene cento.",
    cardImage: "carta_528.png",
    videoId: "X3wGR4M8Mbg"
  },
  {
    id: 529,
    code: "529",
    text: "Non fidarti di chi non canta mai al Karaoke.",
    cardImage: "carta_529.png",
    videoId: ""
  },
  {
    id: 530,
    code: "530",
    text: "Come in quel film di Sergio Leone, tieni giù la testa coglione!",
    cardImage: "carta_530.png",
    videoId: "onG4f9NmGCg"
  },
  {
    id: 531,
    code: "531",
    text: "L’anima Rock non ha bisogno di nuove regole. Vuole nuovi orizzonti da esplorare e vento sulla pelle.",
    cardImage: "carta_531.png",
    videoId: "WD1hphnJI3c"
  },
  {
    id: 532,
    code: "532",
    text: "L’anima Rock non ha bisogno di vecchie favole. Vuole pagine bianche per ridisegnare tutte le stelle.",
    cardImage: "carta_532.png",
    videoId: "ncnXVDkqA8w"
  },
  {
    id: 533,
    code: "533",
    text: "Cambia tutte le password. Su cambia tutte le password. E cambia tutte le password, ma non quelle del tuo cuor.",
    cardImage: "carta_533.png",
    videoId: "lXNMOZY71PE"
  },
  {
    id: 534,
    code: "534",
    text: "Hai tanti dubbi e già lo sai che non li scioglierai mai, se non ritorni ad imparare a volare.",
    cardImage: "carta_534.png",
    videoId: "9pTay010TfE"
  },
  {
    id: 535,
    code: "535",
    text: "L’anima Rock non ha bisogno di un cauto manager. Ha già licenziato il buonsenso ed assunto il caos.",
    cardImage: "carta_535.png",
    videoId: "F0gP3jAmEko"
  },
  {
    id: 536,
    code: "536",
    text: "Condividi qualche cosa. Non trovare un'altra scusa. Condividi qualche cosa, dell'Oracolo del Rock!",
    cardImage: "carta_536.png",
    videoId: "1tVK-_6gWLw"
  },
  {
    id: 537,
    code: "537",
    text: "Non preoccuparti di insonorizzare le pareti. Preoccupati di sfondarle.",
    cardImage: "carta_537.png",
    videoId: "wrdtV82YfXg"
  },
  {
    id: 538,
    code: "538",
    text: "A chi ti dice , io sono fatto così. Rispondi pure, che peccato potevi farti decisamente meglio.",
    cardImage: "carta_538.png",
    videoId: "n6wRVlOIkgs"
  },
  {
    id: 539,
    code: "539",
    text: "Il disco giusto può dare vita alla festa.",
    cardImage: "carta_539.png",
    videoId: "aC5XbQa6Low"
  },
  {
    id: 540,
    code: "540",
    text: "Fai l'autostop lungo le strade dei tuoi dubbi.",
    cardImage: "carta_540.png",
    videoId: ""
  },
  {
    id: 541,
    code: "541",
    text: "Gioca al gioco della vita. Nulla è certo finché non è finita. Gioca al gioco della vita. Ma sorridi e rendila magnifica.",
    cardImage: "carta_541.png",
    videoId: "eHBX2mJBZAk"
  },
  {
    id: 542,
    code: "542",
    text: "La lussuria ti ha tradito.",
    cardImage: "carta_542.png",
    videoId: "B53Gyot_L3E"
  },
  {
    id: 543,
    code: "543",
    text: "La superbia ti ha ferito.",
    cardImage: "carta_543.png",
    videoId: "_eLdhqPCS0k"
  },
  {
    id: 544,
    code: "544",
    text: "La gola ti ha dominato.",
    cardImage: "carta_544.png",
    videoId: "F9UWuGSsO4M"
  },
  {
    id: 545,
    code: "545",
    text: "L'invidia ti ha bruciato. Nei selfie vieni tutto sfocato.",
    cardImage: "carta_545.png",
    videoId: "KWHIP8k13qY"
  },
  {
    id: 546,
    code: "546",
    text: "Fallo, se vuoi fallo. Ti dico fallo che aspetti fallo.",
    cardImage: "carta_546.png",
    videoId: "1mnBPg_DIng"
  },
  {
    id: 547,
    code: "547",
    text: "In un'altra vita. In un'altra storia. In un altro mondo.",
    cardImage: "carta_547.png",
    videoId: "URqgZkxRp9M"
  },
  {
    id: 548,
    code: "548",
    text: "Non puoi fare tutto con pazienza, a volte sfoga pure la tua rabbia. Ma mi raccomando fallo con coscienza, non è il momento di finire in gabbia.",
    cardImage: "carta_548.png",
    videoId: "MPmWHsCfR_Q"
  },
  {
    id: 549,
    code: "549",
    text: "Se sei diverso da tutti gli altri, allora vuol dire che sei un pezzo unico dal valore inestimabile.",
    cardImage: "carta_549.png",
    videoId: "l4YV-dKmw3g"
  },
  {
    id: 550,
    code: "550",
    text: "Si ma adotta un bel cagnolino. Se preferisci un gattino.",
    cardImage: "carta_550.png",
    videoId: "qBEu_v_FsAU"
  },
  {
    id: 551,
    code: "551",
    text: "Oggi ti serve imparare una ricetta nuova. Si ma sbagliala ed innaffia tutto di rhum.",
    cardImage: "carta_551.png",
    videoId: "Oomu2C2uP_8"
  },
  {
    id: 552,
    code: "552",
    text: "Oggi hai bisogno di un piccolo palco. Luci soffuse, poco clamore ma tanto calore.",
    cardImage: "carta_552.png",
    videoId: "cv4rgBlj0lI"
  },
  {
    id: 553,
    code: "553",
    text: "Oggi ti serve elargire più vaffanculo che sorrisi.",
    cardImage: "carta_553.png",
    videoId: "gOn770oEE7Y"
  },
  {
    id: 554,
    code: "554",
    text: "Oggi stampati un sorriso sul volto. E non dare spiegazioni.",
    cardImage: "carta_554.png",
    videoId: "SPqEDorDLiU"
  },
  {
    id: 555,
    code: "555",
    text: "La nona regola dell'Oracolo del Rock è : qui non si ruba e non si copia.",
    cardImage: "carta_555.png",
    videoId: "K2b2u0hGXbk"
  },
  {
    id: 556,
    code: "556",
    text: "Oggi hai bisogno di parlare con un vecchio amico, che ti fa ancora ridere.",
    cardImage: "carta_556.png",
    videoId: "Wy2AFT_m5WA"
  },
  {
    id: 557,
    code: "557",
    text: "Oggi ti serve sudare. Non per qualcuno, ma per qualcosa.",
    cardImage: "carta_557.png",
    videoId: "mS-t4PlgLTM"
  },
  {
    id: 558,
    code: "558",
    text: "Oggi ti serve commettere un nuovo errore in stile Tarantino. Gli altri li conosci già.",
    cardImage: "carta_558.png",
    videoId: "vaRr1voqAqs"
  },
  {
    id: 559,
    code: "559",
    text: "Oggi devi chiedere scusa a tutti ma non a te stesso.",
    cardImage: "carta_559.png",
    videoId: "rL13tG18mHU"
  },
  {
    id: 560,
    code: "560",
    text: "Oggi hai bisogno di riposo. Per la tua anima, per la tua voce, per il tuo dolore.",
    cardImage: "carta_560.png",
    videoId: "1G1g41LgXnY"
  },
  {
    id: 561,
    code: "561",
    text: "Capta la frequenza del successo e dimentica le note del fallimento.",
    cardImage: "carta_561.png",
    videoId: "bm8ZPPK40PU"
  },
  {
    id: 562,
    code: "562",
    text: "Prova a testare la fedeltà di chi oggi consideri un vero amico.",
    cardImage: "carta_562.png",
    videoId: "LeRDV9d0kwE"
  },
  {
    id: 563,
    code: "563",
    text: "Oggi devi chiedere l'aumento. E pure il rispetto.",
    cardImage: "carta_563.png",
    videoId: "cMvHVXeAv2w"
  },
  {
    id: 564,
    code: "564",
    text: "Fai uno scherzo anche di cattivo gusto.",
    cardImage: "carta_564.png",
    videoId: "ArpM4jlfbzg"
  },
  {
    id: 565,
    code: "565",
    text: "Un bel tappeto può dare un tono all'ambiente.",
    cardImage: "carta_565.png",
    videoId: "cKe3IW3THQ4"
  },
  {
    id: 566,
    code: "566",
    text: "Chiediti cosa farebbe il grande Lebowski al posto tuo.",
    cardImage: "carta_566.png",
    videoId: "Th9t30WXn8E"
  },
  {
    id: 567,
    code: "567",
    text: "Chiediti cosa farebbe Bruce Lee al posto tuo.",
    cardImage: "carta_567.png",
    videoId: "_0mMNJuncHE"
  },
  {
    id: 568,
    code: "568",
    text: "Chiediti che cosa farebbe Ozzy Osbourne al posto tuo.",
    cardImage: "carta_568.png",
    videoId: "d_b9HcOj3Fo"
  },
  {
    id: 569,
    code: "569",
    text: "Chiediti che cosa farebbe Bob Marley al posto tuo.",
    cardImage: "carta_569.png",
    videoId: "pR2Tm--qwvc"
  },
  {
    id: 570,
    code: "570",
    text: "Chiediti che cosa farebbe Elvis al posto tuo.",
    cardImage: "carta_570.png",
    videoId: "YAYr5LSr2ts"
  },
  {
    id: 571,
    code: "571",
    text: "Chiediti che cosa farebbe il Joker al posto tuo.",
    cardImage: "carta_571.png",
    videoId: "3ntw5r6fb-I"
  },
  {
    id: 572,
    code: "572",
    text: "Chiedi che cosa farebbe il Corvo al posto tuo.",
    cardImage: "carta_572.png",
    videoId: "AkqltmYx1ik"
  },
  {
    id: 573,
    code: "573",
    text: "Ascolta altre due risposte. La prima è per il tuo peggior nemico, la seconda è per te.",
    cardImage: "carta_573.png",
    videoId: "K2ZoLskq4ho"
  },
  {
    id: 574,
    code: "574",
    text: "Chiediti che cosa farebbe Lenny Kravitz al posto tuo.",
    cardImage: "carta_574.png",
    videoId: "0nTcKHU8vQs"
  },
  {
    id: 575,
    code: "575",
    text: "Chiediti che cosa farebbe Tyler Durden al posto tuo.",
    cardImage: "carta_575.png",
    videoId: "YmiNLRkswbY"
  },
  {
    id: 576,
    code: "576",
    text: "Chiediti che cosa farebbe Steve Vai al posto tuo.",
    cardImage: "carta_576.png",
    videoId: "48jaNXpxcG4"
  },
  {
    id: 577,
    code: "577",
    text: "Chiediti che cosa farebbe Jack Black al posto tuo.",
    cardImage: "carta_577.png",
    videoId: "Ffl7e20qZ-M"
  },
  {
    id: 578,
    code: "578",
    text: "Chiediti che cosa farebbe Heisenberg al posto tuo.",
    cardImage: "carta_578.png",
    videoId: "Bt7J96ahTAQ"
  },
  {
    id: 579,
    code: "579",
    text: "Chiediti che cosa farebbe Marcellus Wallace al posto tuo.",
    cardImage: "carta_579.png",
    videoId: "JUpQhFftkiQ"
  },
  {
    id: 580,
    code: "580",
    text: "Chiediti che cosa farebbe la sposa in bianco di Tarantino al posto tuo.",
    cardImage: "carta_580.png",
    videoId: "90-AGgK0YTg"
  },
  {
    id: 581,
    code: "581",
    text: "Datti questa possibilità.",
    cardImage: "carta_581.png",
    videoId: "8DjtWnRApo4"
  },
  {
    id: 582,
    code: "582",
    text: "Vola più in alto.",
    cardImage: "carta_582.png",
    videoId: "W0wQE_oapDQ"
  },
  {
    id: 583,
    code: "583",
    text: "Hai pazientato anche troppo.",
    cardImage: "carta_583.png",
    videoId: "Ohn2J5CSc1E"
  },
  {
    id: 584,
    code: "584",
    text: "No, bere una bottiglia di vino al giorno non fa di te un esperto sommelier. Ma darà sicuramente più spessore al tuo alito.",
    cardImage: "carta_584.png",
    videoId: "S9bgwtn2J3w"
  },
  {
    id: 585,
    code: "585",
    text: "Sarà imperfetto ma autentico e con quel retrogusto di Rock.",
    cardImage: "carta_585.png",
    videoId: "oMLo7KL8cmI"
  },
  {
    id: 586,
    code: "586",
    text: "Dovrai aspettare ancora un po'.",
    cardImage: "carta_586.png",
    videoId: "OyLfYiMzF6g"
  },
  {
    id: 587,
    code: "587",
    text: "Smettila di tentare la fortuna ma seducila.",
    cardImage: "carta_587.png",
    videoId: "DXcxbhtyR9w"
  },
  {
    id: 588,
    code: "588",
    text: "Nessuno lo fa perché costa cara la libertà.",
    cardImage: "carta_588.png",
    videoId: "wAuX1DZp4hA"
  },
  {
    id: 589,
    code: "589",
    text: "Non è obbligatorio mettere tutto nel kebab. Puoi anche evitare la salsa troppo piccante che ti fa male ultimamente.",
    cardImage: "carta_589.png",
    videoId: "mCqtPzynVjQ"
  },
  {
    id: 590,
    code: "590",
    text: "Fai la pace col cervello, ma non col Rock'n'Roll.",
    cardImage: "carta_590.png",
    videoId: "AJynWutE1HE"
  },
  {
    id: 591,
    code: "591",
    text: "Ascolta altre due risposte e fanne un mash up di saggezza.",
    cardImage: "carta_591.png",
    videoId: "kWkCnCSomIw"
  },
  {
    id: 592,
    code: "592",
    text: "Ascolta altre due risposte. La prima è per chi ti è vicino, la seconda è per te.",
    cardImage: "carta_592.png",
    videoId: "hhFiwsLGMAg"
  },
  {
    id: 593,
    code: "593",
    text: "Lascia andare i carichi del dolore.",
    cardImage: "carta_593.png",
    videoId: "gZmter66oeg"
  },
  {
    id: 594,
    code: "594",
    text: "Chiediti che cosa farebbe la signora Mia Wallace al posto tuo.",
    cardImage: "carta_594.png",
    videoId: "iK3QClVNwmE"
  },
  {
    id: 595,
    code: "595",
    text: "No, mamma mia che paura. Le dure critiche di chi non ha neanche le palle di avere un profilo autentico sui social. Ma andate a cagare signor mistero e signorina mascherina.",
    cardImage: "carta_595.png",
    videoId: "gX_jbyvF4lY"
  },
  {
    id: 596,
    code: "596",
    text: "Hai visto i tuoi demoni negli occhi e ti hanno colpito al cuore. Ma non ti hanno ferito, ti hanno solo scolpito. Ora, non c'è paradiso, ora, non c'è più preavviso, ora, che ci sei te. Solo te.",
    cardImage: "carta_596.png",
    videoId: "ZWXxWDOBKtU"
  },
  {
    id: 597,
    code: "597",
    text: "Quand'è stata l'ultima volta che hai fatto un regalo spontaneo senza pretendere nulla in cambio?",
    cardImage: "carta_597.png",
    videoId: "w-WZpqSwV7M"
  },
  {
    id: 598,
    code: "598",
    text: "Cambia paroliere. Se non hai un gruppo allora non è il momento.",
    cardImage: "carta_598.png",
    videoId: "LvAbn0fjMBs"
  },
  {
    id: 599,
    code: "599",
    text: "Quand'è stata l'ultima volta che hai fatto un bel pranzo della domenica come dio comanda?",
    cardImage: "carta_599.png",
    videoId: "SBW0F_xKeuE"
  },
  {
    id: 600,
    code: "600",
    text: "Devi assolutamente farlo entro la fine del mondo.",
    cardImage: "carta_600.png",
    videoId: "Dc-ypppQsio"
  },
  {
    id: 601,
    code: "601",
    text: "Devi assolutamente farlo entro la fine dell'anno.",
    cardImage: "carta_601.png",
    videoId: "72LBLa1CTyg"
  },
  {
    id: 602,
    code: "602",
    text: "Devi assolutamente farlo entro la fine del mese.",
    cardImage: "carta_602.png",
    videoId: "pRpsbQkON5M"
  },
  {
    id: 603,
    code: "603",
    text: "Devi assolutamente farlo entro le prossime 24 ore.",
    cardImage: "carta_603.png",
    videoId: "bvCmxZv3L28"
  },
  {
    id: 604,
    code: "604",
    text: "Devi assolutamente farlo da sbronzo di Rock.",
    cardImage: "carta_604.png",
    videoId: "HIlb4lYMVl4"
  },
  {
    id: 605,
    code: "605",
    text: "Devi assolutamente rimandarlo a settembre.",
    cardImage: "carta_605.png",
    videoId: "C4kVdIoDu7E"
  },
  {
    id: 606,
    code: "606",
    text: "Questa volta non cercare di farti piacere. Piuttosto fatti notare.",
    cardImage: "carta_606.png",
    videoId: "aKHveo28-KY"
  },
  {
    id: 607,
    code: "607",
    text: "Se qui i miracoli non arrivano cercali altrove.",
    cardImage: "carta_607.png",
    videoId: "jduHoqmV9ho"
  },
  {
    id: 608,
    code: "608",
    text: "Se la fortuna si è scordata di te, falle pagare gli interessi quando ritorna.",
    cardImage: "carta_608.png",
    videoId: "QNGR-8gz2QE"
  },
  {
    id: 609,
    code: "609",
    text: "Non vivere di scuse e non chiedere scusa per vivere.",
    cardImage: "carta_609.png",
    videoId: "NkS2h_j4apI"
  },
  {
    id: 610,
    code: "610",
    text: "Chi ti ha detto che è troppo tardi per non provarci più? Non provarci più?",
    cardImage: "carta_610.png",
    videoId: "jLoIp_vwJtk"
  },
  {
    id: 611,
    code: "611",
    text: "C’è chi si fa i selfie e c'è chi fa la storia.",
    cardImage: "carta_611.png",
    videoId: "4_VcsJmdAy4"
  },
  {
    id: 612,
    code: "612",
    text: "Politicamente scorretto.",
    cardImage: "carta_612.png",
    videoId: "qTyianiJNek"
  },
  {
    id: 613,
    code: "613",
    text: "E' legale fare la guerra ma si fa l'amore di nascosto.",
    cardImage: "carta_613.png",
    videoId: "FPVHK7EiI_c"
  },
  {
    id: 614,
    code: "614",
    text: "Compra due banane, così una te la mangi.",
    cardImage: "carta_614.png",
    videoId: "Kflqt4CZLMs"
  },
  {
    id: 615,
    code: "615",
    text: "Non si può più pensare niente. Compra conveniente. Muori lentamente.",
    cardImage: "carta_615.png",
    videoId: "Q5z35DucKsQ"
  },
  {
    id: 616,
    code: "616",
    text: "Lavori tanto ma non basta mai. Come mai? Cosa ti hanno insegnato a scuola. E non dubitarne mai. Lavora di più che non basta mai.",
    cardImage: "carta_616.png",
    videoId: "a54ajydRxkk"
  },
  {
    id: 617,
    code: "617",
    text: "Facciamo la rivoluzione con nuovi podcast sul pallone.",
    cardImage: "carta_617.png",
    videoId: "1pYfqkhFROA"
  },
  {
    id: 618,
    code: "618",
    text: "Ascolta altre due risposte. La prima la condividi senza dare spiegazioni, la seconda è per te.",
    cardImage: "carta_618.png",
    videoId: "Hk6FRqTB9WU"
  },
  {
    id: 619,
    code: "619",
    text: "Batti i pugni sul tavolo.",
    cardImage: "carta_619.png",
    videoId: "MU3HCRUlTpM"
  },
  {
    id: 620,
    code: "620",
    text: "Smettila di pagare per gli errori degli altri.",
    cardImage: "carta_620.png",
    videoId: "vFq87K8MrgQ"
  },
  {
    id: 621,
    code: "621",
    text: "Mai fidarti di un batterista che non ha almeno tre vicini incazzati.",
    cardImage: "carta_621.png",
    videoId: "tFwAQMy8EqY"
  },
  {
    id: 622,
    code: "622",
    text: "Mai fidarti di un bassista senza calli sulle dita.",
    cardImage: "carta_622.png",
    videoId: "PAIap1n_wnY"
  },
  {
    id: 623,
    code: "623",
    text: "Mai fidarti del leader di una Rock band. No, mai fidarti del leader di una Rock band, mai.",
    cardImage: "carta_623.png",
    videoId: "oQzoQbbzvKg"
  },
  {
    id: 624,
    code: "624",
    text: "Mai fidarti di chi ti dice “E' tutto sotto controllo, dai stai sereno che è tranquillo”.",
    cardImage: "carta_624.png",
    videoId: "vYuU39PahIk"
  },
  {
    id: 625,
    code: "625",
    text: "Mai fidarti della donna del leader di una Rock band.",
    cardImage: "carta_625.png",
    videoId: "6yGOZlsi2g4"
  },
  {
    id: 626,
    code: "626",
    text: "Mai fidarti di un locale con una sola birra alla spina.",
    cardImage: "carta_626.png",
    videoId: "c-X7lzqn99Q"
  },
  {
    id: 627,
    code: "627",
    text: "La decima regola dell'Oracolo del Rock è : non limitarti a giocare con le risposte, ascolta un po' di Rock!",
    cardImage: "carta_627.png",
    videoId: "Ug6K_OhkPA4"
  },
  {
    id: 628,
    code: "628",
    text: "Non dare perle ai porci, no. E nemmeno le tue migliori playlist Rock.",
    cardImage: "carta_628.png",
    videoId: "O3EnAsvYzNQ"
  },
  {
    id: 629,
    code: "629",
    text: "Mai fidarti di un vecchio juke box.",
    cardImage: "carta_629.png",
    videoId: "GyKnWUcArSE"
  },
  {
    id: 630,
    code: "630",
    text: "Mai fidarti di un “era proprio a te a cui stavamo pensando”.",
    cardImage: "carta_630.png",
    videoId: "2hjbPez0Fcw"
  },
  {
    id: 631,
    code: "631",
    text: "Mai fidarti del primo della classe, se la materia non è il Rock'n'Roll.",
    cardImage: "carta_631.png",
    videoId: "4YTJ8SUfn8"
  },
  {
    id: 632,
    code: "632",
    text: "Mai fidarti dell'ultimo degli stronzi.",
    cardImage: "carta_632.png",
    videoId: "PNU7B4GFCbs"
  },
  {
    id: 633,
    code: "633",
    text: "Mai fidarti delle confessioni non richieste.",
    cardImage: "carta_633.png",
    videoId: "5WUNw7-BmKs"
  },
  {
    id: 634,
    code: "634",
    text: "Mai fidarti di una birra senza schiuma.",
    cardImage: "carta_634.png",
    videoId: "o6gfHUbsCxc"
  },
  {
    id: 635,
    code: "635",
    text: "Mai fidarti di un pubblico troppo sobrio.",
    cardImage: "carta_635.png",
    videoId: "Z8vtqJ61sfA"
  },
  {
    id: 636,
    code: "636",
    text: "Fai questo salto nel vuoto! Scuoti le acque del destino e sorridi un po' di più.",
    cardImage: "carta_636.png",
    videoId: "GQR13xfSkJY"
  },
  {
    id: 637,
    code: "637",
    text: "Si ma non strafare. Regalaci un disastro per volta.",
    cardImage: "carta_637.png",
    videoId: "jxMaf7XvZQM"
  },
  {
    id: 638,
    code: "638",
    text: "Si ma non strafare. Un successo alla volta.",
    cardImage: "carta_638.png",
    videoId: ""
  },
  {
    id: 639,
    code: "639",
    text: "Senza una buona banda alle spalle non andrai tanto lontano.",
    cardImage: "carta_639.png",
    videoId: "lwjvI_TBpEY"
  },
  {
    id: 640,
    code: "640",
    text: "E' il momento di ragionare da solista. Con educazione e rispetto sciogli la band perché è il momento di ragionare da solista.",
    cardImage: "carta_640.png",
    videoId: "dr9jhiPcg6o"
  },
  {
    id: 641,
    code: "641",
    text: "Fai come se fosse tutta tua la baracca.",
    cardImage: "carta_641.png",
    videoId: "2iHG3hFkqOY"
  },
  {
    id: 642,
    code: "642",
    text: "Scegli un'etichetta indipendente. Indie pendente mente.",
    cardImage: "carta_642.png",
    videoId: "Tz59_ImACqs"
  },
  {
    id: 643,
    code: "643",
    text: "Se inizi porta alla fine la questione.",
    cardImage: "carta_643.png",
    videoId: "0pPGNj7YnOA"
  },
  {
    id: 644,
    code: "644",
    text: "Lascia a metà anche questa idea e lanciati su...",
    cardImage: "carta_644.png",
    videoId: "pQSDhbVFfF8"
  },
  {
    id: 645,
    code: "645",
    text: "Fa vomitare. Fa vomitare. Fa vomitare, E' utile solo dopo una sbronza, si!",
    cardImage: "carta_645.png",
    videoId: "SSyEGqayokY"
  },
  {
    id: 646,
    code: "646",
    text: "Come un calcio nelle palle.",
    cardImage: "carta_646.png",
    videoId: "1tOOYunQWvE"
  },
  {
    id: 647,
    code: "647",
    text: "Pensati Rock.",
    cardImage: "carta_647.png",
    videoId: "V8iMeXwW6YY"
  },
  {
    id: 648,
    code: "648",
    text: "No, non baciare con prudenza, oh no!",
    cardImage: "carta_648.png",
    videoId: "MNe6fVxSQEI"
  },
  {
    id: 649,
    code: "649",
    text: "Scegli la major migliore per te.",
    cardImage: "carta_649.png",
    videoId: "dD21a_NAY5I"
  },
  {
    id: 650,
    code: "650",
    text: "Resta indie che è meglio.",
    cardImage: "carta_650.png",
    videoId: "W9-ohYIlW5"
  },
  {
    id: 651,
    code: "651",
    text: "Una buona idea. Una nuova pelle. Un sapore di un'altra terra.",
    cardImage: "carta_651.png",
    videoId: "mpuqT-FvbFQ"
  },
  {
    id: 652,
    code: "652",
    text: "Questa la mettiamo qui, sulla mensola delle idee del cazzo.",
    cardImage: "carta_652.png",
    videoId: "DiK2miDkbaM"
  },
  {
    id: 653,
    code: "653",
    text: "Non te l'ha ordinato il dottore di chiedere qualcosa all'Oracolo del Rock. Ma te l'ha sussurrato il destino.",
    cardImage: "carta_653.png",
    videoId: "u8UTkwEBoT4"
  },
  {
    id: 654,
    code: "654",
    text: "Cambia ruolo al batterista. Se non hai un gruppo allora è un si.",
    cardImage: "carta_654.png",
    videoId: "nzhQ8b1dxS8"
  },
  {
    id: 655,
    code: "655",
    text: "Devi imparare una lezione che rimandi da troppi anni ormai, poi sarai più grande e si vedrà.",
    cardImage: "carta_655.png",
    videoId: "dj7SD8oTxos"
  },
  {
    id: 656,
    code: "656",
    text: "Lavora sodo e raccoglierai buoni frutti.",
    cardImage: "carta_656.png",
    videoId: "U-dBiBt12hw"
  },
  {
    id: 657,
    code: "657",
    text: "Se credi che ti farà bene, fallo e basta. Si, fallo adesso, si!",
    cardImage: "carta_657.png",
    videoId: "iznfggWz7MI"
  },
  {
    id: 658,
    code: "658",
    text: "Non fare il boomer. Dai, non fare il solito boomer.",
    cardImage: "carta_658.png",
    videoId: "_CqCK31lgfc"
  },
  {
    id: 659,
    code: "659",
    text: "Qualche volta una sveglia per alzare il culo, no non basta! Prova ad impostarne tre.",
    cardImage: "carta_659.png",
    videoId: "dEkj5jL_YGE"
  },
  {
    id: 660,
    code: "660",
    text: "Una lacrima scenderà sul volto. Chi la raccoglierà?",
    cardImage: "carta_660.png",
    videoId: "cCZ3tool5mY"
  },
  {
    id: 661,
    code: "661",
    text: "Non dimenticare mai che il sole è una stella.",
    cardImage: "carta_661.png",
    videoId: "8hj2grR7cTw"
  },
  {
    id: 662,
    code: "662",
    text: "Resta in piedi, anche se a pezzi dentro. Resta in piedi ancora un po'.",
    cardImage: "carta_662.png",
    videoId: "KOwswwFAoDM"
  },
  {
    id: 663,
    code: "663",
    text: "Può essere tutto più semplice di così. Dai, smettila di complicarti la vita!",
    cardImage: "carta_663.png",
    videoId: "Fv8xPswzMRM"
  },
  {
    id: 664,
    code: "664",
    text: "La vita non è fatta solo di sbronze e di letti di cosce. Ma che peccato!",
    cardImage: "carta_664.png",
    videoId: "6Z8LUl5pN2Q"
  },
  {
    id: 665,
    code: "665",
    text: "Ci sono delle rose da raccogliere. Qualcuna pungerà ma qualcuna no.",
    cardImage: "carta_665.png",
    videoId: "E_3kUJI2jxc"
   },
  {
    id: 666,
    code: "666",
    text: "Non oggi, non adesso, no, non ora.",
    cardImage: "carta_666.png",
    videoId: "NRO86Bq1n7E"     // <--- ULTIMA CARTA 666
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

// ⬅️ AGGIUNGI SOLO QUESTO
const cards = ORACOLO_RISPOSTE;
