// add solution here

function theBeatlesPlay(musicians, instruments) {
  var kvas = [];
  for (var i = 0; i < musicians.length; i++){

    kvas.push(`${musicians[i]} plays ${instruments[i]}`);

  }
  return kvas;
}

function johnLennonFacts(facts) {
  var factsL = [];
  var n = 0;
  while (n < facts.length) {
    var kvas = facts[n] + "!!!";
    factsL.push(kvas);
    n++;
  }
  return factsL;
}

function iLoveTheBeatles(number) {
  var beet = [];

  do {
    number++;
    beet.push(`I love the Beatles!`);
  } while(number < 15);


  return beet;
}
