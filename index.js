// add solution here

function theBeatlesPlay(musicians, instruments) {
  var music = [];
  for (var i = 0; i < musicians.length; i++) {
    music.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return music;
}

function johnLennonFacts(facts) {
  var lennon = [];
  facts.forEach(function(fact) {
    lennon.push(fact + "!!!");
  });
  return lennon
}

function iLoveTheBeatles(number) {
  var beet = [];

  do {
    beet.push("I love the Beatles!")
    number ++;

  } while (number < 15)
  return beet;
}
