let image1;
let startKnop;
let volgendeKnop;
let schermStatus = 'start';
let feedbackTekst = '';

let optieKnoppen = [];
let huidigeVraag = 0;

let quizData = [
  {
    vraag: 'Vraag 1: Wie was de eerste president van de Verenigde Staten?',
    opties: ['A) George Washington', 'B) Abraham Lincoln', 'C) Thomas Jefferson'],
    correct: 0,
    uitleg: ['Washington was de 1e president.', 'Lincoln was de 16e president.', 'Jefferson was de 3e president.']
  },
  {
    vraag: 'Vraag 2: In welk jaar begon de Tweede Wereldoorlog?',
    opties: ['A) 1939', 'B) 1945', 'C) 1940'],
    correct: 0,
    uitleg: ['Het antwoord is 1939!', 'Het antwoord was 1939 (1945 was het einde).', 'Het antwoord was 1939.']
  },
  {
    vraag: 'Vraag 3: In welk jaar ontdekte Columbus Amerika?',
    opties: ['A) 1492', 'B) 1500', 'C) 1453'],
    correct: 0,
    uitleg: ['Klopt! Columbus bereikte Amerika in 1492.', 'Fout, het was 1492.', 'Fout, het was 1492.']
  },
  {
    vraag: 'Vraag 4: Wanneer is de Verenigde Naties (VN) opgericht?',
    opties: ['A) 1918', 'B) 1945', 'C) 1950'],
    correct: 1,
    uitleg: ['Fout, de VN werd in 1945 opgericht.', 'Goed! De VN is opgericht in 1945 na WOII.', 'Fout, het was 1945.']
  },
  {
    vraag: 'Vraag 5: Wat was qua landoppervlakte het grootste rijk ooit?',
    opties: ['A) Romeinse Rijk', 'B) Mongoolse Rijk', 'C) Britse Rijk'],
    correct: 2,
    uitleg: ['Fout, het Britse Rijk was groter.', 'Fout, het Mongoolse Rijk was 2e.', 'Correct! Het Britse Rijk besloeg het meeste land.']
  },
  {
    vraag: 'Vraag 6: Van welk rijk was Julius Caesar de leider?',
    opties: ['A) Romeinse Rijk', 'B) Griekse Rijk', 'C) Perzische Rijk'],
    correct: 0,
    uitleg: ['Goed! Caesar was de bekende Romeinse leider.', 'Fout, hij leidde het Romeinse Rijk.', 'Fout, het Romeinse Rijk.']
  },
  {
    vraag: 'Vraag 7: Hoeveel joodse slachtoffers vielen er tijdens de Holocaust?',
    opties: ['A) Ca. 1 miljoen', 'B) Ca. 6 miljoen', 'C) Ca. 10 miljoen'],
    correct: 1,
    uitleg: ['Fout, het waren er ongeveer 6 miljoen.', 'Correct. Ongeveer 6 miljoen Joden werden vermoord.', 'Fout, de schatting staat op 6 miljoen.']
  },
  {
    vraag: 'Vraag 8: Bij welke bekende slag werd Napoleon definitief verslagen?',
    opties: ['A) Slag bij Waterloo', 'B) Slag bij Leipzig', 'C) Slag bij Borodino'],
    correct: 0,
    uitleg: ['Goed gedaan! In 1815 werd hij bij Waterloo verslagen.', 'Fout, Waterloo was de genadeslag in 1815.', 'Fout, de Slag bij Waterloo was de laatste.']
  },
  {
    vraag: 'Vraag 9: Welke oude beschaving bouwde de piramides van Gizeh?',
    opties: ['A) De Maya\'s', 'B) De Oude Egyptenaren', 'C) De Romeinen'],
    correct: 1,
    uitleg: ['Fout, de Maya\'s bouwden wel piramides maar niet in Gizeh.', 'Uitstekend! De Oude Egyptenaren bouwden ze.', 'Fout, het waren de Egyptenaren.']
  },
  {
    vraag: 'Vraag 10: In welk jaar viel de Berlijnse Muur?',
    opties: ['A) 1989', 'B) 1991', 'C) 1975'],
    correct: 0,
    uitleg: ['Helemaal goed! Op 9 november 1989 viel de muur.', 'Fout, 1991 was het einde van de Sovjet-Unie. Het was 1989.', 'Fout, de muur viel in 1989.']
  }
];

function preload() {
  image1 = loadImage('achtergrond quizz.webp');
}

function setup() {
  createCanvas(800, 600);

  startKnop = createButton('Start Quiz');
  startKnop.position(340, 480);
  startKnop.size(120, 90);
  startKnop.mousePressed(startQuiz);

  volgendeKnop = createButton('Volgende Vraag ->');
  volgendeKnop.position(550, 480);
  volgendeKnop.size(180, 50);
  volgendeKnop.mousePressed(volgendeVraag);
  volgendeKnop.hide();

  for (let i = 0; i < 3; i = i + 1) {
    let knop = createButton('');
    knop.position(150, 260 + (i * 70));
    knop.size(500, 50);
    knop.hide();
    knop.mousePressed(function() { verwerkAntwoord(i); });
    optieKnoppen.push(knop);
  }
}

function startQuiz() {
  schermStatus = 'quiz';
  huidigeVraag = 0;
  startKnop.hide();
  toonVraag();
}

function toonVraag() {
  feedbackTekst = '';
  volgendeKnop.hide();
  
  let vraagData = quizData[huidigeVraag];
  for (let i = 0; i < optieKnoppen.length; i = i + 1) {
    optieKnoppen[i].html(vraagData.opties[i]);
    optieKnoppen[i].removeAttribute('disabled');
    optieKnoppen[i].show();
  }
}

function verwerkAntwoord(gekozenIndex) {
  let vraagData = quizData[huidigeVraag];
  
  if (gekozenIndex === vraagData.correct) {
    feedbackTekst = 'Goed gedaan! ' + vraagData.uitleg[gekozenIndex];
  } else {
    feedbackTekst = 'Helaas fout! ' + vraagData.uitleg[gekozenIndex];
  }

  for (let i = 0; i < optieKnoppen.length; i = i + 1) {
    optieKnoppen[i].attribute('disabled', '');
  }

  volgendeKnop.show();
}

function volgendeVraag() {
  huidigeVraag = huidigeVraag + 1;
  if (huidigeVraag < quizData.length) {
    toonVraag();
  } else {
    schermStatus = 'einde';
    volgendeKnop.hide();
    for (let i = 0; i < optieKnoppen.length; i = i + 1) {
      optieKnoppen[i].hide();
    }
  }
}

function draw() {
  background(image1);

  if (schermStatus === 'start') {
    fill('white');
    rect(150, 150, 500, 100, 30);
    fill('black');
    textSize(30);
    text('WERELDGESCHIEDENIS QUIZ', 175, 210);
  } 
  else if (schermStatus === 'quiz') {
    fill('white');
    rect(100, 100, 600, 120, 20);
    fill('black');
    textSize(18);
    text(quizData[huidigeVraag].vraag, 120, 160);

    if (feedbackTekst !== '') {
      fill('white');
      rect(100, 480, 420, 50, 15);
      fill('black');
      textSize(14);
      text(feedbackTekst, 110, 510);
    }
  }
  else if (schermStatus === 'einde') {
    fill('white');
    rect(150, 200, 500, 150, 30);
    fill('black');
    textSize(28);
    text('Gefeliciteerd!', 310, 260);
    textSize(20);
    text('Je hebt de quiz helemaal afgerond.', 230, 300);
  }
}