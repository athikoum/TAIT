/*
 * @name Words
 * @description The text() function is used for writing words to the screen.
 * The words can be aligned left, center, or right with the textAlign()
 * function, and like with shapes, words can be colored with fill().
 */
let font,
  fontsize = 20;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('data/SourceSansPro-Regular.otf');
  strokeWeight(0);
textSize(12);
textStyle(NORMAL);
text('Font Style Normal', 10, 15);
textStyle(ITALIC);
text('Font Style Italic', 10, 40);
textStyle(BOLD);
text('Font Style Bold', 10, 65);
textStyle(BOLDITALIC);
text('Font Style Bold Italic', 10, 90);
}

function setup() {
  createCanvas(1536,2000);
  img01 = loadImage('data/TAI.png');
  img02= loadImage('data/01.JPG');
  img04= loadImage('data/02.JPG');
  img05= loadImage('data/03.JPG');
  img06= loadImage('data/04.JPG');

  // Set text characteristics
  textFont(font);
 // textSize(fontsize);
  //textWrap(WORD);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);

image(img01, 50,80,90,90);
image(img02, 1200,50,300,200);
image(img04, 1200,350,300,200);
image(img05, 1200,650,300,200);
image(img06, 1200,1000, 300,200);
  // Displays the image at point (0, height/2) at half size
  //image(img, 0, height / 2, img.width / 2, img.height / 2);


  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(LEFT);
  drawWords(width * 0.5);
}
  

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(10);
  //textWrap(WORD);
  textSize(30);
  textStyle(BOLD);
  text('Temporary Archaeological nstitute' ,50,50,1030);

  text ('Archaeo-fiction',50,200,1050);
  textSize(20);
  text('The Temporary Archaeological Institute (T.A.I.) might bear the word “archaeology” in its name, but it would be more accurate to say that it uses archaeology for philosophical purposes. T.A.I. does not associate itself with fringe archaeology practices, since it considers those activities unethical and scientifically not valid. Still, their methods are worthy of investigation, because they can reveal many things about truth formation. Moreover, it is very surprising how often un-scientific methods, or other processes similar to those of fringe archaeologists, are applied in formal archaeology, without ever being questioned. ',50,250,1060);
text ('T.A.I. takes fiction very seriously. It thinks of its methods as reversed (science) fiction. In the same way that science, or other kind of fictions might not be true, but they have many times manifested changes and revelations, T.A.I. tries to prevent and investigate fictional matters, that can work as inspiration for further scientific or other research.',50,400,1050);
  textSize(30);
  text('Collections', 50,500,1050);
  textSize(20);
  text('The permanent collections and temporary exhibitions of T.A.I. consist of objects, stories and documents that could simultaneously belong in the realm of history and the realm of fiction, stressing the boundaries between of those two. Just like the institution itself, those collections are outcasts that cannot place themselves under a certain label. T.A.I. tries to create literal or fictional spaces to house those desires, concepts and legacies.',50,550,1050);
textSize(30);
text('Ways of Functioning ',50, 680,1050);
textSize(20);
text('The non-conventionality of T.A.I.’s practices, prevents it from getting funding from most common donators. This is why it is Temporary: it does not have a specific location, and it is bound to the temporariness and deterritorialization of our times. Instead of being melancholic about it, T.A.I. embraces those peculiarities, mostly because it is aware that those are struggles that many others, not that controversial institutions have. Standing by the side of those who demand bigger funds for culture, T.A.I. tries to make use of its “misfortunes” with wit, humour, and playfulness. T.A.I. is proud to say for example, that not only the institute does not have its own space, but it has never managed to exhibit its collections in a museum context. It has found itself quite often welcome in art spaces, but is mostly happy for the times it has been hosted in tax offices, hair salons, flower stores, parks and bars. The space of exhibition changes a lot the synthesis of the audience, which has brought to T.A.I.’s collection very diverse groups of people.',50,730,1050);
text('It should also be taken into account that T.A.I. is a self-organized institute, meaning that all decisions are taken horizontally. Configuration is preferred over voting, and there is a council in which all members are equal. In case of collaboration with other institutions/individuals, T.A.I.  works in the same way internally and tries to keep the same procedures of deciding when involving the other parties, even if this means that it might take some more time to reach a conclusion. ',50,980,1050);
textSize(30);
text('History of T.A.I. ',50,1100,1050);
textSize(20);
text('T.A.I. was established in Alexandreia, in 2017 following the disappearance of V.H., a famous archaeologist from Alexandreia, who was found guilty of forgery after his disappearance. Following the revelations, which shocked the archaeological community, his findings, belonging in museums and private collections, fell on dispute. Then, many of the owners started selling them for quite low prices, since they were questioned as artifacts, and to restore their significance they would have to go through re-evaluation and carbon dating, a rather costly process, which was not sure if it would be beneficial. T.A.I. managed to get into its possession most of them. T.A.I. is not interested in proving their authenticity. It is interested in what made them believable as artifacts, and what made them not to be questioned, because this must be one of the reasons that every other artifact is nor questioned. This, when investigated, can show us what is needed for something to be true and authentic, and it proves that truth and authenticity is more of a convention than a factual matter.',50,1150,1050);
textSize(30);
text('V.H.’s collection ', 50,1400,1050);
textSize(20);
text('V.H.’s collection consists mostly of ceramic religious objects, such as medallions, votives and ampullae with relief and sculptural elements, belonging in the Gethsemanist tradition. Gethsemanism was a christian heresy which flourished in Alexandreia, in the 4th century A.D.. It over-toned the human side of Christ and his suffering. Usual themes that are depicted are the prayer in the Olive Mountain, the hanged prophet or symbols like the broken cross, pomegranates, doves, geese, and flower or geometrical decorative motives. Along with the artifacts, a few personal objects belonging to V.H. are showcased, with most interesting ones being his cyanotypes.', 50, 1450,1050);  
text('If you appreciate the uniquity of T.A.I., you can express it with a donation.',50, 1650,1050);}
