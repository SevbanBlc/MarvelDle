const marvelCharacters = [
  { name: "Iron Man", gender: "Erkek", team: "Avengers", type: "İnsan", kind: "Kahraman", power: "Teknoloji", age: 50, img: "../Img/Character/iron-man.png", birthPlace: "New York", popularity: 95 ,emojis:["🤖","🛠️", "💥"]},
  { name: "Captain America", gender: "Erkek", team: "Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Kalkan", age: 103, img: "../Img/Character/captain-america.png", birthPlace: "Brooklyn, New York", popularity: 90 , emojis: ["🛡️", "🇺🇸", "⚔️"]  },
  { name: "Thor", gender: "Erkek", team: "Avengers", type: "Tanrı", kind: "Kahraman", power: "Şimşek", age: 1500, img: "../Img/Character/thor.png", birthPlace: "Asgard", popularity: 85 , emojis: ["⚡", "🪓", "🧑‍⚕️"]},
  { name: "Hulk", gender: "Erkek", team: "Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Güç", age: 49, img: "../Img/Character/hulk.png", birthPlace: "Dayton, Ohio", popularity: 75, emojis: ["💪", "👹", "🧪"]  },
  { name: "Black Widow", gender: "Kadın", team: "Avengers", type: "İnsan", kind: "Kahraman", power: "Dövüş Becerileri", age: 34, img: "../Img/Character/black-widow.png", birthPlace: "Rusya", popularity: 80, emojis: ["🕷️", "🔪", "🕵️"]  },
  { name: "Spider-Man", gender: "Erkek", team: "Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Örümcek Gücü", age: 22, img: "../Img/Character/spider-man.png", birthPlace: "New York", popularity: 100, emojis: ["🕸️", "🕷️", "🤯"] },
  { name: "Doctor Strange", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Büyü", age: 45, img: "../Img/Character/doctor-strange.png", birthPlace: "New York", popularity: 80 , emojis: ["🔮", "🧙", "💫"]},
  { name: "Black Panther", gender: "Erkek", team: "Avengers", type: "İnsan", kind: "Kahraman", power: "Siyah Panter", age: 40, img: "../Img/Character/black-panther.png", birthPlace: "Wakanda", popularity: 85, emojis: ["🐾", "👑", "🖤"]  },
  { name: "Ant-Man", gender: "Erkek", team: "Avengers", type: "İnsan", kind: "Kahraman", power: "Ant-Man", age: 40, img: "../Img/Character/ant-man.png", birthPlace: "San Francisco", popularity: 70, emojis: ["🐜", "🔬", "👨‍🔬"] },
  { name: "Wasp", gender: "Kadın", team: "Avengers", type: "İnsan", kind: "Kahraman", power: "Wasp", age: 35, img: "../Img/Character/wasp.png", birthPlace: "San Francisco", popularity: 70 , emojis: ["🐝", "🔬", "💪"]},
  { name: "Scarlet Witch", gender: "Kadın", team: "Avengers", type: "İnsan", kind: "Kahraman", power: "Gerçeklik Bükme", age: 30, img: "../Img/Character/scarlet-witch.png", birthPlace: "Sokovia", popularity: 85 , emojis: ["🪄", "🔮", "💔"]},
  { name: "Vision", gender: "Erkek", team: "Avengers", type: "Sentetik", kind: "Kahraman", power: "Güç", age: 10, img: "../Img/Character/vision.png", birthPlace: "Avengers Tower", popularity: 75 , emojis: ["👁️", "🕶️", "🔴"]},
  { name: "Hawkeye", gender: "Erkek", team: "Avengers", type: "İnsan", kind: "Kahraman", power: "Okçuluk", age: 45, img: "../Img/Character/hawkeye.png", birthPlace: "Iowa", popularity: 70, emojis: ["🏹", "🎯", "👀"] },
  { name: "Star-Lord", gender: "Erkek", team: "Guardians of the Galaxy", type: "İnsan", kind: "Kahraman", power: "Yıldız Yürekli", age: 35, img: "../Img/Character/star-lord.png", birthPlace: "Missouri", popularity: 80 , emojis: ["🚀", "🎸", "🌌"] },
  { name: "Gamora", gender: "Kadın", team: "Guardians of the Galaxy", type: "Titan", kind: "Kahraman", power: "Savaşçı", age: 25, img: "../Img/Character/gamora.png", birthPlace: "Zen-Whoberi", popularity: 80 , emojis: ["👽", "🗡️", "🛡️"]},
  { name: "Drax", gender: "Erkek", team: "Guardians of the Galaxy", type: "İnsan", kind: "Kahraman", power: "Güç", age: 40, img: "../Img/Character/drax.png", birthPlace: "Kylos", popularity: 75, emojis: ["💪", "🚀", "👊"]  },
  { name: "Rocket Raccoon", gender: "Erkek", team: "Guardians of the Galaxy", type: "Hayvan", kind: "Kahraman", power: "Teknoloji", age: 5, img: "../Img/Character/rocket-raccoon.png", birthPlace: "Halfworld", popularity: 85 , emojis: ["🦝", "🔧", "🚀"]},
  { name: "Groot", gender: "Erkek", team: "Guardians of the Galaxy", type: "Ağaç", kind: "Kahraman", power: "Güç", age: 300, img: "../Img/Character/groot.png", birthPlace: "Xandar", popularity: 90 , emojis: ["🌳", "🌲", "💪"]},
  { name: "Wolverine", gender: "Erkek", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Kukla", age: 200, img: "../Img/Character/wolverine.png", birthPlace: "Kanada", popularity: 90 },
  { name: "Cyclops", gender: "Erkek", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Göz Işını", age: 40, img: "../Img/Character/cyclops.png", birthPlace: "Alabama", popularity: 80, emojis: ["🕶️", "👁️", "🔴"] },
  { name: "Storm", gender: "Kadın", team: "X-Men", type: "Mutant", kind: "Kahraman", power: "Hava Kontrolü", age: 30, img: "../Img/Character/storm.png", birthPlace: "Kenya", popularity: 85, emojis: ["⛈️", "🌩️", "🌪️"]  },
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
  { name: "Daredevil", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Senses", age: 35, img: "../Img/Character/daredevil.png", birthPlace: "New York", popularity: 75 },
    { name: "Luke Cage", gender: "Erkek", team: "Heroes for Hire", type: "Süper İnsan", kind: "Kahraman", power: "Güç", age: 40, img: "../Img/Character/luke-cage.png", birthPlace: "Harlem", popularity: 70 , emojis: ["💪", "🔒", "🛡️"] },
  { name: "Jessica Jones", gender: "Kadın", team: "Heroes for Hire", type: "Süper İnsan", kind: "Kahraman", power: "Güç", age: 35, img: "../Img/Character/jessica-jones.png", birthPlace: "New York", popularity: 75, emojis: ["🕵️", "🥊", "🚬"] },
  { name: "Iron Fist", gender: "Erkek", team: "Heroes for Hire", type: "Süper İnsan", kind: "Kahraman", power: "Demir Yumruk", age: 30, img: "../Img/Character/iron-fist.png", birthPlace: "K'un-Lun", popularity: 70 , emojis: ["👊", "🔥", "🧘"]},
  { name: "Moon Knight", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Güç ve Zeka", age: 35, img: "../Img/Character/moon-knight.png", birthPlace: "New York", popularity: 70, emojis: ["🌙", "🦸", "🔮"] },
  { name: "Ghost Rider", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Cehennem Ateşi", age: 40, img: "../Img/Character/ghost-rider.png", birthPlace: "Los Angeles", popularity: 75 , emojis: ["🔥", "💀", "🕷️"] },
  { name: "Blade", gender: "Erkek", team: "Solo", type: "İnsan", kind: "Kahraman", power: "Vampir Avcılığı", age: 40, img: "../Img/Character/blade.png", birthPlace: "London", popularity: 70, emojis: ["🗡️", "🌑", "🧛"] },
  { name: "Speed", gender: "Erkek", team: "Young Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Süper Hız", age: 20, img: "../Img/Character/speed.png", birthPlace: "Sokovia", popularity: 70 , emojis: ["⚡", "🏃", "🕒"]},
  { name: "Wiccan", gender: "Erkek", team: "Young Avengers", type: "Süper İnsan", kind: "Kahraman", power: "Büyü", age: 20, img: "../Img/Character/wiccan.png", birthPlace: "Sokovia", popularity: 75, emojis: ["🔮", "📜", "🌟"] },
  { name: "Spider-Woman (Jessica Drew)", gender: "Kadın", team: "Solo", type: "Süper İnsan", kind: "Kahraman", power: "Örümcek Gücü", age: 30, img: "../Img/Character/spider-woman.png", birthPlace: "London", popularity: 80 },
  { name: "Squirrel Girl", gender: "Kadın", team: "Solo", type: "Süper İnsan", kind: "Kahraman", power: "Sincap Gücü", age: 25, img: "../Img/Character/squirrel-girl.png", birthPlace: "New York", popularity: 75, emojis: ["🐿️", "😄", "🌰"] },
  { name: "Mantis", gender: "Kadın", team: "Guardians of the Galaxy", type: "Yarı Tanrı", kind: "Kahraman", power: "Duygu Kontrolü", age: 100, img: "../Img/Character/mantis.png", birthPlace: "Kree", popularity: 70, emojis: ["🌿", "🦋", "🧘"] },
  { name: "Nebula", gender: "Kadın", team: "Guardians of the Galaxy", type: "Süper İnsan", kind: "Kahraman", power: "Savaşçı", age: 30, img: "../Img/Character/nebula.png", birthPlace: "Zen-Whoberi", popularity: 75 },
  { name: "Dormammu", gender: "Erkek", team: "Kötüler", type: "Süper İnsan", kind: "Kötü", power: "Kozmik Güçler", age: 1000, img: "../Img/Character/dormammu.png", birthPlace: "Dark Dimension", popularity: 75 , emojis: ["🌌", "🔥", "👹"]},
  { name: "Mephisto", gender: "Erkek", team: "Kötüler", type: "Demon", kind: "Kötü", power: "Şeytani Güçler", age: 10000, img: "../Img/Character/mephisto.png", birthPlace: "Hell", popularity: 70, emojis: ["😈", "🔥", "🕷️"] },
  { name: "Kingpin", gender: "Erkek", team: "Kötüler", type: "İnsan", kind: "Kötü", power: "Suç Lordu", age: 55, img: "../Img/Character/kingpin.png", birthPlace: "New York", popularity: 75 , emojis: ["👑", "💼", "🚬"]},
  { name: "Red Skull", gender: "Erkek", team: "Hydra", type: "Süper İnsan", kind: "Kötü", power: "Güç", age: 70, img: "../Img/Character/red-skull.png", birthPlace: "Almanya", popularity: 80, emojis: ["🔴", "💀", "🪖"] },
  { name: "Baron Zemo", gender: "Erkek", team: "Hydra", type: "Süper İnsan", kind: "Kötü", power: "Strateji", age: 55, img: "../Img/Character/baron-zemo.png", birthPlace: "Sokovia", popularity: 75 },
  { name: "Yellowjacket", gender: "Erkek", team: "Kötüler", type: "Süper İnsan", kind: "Kötü", power: "Teknoloji", age: 50, img: "../Img/Character/yellowjacket.png", birthPlace: "New York", popularity: 70, emojis: ["🐝", "🔬", "⚔️"] },
  { name: "Ultron", gender: "Erkek", team: "Kötüler", type: "Yapay Zeka", kind: "Kötü", power: "Yapay Zeka", age: 5, img: "../Img/Character/ultron.png", birthPlace: "New York", popularity: 75, emojis: ["🤖", "⚙️", "💥"] },
  { name: "Ego", gender: "Erkek", team: "Kötüler", type: "Süper İnsan", kind: "Kötü", power: "Kozmik Enerji", age: 1000000, img: "../Img/Character/ego.png", birthPlace: "Solo", popularity: 70 , emojis: ["🌌", "🌀", "👑"]},
  { name: "Hela", gender: "Kadın", team: "Kötüler", type: "Tanrı", kind: "Kötü", power: "Ölüm", age: 10000, img: "../Img/Character/hela.png", birthPlace: "Asgard", popularity: 75 },
  {name: "Loki", gender: "Erkek", team: "Kötüler", type: "Tanrı", kind: "Kötü", power: "Sihir", age: 1000, img: "../Img/Character/loki.png", birthPlace: "Asgard", popularity: 85, emojis: ["🎭", "🧙", "🌀"]},
  {name: "Thanos", gender: "Erkek", team: "Yok", type: "Titan", kind: "Kötü", power: "Güç ve Zeka", age: 1000, img: "../Img/Character/thanos.png", birthPlace: "Titan", popularity: 90},
  {name: "Quicksilver", gender: "Erkek", team: "Avengers", type: "Mutant", kind: "Kahraman", power: "Süper Hız", age: 27, img: "../Img/Character/quicksilver.png", birthPlace: "Sokovia", popularity: 70, emojis: ["⚡", "🏃", "🌪️"] }
// eksik karakterler
  // falcon , winter solgier, odin, heimdall,venom
];


let correctCharacter = marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];
let previousGuesses = [];
let counter = 1;


function checkGuess() {
  const guessInput = document.getElementById('guess-input').value;
  const resultDiv = document.getElementById('result');
  const guessedCharacter = marvelCharacters.find(char => char.name.toLowerCase() === guessInput.toLowerCase());

  if (guessedCharacter) {
    previousGuesses.push(guessedCharacter);
    displayPreviousGuesses();

    let resultHTML = '<div class="result-grid">';

    resultHTML += createResultItem("İsim", guessedCharacter.name, correctCharacter.name,false,true);
    resultHTML += createResultItem("Cinsiyet", guessedCharacter.gender, correctCharacter.gender,false,false);
    resultHTML += createResultItem("Takım", guessedCharacter.team, correctCharacter.team,false,false);
    resultHTML += createResultItem("Tür", guessedCharacter.type, correctCharacter.type,false,false);
    resultHTML += createResultItem("Is", guessedCharacter.kind, correctCharacter.kind,false,false);
    resultHTML += createResultItem("Güç", guessedCharacter.power, correctCharacter.power,false,false);
    resultHTML += createResultItem("Yaş", guessedCharacter.age, correctCharacter.age, true,false);
    resultHTML += createResultItem("Dogum Yeri", guessedCharacter.birthPlace, correctCharacter.birthPlace,false,false);
    resultHTML += createResultItem("Populasyon", guessedCharacter.popularity, correctCharacter.popularity,true,false);


    resultHTML += '</div>';
    resultDiv.innerHTML = resultHTML;
    animateResults();

    if (guessedCharacter.name === correctCharacter.name) {
      setTimeout(() => {
        alert(`${counter} kerede bildin! Yeni bir karakter ile devam ediyorsunuz.`);
        correctCharacter = marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)];
        resultDiv.innerHTML = "";
        document.getElementById("guess-input").value = ""
        document.getElementById('guess-input').value = "";

        document.getElementById("previous-guesses-list").innerHTML = "";

        previousGuesses = [];

      }, 4500);

    }
    else {
      counter++;
      document.getElementById("guess-input").value = ""
    }
  }
}

function createResultItem(label, guess, correct, isAge = false  ,isName = false) {
  let isCorrect = guess === correct;
  let bgColor = isCorrect ? "green" : "red";
  let arrow = '';

  if (isAge && !isCorrect) {
    arrow = guess < correct ? '↑' : '↓';
  }

  if (isName === true)
  {
    bgColor = "grey";
  }
  return `
    <div class="result-item result-hidden" style="background-color: ${bgColor};">
      <div class="result-label">${label}</div>
      <div>${guess} ${arrow}</div>
    </div>
  `;
}

function animateResults() {
  const resultItems = document.querySelectorAll('.result-item');
  resultItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('result-hidden');
    }, index * 500);
  });
}

function displayPreviousGuesses() {
  const previousGuessesDiv = document.getElementById('previous-guesses-list');
  previousGuessesDiv.innerHTML = "";

  previousGuesses.forEach((guess, index) => {
    previousGuessesDiv.innerHTML += `<div class="guess-item">${index + 1}. ${guess.name}</div>`;
  });
}

