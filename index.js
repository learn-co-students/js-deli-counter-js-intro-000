
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

  // creates object.
  // starts loop condition.
  line.push(name);
  // updates katzDeli object outside of block.
  while (line.length > counter) {
    counter += 1;
    // displays details and length of katzDeli object
    return `Welcome, ${name}. You are number ${line.length} in line.`
  }
}


//----------------------------------------------------------------------------->

//SCOPE

// deliLine = ["Steven", "Blake", "Avi"]
// expect(deliLine).toEqual(["Blake", "Avi"]);

function nowServing(array) {
  // setup blank array condition first.
  if (array.length < 1) {
    return "There is nobody waiting to be served!"

  } else {
    return `Currently serving ${array.shift()}.`;
    // shift(); returns the shifted value!!!!!!!!
  }
}


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
