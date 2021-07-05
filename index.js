let katzDeliLine = [];

function takeANumber(lineOfPeople, newPersonsName) {
  let personsPlace = katzDeliLine.indexOf(newPersonsName) + 1;

  return `Welcome, ${newPersonsName}. You are number ${personsPlace} in line.`

}
