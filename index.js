
/*Deli Counter
04/02/20
Corey Lynch*/


//----------------------------------------------------------------------------->

//SCOPE

//katzDeli = []
// takeANumber(katzDeli, 'Ada');
// takeANumber(katzDeli, 'Grace');
// takeANumber(katzDeli, 'Kent');

// expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);

function takeANumber(line, name) {
  var counter = 0;

  // adds to array.
  // starts loop condition.
  line.push(name);
  // updates katzDeli object outside of block.
  while (line.length > counter) {
    counter += 1; //while not need
    // displays details and length of katzDeli object
    return `Welcome, ${name}. You are number ${line.length} in line.`
  }
}


//----------------------------------------------------------------------------->

//SCOPE

// conditional ? statement if true : statement if false
// deliLine = ["Steven", "Blake", "Avi"]
// expect(deliLine).toEqual(["Blake", "Avi"]);

function nowServing(array) {
  // setup blank array condition first.
  return array.length < 1
    ? "There is nobody waiting to be served!"
    : `Currently serving ${array.shift()}.`;
    // shift(); returns the shifted value!!!!!!!!
}

//ternary
//----------------------------------------------------------------------------->

//SCOPE

// expect(currentLine(["Bill", "Jane", "Ann"])).
// toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");});

function currentLine(array) {
  var arr = [];
  var str = 'The line is currently: '
  // setup blank array condition first.
  if (array.length < 1) {
    return "The line is currently empty.";

  } else {
    // add sentence structure to each 'currentLine' array element
    // pushes each adjusted 'currentLine' array element into blank array 'arr'
    for (let i = 0; i < array.length; i++){
      arr.push((i + 1) + '.' + ' ' + array[i]);
    }
    // .toString() has improper delimiter.
    // .join() takes in delimiter as argument.
    return `${str}${arr.join(', ')}`;
  }
}


//----------------------------------------------------------------------------->
