function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)

  let numberInLine = katzDeliLine.length

  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(katzDeliLine) {
  let firstPerson = ''

  // checks that the line is empty
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }

  // removes first person from line
  // firstPerson = katzDeliLine.splice(0,1)[0]
  firstPerson = katzDeliLine.shift()

  return `Currently serving ${firstPerson}.`
}

function currentLine(katzDeliLine){

  if(katzDeliLine.length === 0){
    return "The line is currently empty." // implied else
  }

  let status = "The line is currently:"
  for (let i = 0; i < katzDeliLine.length; i++){
    let current = katzDeliLine[i]
    let position = i + 1

    // BEGIN OPTION 1
    // if (i === katzDeliLine.length - 1) {
    //   status += ` ${position}. ${current}`
    // } else {
    //   status += ` ${position}. ${current},`
    // }
    // END OF OPTION 1

    // BEGIN OPTION 2
    let formatted = ` ${position}. ${current}`
    // if we are not in the last element, add a comma
    if (i !== katzDeliLine.length-1) {
      formatted += ","
    }
    status += formatted
    // END OF OPTION 2
  }

  return status
}

describe('deli', () => {
  describe('takeANumber', () => {
    var katzDeli;
    var otherDeli;

    beforeEach(() => {
      katzDeli = [];
      otherDeli = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
      expect(katzDeli).toEqual(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
      expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      takeANumber(katzDeli, 'Ada');
      takeANumber(katzDeli, 'Grace');
      takeANumber(katzDeli, 'Kent');

      expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
    });
  });

  describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
