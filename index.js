//Declare the variable so that it exists for all scopes.
//Used javascript to declare the variable as a void array.
var katzDeli = [];

//Let's have them take a number...

/*function takeANumber (katzDeliLine, pushName) {
  //katzDeliLine was given; pushName is a reference to remembering push v. unshift
  return katzDeliLine.length + 1;
  //So if the line is x guys in front of you... the array has that many elements, and you're the next element...
  //e.g. there are 552 people ahead; katzDeliLine.length = 552; this makes me no. 553.
  //why do we need the newcomer's name??...*/

//INSTRUCTIONS WERE COMPLETE UNCLEAR ... following new instructions provided by error text

var katzDeliQueue=[]
var i=0;

function takeANumberOnly (katzDeliLine) {
  katzDeliLine[i] = i+1;
  i++;
  return i;


}


function takeANumber (katzDeliLine, newName){


  katzDeliLine.push(newName); //this should do the appending
  //katzDeliLine[katzDeliLine.length-1].number
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`
  //So... originally I had ${newName}, but let's see what this galaxy-class starship can do
}

//The serving function doesn't seem like it'll need a parameter, since it operates automagically on element zero. ... MASSEFFECTMINDBLOWN
//Oh wait. The instructions were again unclear. Checked the test and it does expect a parameter...
function nowServing(katzDeliLine) {

//We have the one special case where no one's on line. Having a 0 length should identify that condition.
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  //we can stick everything else into else because we're cool like that; there are no further conditions
} else {
   /*nothing special since we don't need anything but the first person.
    If we wanted to make more fancy, we could add a parameter that would be the xth person in line and ${parameter -1} as the index.
    But we're not being fancy, as people, though normally oblivious, would notice if someone behind them were called to the front.*/

    //return katzDeliLine[0];   oh shit that terminates the function so we have to do something smarter

    var currentlyServed = katzDeliLine [0];
    // ^^ this preserves the first element
    katzDeliLine.shift();
    // ^^ chops off the array's head... after we took note of what the element was

    return `Currently serving ${currentlyServed}.`;

  }
}

//Looks like the instructions indicate a parameter, so we'll be able to do Carnegie Deli's line, too.
//I figure the test will input the katz deli line array... let's check... yep, it inputs its own array
function currentLine(lineArray){

  var returnsArray = []; //we gonna need this later; named because it'll be used to return an array
  //var spreaderArray = []; // we'll need this too... //no we won't
  var numberingArray = []; //there has to be a simpler way to do this...

  //this should satisfy the empty line condition...
  if (lineArray.length === 0)  {
    return "The line is currently empty."
  } /*else {
    //we need to assign numbers to each of the outputs. can do an array of strings and add #'s. gonna loop it. Will start with 1 instead of 0 for simplicity--
    for (var i = 1; i <= lineArray.length; i++){
      spreaderArray[i-1] = `The line is currently: ${i}. ${lineArray[i-1]}`
    }
    // yeah that should do it... element 4 would be like "the line is currently: 3. Whatsitsname, the 3rd element in the thing"
    return returnsArray;
  } */ //Actually we may not have needed that at all.
  returnsArray[0] = `1. ${lineArray[0]}`
  /* I was having a devil of a time getting it to print properly. Also, WTF it just spreads the array without instruction?
    So if I didn't specify this first element, I'd get the erroroneous output
    "The line is currently 1. Whoever2. Whoever 3.Whoever" and was unable to correct it; moving a space would get
    "The line is currently:  1. Whoever 2. Whoever (see the extra space?)"
    Since it wasn't possible to get it right, as the first element's border is inherently different from the rest, as the comma is in the spread and not the string...
    I found that specifically specifying the first element was the simplest way to bypass this problem.*/ //Aside from the i win button...
  for (var i = 1; i < lineArray.length; i++) {
    returnsArray[i] = ` ${i+1}. ${lineArray[i]}`;
    //numberingArray[i] = `${i+1}.`
  }
  return `The line is currently: ${returnsArray}`;
}
