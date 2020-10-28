var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

function currentLine(people) {
  // if the element of people is equal to 0...
  if (people.length === 0) {
    // return this sentence.
    return "The line is currently empty.";
  } else {
    // if the element of people is more than 0...
    // declare string to base of return sentence (this string will not change).
    let sentenceStart = "The line is currently:"
    // iterate through array of people.
    for (let i = 0; i < people.length; i++) {
      // position of person
      let numberPosition = i + 1
      // name of person
      let name = people[i];
      // join string and newString.
      sentenceStart += ` ${numberPosition}. ${name},`;
    }
    return sentenceStart.slice(0, -1);
  }
}
