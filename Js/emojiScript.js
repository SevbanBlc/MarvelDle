const marvelCharacters = [
  { name: "Iron Man" ,img: "../Img/Character/iron-man.png",emojis:["🤖","🛠️", "💥"]},
  { name: "Captain America",  age: 103, img: "../Img/Character/captain-america.png",  emojis: ["🛡️", "🇺🇸", "⚔️"]  },
  { name: "Thor", img: "../Img/Character/thor.png",  emojis: ["⚡", "🪓", "🧑‍⚕️"]},
  { name: "Hulk", img: "../Img/Character/hulk.png", emojis: ["💪", "👹", "🧪"]  },
  { name: "Black Widow❄",  img: "../Img/Character/black-widow.png", emojis: ["🕷️", "🔪", "🕵️"]  },
  { name: "Spider-Man", img: "../Img/Character/spider-man.png", emojis: ["🕸️", "🕷️", "🤯"] },
  { name: "Doctor Strange", img: "../Img/Character/doctor-strange.png",emojis: ["🔮", "🧙", "💫"]},
  { name: "Black Panther", img: "../Img/Character/black-panther.png", emojis: ["🐾", "👑", "🖤"]  },
  { name: "Ant-Man", img: "../Img/Character/ant-man.png",  emojis: ["🐜", "🔬", "👨‍🔬"] },
  { name: "Wasp", img: "../Img/Character/wasp.png", emojis: ["🐝", "🔬", "💪"]},
  { name: "Scarlet Witch", img: "../Img/Character/scarlet-witch.png",emojis: ["🪄", "🔮", "💔"]},
  { name: "Vision", img: "../Img/Character/vision.png", emojis: ["👁️", "🕶️", "🔴"]},
  { name: "Hawkeye", img: "../Img/Character/hawkeye.png", emojis: ["🏹", "🎯", "👀"] },
  { name: "Star-Lord", img: "../Img/Character/star-lord.png",  emojis: ["🚀", "🎸", "🌌"] },
  { name: "Gamora", img: "../Img/Character/gamora.png",  emojis: ["👽", "🗡️", "🛡️"]},
  { name: "Drax", img: "../Img/Character/drax.png", emojis: ["💪", "🌌", "👊"]  },
  { name: "Rocket Raccoon", img: "../Img/Character/rocket-raccoon.png",  emojis: ["🦝", "🔧", "🚀"]},
  { name: "Groot", img: "../Img/Character/groot.png",  emojis: ["🌳", "🌲", "💪"]},
  { name: "Wolverine", img: "../Img/Character/wolverine.png",  emojis: ["🐺", "🔪", "🔪"]},
  { name: "Cyclops", img: "../Img/Character/cyclops.png", emojis: ["🕶️", "👁️", "🔴"] },
  { name: "Storm", img: "../Img/Character/storm.png", emojis: ["⛈️", "🌩️", "🌪️"]  },
  { name: "Jean Grey", gender: "Kadın", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Telepati", age: 35, img: "../Img/Character/jean-grey.png", birthPlace: "New York", popularity: 80 , emojis: ["🧠", "🌟", "💥"]},
  { name: "Nightcrawler", gender: "Erkek", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Teleportasyon", age: 25, img: "../Img/Character/nightcrawler.png", birthPlace: "Bavyera", popularity: 75, emojis: ["🌌", "🌀", "😈"] },
  { name: "Colossus", gender: "Erkek", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Metal Vücut", age: 30, img: "../Img/Character/colossus.png", birthPlace: "Rusya", popularity: 70 , emojis: ["💪", "🛡️", "⚙️"]},
  { name: "Rogue", gender: "Kadın", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Güç Emme", age: 30, img: "../Img/Character/rogue.png", birthPlace: "Alabama", popularity: 75, emojis: ["⚡", "🦹", "🔋"]  },
  { name: "Gambit", gender: "Erkek", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Enerji Yükleme", age: 35, img: "../Img/Character/gambit.png", birthPlace: "New Orleans", popularity: 70, emojis: ["♠️", "🃏", "🔮"] },
  { name: "Beast", gender: "Erkek", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Gelişmiş Güç ve Çeviklik", age: 50, img: "../Img/Character/beast.png", birthPlace: "New York", popularity: 70 , emojis: ["🦁", "💪", "🔬"]},
  { name: "Professor X", gender: "Erkek", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Telepati", age: 60, img: "../Img/Character/professor-x.png", birthPlace: "New York", popularity: 85, emojis: ["🧠", "🪑", "🔮"]  },
  { name: "Magneto", gender: "Erkek", team: "Brotherhood", type: "Mutant", kind: "Kötü", power: "Manyetik Güçler", age: 70, img: "../Img/Character/magneto.png", birthPlace: "Polonya", popularity: 80 , emojis: ["🧲", "⚡", "🦸"]},
  { name: "Mystique", gender: "Kadın", team: "Brotherhood", type: "Mutant", kind: "Kötü", power: "Şekil Değiştirme", age: 50, img: "../Img/Character/mystique.png", birthPlace: "Rusya", popularity: 75 , emojis: ["🦹", "🔄", "🔮"]},
  { name: "Sabretooth", gender: "Erkek", team: "Brotherhood", type: "Mutant", kind: "Kötü", power: "Güçlü Duyu", age: 40, img: "../Img/Character/sabretooth.png", birthPlace: "Kanada", popularity: 70, emojis: ["🦁", "🔪", "❄️"]  },
  { name: "Juggernaut", gender: "Erkek", team: "Kötüler", type: "Mutant", kind: "Kötü", power: "Güç", age: 40, img: "../Img/Character/juggernaut.png", birthPlace: "New York", popularity: 65 , emojis: ["💪", "🚧", "🛡️"]},
  { name: "Deadpool", gender: "Erkek", team: "Solo", type: "Mutant", kind: "Kahraman", power: "Yenilmezlik", age: 40, img: "../Img/Character/deadpool.png", birthPlace: "New York", popularity: 95 , emojis: ["🤡", "🔪", "🩸"]},
  { name: "Silver Surfer", gender: "Erkek", team: "Solo", type: "Yarı Tanrı", kind: "Kötü", power: "Kozmik Güçler", age: 1000, img: "../Img/Character/silver-surfer.png", birthPlace: "Zenn-La", popularity: 80 , emojis: ["🌌", "🛸", "✨"] },
  { name: "Nova", gender: "Erkek", team: "Solo", type: "Süper İnsan", kind: "Kahraman", power: "Kozmik Enerji", age: 25, img: "../Img/Character/nova.png", birthPlace: "New York", popularity: 75, emojis: ["⭐", "🌠", "⚡"] },
  { name: "She-Hulk", gender: "Kadın", team: "Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Güç", age: 35, img: "../Img/Character/she-hulk.png", birthPlace: "Los Angeles", popularity: 70, emojis: ["💪", "👩‍⚕️", "🟢"]  },
  { name: "Mister Fantastic", gender: "Erkek", team: "Fantastic Four", type: "Süper İnsan", kind: "Kahraman", power: "Esneme", age: 40, img: "../Img/Character/mister-fantastic.png", birthPlace: "New York", popularity: 80 , emojis: ["✋", "🧪", "🔬"] },
  { name: "Invisible Woman", gender: "Kadın", team: "Fantastic Four", type: "Süper İnsan", kind: "Kahraman", power: "Görünmezlik", age: 35, img: "../Img/Character/invisible-woman.png", birthPlace: "New York", popularity: 80, emojis: ["🕵️", "🔮", "👻"] },
  { name: "Human Torch", gender: "Erkek", team: "Fantastic Four", type: "Süper İnsan", kind: "Kahraman", power: "Ateş", age: 30, img: "../Img/Character/human-torch.png", birthPlace: "New York", popularity: 75, emojis: ["🔥", "🌟", "💨"] },
  { name: "Thing", gender: "Erkek", team: "Fantastic Four", type: "Süper İnsan", kind: "Kahraman", power: "Güç", age: 40, img: "../Img/Character/thing.png", birthPlace: "New York", popularity: 70, emojis: ["🪨", "💪", "👊"] },
  { name: "Daredevil", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Senses", age: 35, img: "../Img/Character/daredevil.png", birthPlace: "New York", popularity: 75, emojis: ["🔴", "⚖️", "👁️‍🗨️"] },
  { name: "Luke Cage", gender: "Erkek", team: "Heroes for Hire", type: "Süper İnsan", kind: "Kahraman", power: "Güç", age: 40, img: "../Img/Character/luke-cage.png", birthPlace: "Harlem", popularity: 70 , emojis: ["💪", "🔒", "🛡️"] },
  { name: "Jessica Jones", gender: "Kadın", team: "Heroes for Hire", type: "Süper İnsan", kind: "Kahraman", power: "Güç", age: 35, img: "../Img/Character/jessica-jones.png", birthPlace: "New York", popularity: 75, emojis: ["🕵️", "🥊", "🚬"] },
  { name: "Iron Fist", gender: "Erkek", team: "Heroes for Hire", type: "Süper İnsan", kind: "Kahraman", power: "Demir Yumruk", age: 30, img: "../Img/Character/iron-fist.png", birthPlace: "K'un-Lun", popularity: 70 , emojis: ["👊", "🔥", "🧘"]},
  { name: "Moon Knight", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Güç ve Zeka", age: 35, img: "../Img/Character/moon-knight.png", birthPlace: "New York", popularity: 70, emojis: ["🌙", "🦸", "🔮"] },
  { name: "Ghost Rider", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Cehennem Ateşi", age: 40, img: "../Img/Character/ghost-rider.png", birthPlace: "Los Angeles", popularity: 75 , emojis: ["🔥", "💀", "🕷️"] },
  { name: "Blade", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Vampir Avcılığı", age: 40, img: "../Img/Character/blade.png", birthPlace: "London", popularity: 70, emojis: ["🗡️", "🌑", "🧛"] },
  { name: "Speed", gender: "Erkek", team: "Young Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Süper Hız", age: 20, img: "../Img/Character/speed.png", birthPlace: "Sokovia", popularity: 70 , emojis: ["⚡", "🏃", "🕒"]},
  { name: "Wiccan", gender: "Erkek", team: "Young Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Büyü", age: 20, img: "../Img/Character/wiccan.png", birthPlace: "Sokovia", popularity: 75, emojis: ["🔮", "📜", "🌟"] },
  { name: "Spider-Woman (Jessica Drew)", gender: "Kadın", team: "Solo", type: "Süper İnsan", kind: "Kahraman", power: "Örümcek Gücü", age: 30, img: "../Img/Character/spider-woman.png", birthPlace: "London", popularity: 80 , emojis: ["🕷️", "🕸️", "👩‍🦰"]},
  { name: "Squirrel Girl", gender: "Kadın", team: "Solo", type: "Süper İnsan", kind: "Kahraman", power: "Sincap Gücü", age: 25, img: "../Img/Character/squirrel-girl.png", birthPlace: "New York", popularity: 75, emojis: ["🐿️", "😄", "🌰"] },
  { name: "Mantis", gender: "Kadın", team: "Guardians of the Galaxy", type: "Yarı Tanrı", kind: "Kahraman", power: "Duygu Kontrolü", age: 100, img: "../Img/Character/mantis.png", birthPlace: "Kree", popularity: 70, emojis: ["🌿", "🦋", "🧘"] },
  { name: "Nebula", gender: "Kadın", team: "Guardians of the Galaxy", type: "Süper İnsan", kind: "Kahraman", power: "Savaşçı", age: 30, img: "../Img/Character/nebula.png", birthPlace: "Zen-Whoberi", popularity: 75, emojis: ["👩‍🚀", "⚔️", "🌌"] },
  { name: "Dormammu", gender: "Erkek", team: "Kötüler", type: "Süper İnsan", kind: "Kötü", power: "Kozmik Güçler", age: 1000, img: "../Img/Character/dormammu.png", birthPlace: "Dark Dimension", popularity: 75 , emojis: ["🌌", "🔥", "👹"]},
  { name: "Mephisto", gender: "Erkek", team: "Kötüler", type: "Demon", kind: "Kötü", power: "Şeytani Güçler", age: 10000, img: "../Img/Character/mephisto.png", birthPlace: "Hell", popularity: 70, emojis: ["😈", "🔥", "🕷️"] },
  { name: "Kingpin", gender: "Erkek", team: "Kötüler", type: "İnsan", kind: "Kötü", power: "Suç Lordu", age: 55, img: "../Img/Character/kingpin.png", birthPlace: "New York", popularity: 75 , emojis: ["👑", "💼", "🚬"]},
  { name: "Red Skull", gender: "Erkek", team: "Hydra", type: "Süper İnsan", kind: "Kötü", power: "Güç", age: 70, img: "../Img/Character/red-skull.png", birthPlace: "Almanya", popularity: 80, emojis: ["🔴", "💀", "🪖"] },
  { name: "Baron Zemo", gender: "Erkek", team: "Hydra", type: "Süper İnsan", kind: "Kötü", power: "Strateji", age: 55, img: "../Img/Character/baron-zemo.png", birthPlace: "Sokovia", popularity: 75 , emojis: ["👨‍🔬", "🎭", "⚔️"]},
  { name: "Yellowjacket", gender: "Erkek", team: "Kötüler", type: "Süper İnsan", kind: "Kötü", power: "Teknoloji", age: 50, img: "../Img/Character/yellowjacket.png", birthPlace: "New York", popularity: 70, emojis: ["🐝", "🔬", "⚔️"] },
  { name: "Ultron", gender: "Erkek", team: "Kötüler", type: "Yapay Zeka", kind: "Kötü", power: "Yapay Zeka", age: 5, img: "../Img/Character/ultron.png", birthPlace: "New York", popularity: 75, emojis: ["🤖", "⚙️", "💥"] },
  { name: "Ego", gender: "Erkek", team: "Kötüler", type: "Süper İnsan", kind: "Kötü", power: "Kozmik Enerji", age: 1000000, img: "../Img/Character/ego.png", birthPlace: "Solo", popularity: 70 , emojis: ["🌌", "🌀", "👑"]},
  { name: "Hela", gender: "Kadın", team: "Kötüler", type: "Tanrı", kind: "Kötü", power: "Ölüm", age: 10000, img: "../Img/Character/hela.png", birthPlace: "Asgard", popularity: 75 , emojis: ["👸", "🗡️", "🖤"]},
  {name: "Loki", gender: "Erkek", team: "Kötüler", type: "Tanrı", kind: "Kötü", power: "Sihir", age: 1000, img: "../Img/Character/loki.png", birthPlace: "Asgard", popularity: 85, emojis: ["🎭", "🧙", "🌀"]},
  {name: "Thanos", gender: "Erkek", team: "Yok", type: "Titan", kind: "Kötü", power: "Güç ve Zeka", age: 1000, img: "../Img/Character/thanos.png", birthPlace: "Titan", popularity: 90 , emojis: ["🏋️‍♂️", "🪙", "🪙"]},
  {name: "Quicksilver", gender: "Erkek", team: "Avengers", type: "Mutant", kind: "Kahraman", power: "Süper Hız", age: 27, img: "../Img/Character/quicksilver.png", birthPlace: "Sokovia", popularity: 70, emojis: ["⚡", "🏃", "🌪️"] }
// eksik karakterler
  // falcon , winter solgier, odin, heimdall,venom
];

let total_wrong = 1;

let correctCharacter = marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];
const input = document.getElementById("guess-input")
const result = document.getElementById("result")
const emoji1 = document.getElementById("emoji1");
const emoji2 = document.getElementById("emoji2");
const emoji3 = document.getElementById("emoji3");


emoji1.innerHTML = correctCharacter.emojis[0]

function guess(){
  let verify = false;
  for(i = 0; i < marvelCharacters.length;i++)
  {
    if (marvelCharacters[i].name === input.value){
      verify = true;
    }
  }
  if (verify === true) {
    if (input.value === correctCharacter.name) {
      alert(`${total_wrong} kerede doğru bildin!`);
      reset_Game()
    } else {
      total_wrong++;
      input.value = "";
      nextEmoji();

    }
  }
}

function nextEmoji(){
if (total_wrong ===2 ){
  emoji2.innerHTML = correctCharacter.emojis[1];
}
else if (total_wrong ===3){
  emoji3.innerHTML = correctCharacter.emojis[2];
}
}

function  reset_Game(){
  total_wrong = 1;
  input.value = "";
  correctCharacter =  marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];
  emoji1.innerHTML = correctCharacter.emojis[0]
  emoji2.innerHTML = "❓"
  emoji3.innerHTML ="❓"
}
