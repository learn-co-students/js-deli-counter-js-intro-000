//Build a function that a new customer will use when entering the deli.
//The function, takeANumber, should accept two parameters: the current
//line of people, along with the new person's name. The function should
//return a welcome message including the new person's position in line,
//such as "Welcome, Ada. You are number 1 in line.". And don't go being
//too programmer-y and give them their index. These are normal people.
//If they are 7th in line, tell them that. Don't get their hopes up by
//telling them they are number 6 in line.

//1) adds a person to the line
//2) appends the person the end of the line if there are already people on it
//3) properly handles multiple people being added

function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
};

//Build a function nowServing. This function should accept the current line
//of people (katzDeliLine) and return the first person in line and then remove
//that individual from the line. If there is nobody in line, it should return
//"There is nobody waiting to be served!"

//1) returns the line is empty when no one is on line
//2) returns an announcement about the person it is serving, and shifts the line

function nowServing(currentLine){
  var name = currentLine.shift();
  var str = ``;

  if(currentLine.length === 0){
    str = `There is nobody waiting to be served!`
  } else{
    str = `Currently serving ${name}.`
  }

  return str;
};


//"The line is currently: 1. Grace, 2. Kent, 3. Matz"

//Build a function currentLine that accepts the current line of people and
//returns the current line as a string; for example, if 'katzDeliLine' is
//currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line
//is currently: 1. Ada, 2. Grace". You don't have to use katzDeliLine as a
//variable or parameter name in your function though, it's just an example of a
//variable that might be passed to it. If there is nobody in line, it should
//return "The line is currently empty."

//1) returns "The line is currently empty." if no one is in line
//2) says who is in line when there are people waiting

function currentLine(cLine){
  var str = ``;
  var people = [];

  if(cLine.length === 0){
    return `The line is currently empty.`;
  } else{

    for(var int = 0; int <cLine.length; int++){
      people.push(`${int + 1}. ${cLine[int]}`);
  	};
  }

  //the join method helps convert an array into a string with whatever separator
  //is chosen.
  return `The line is currently: ${people.join(`, `)}`;
};
