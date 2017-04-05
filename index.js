var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  var i = 0;
  katzDeliLine.push(name);
  ++i;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;

}

function nowServing(katzDeliLine, name) {
var i = 0;
return katzDeliLine.length === 0 ?
"There is nobody waiting to be served!" :
`Currently serving ${katzDeliLine.shift(name)}.`;
}

//Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada 2. Grace". If there is nobody in line, it should return "The line is currently empty."
//function will loop through and create a new array every time a new person joins the line. Will return each person's place in line and their name.
//how do i access place in line (index) and person (value) at that index?
//while loop??
function currentLine(katzDeliLine) { // ['Bill', "Jane", "Ann", "Bob"]
 if (!katzDeliLine.length) {
  // ! stands for not (!false evaluates to true), 0 in an if condition evaluates to false
  return "The line is currently empty."
 } else {
   // we have a for loop. i is equal to 0. katzDeliLine[0] gives us 'Bill'(first loop), list number which is i + 1
   var anything = [];
   for (var i = 0; i < katzDeliLine.length; i++) {
     // '1. Bill'
     anything.push(`${i + 1}. ${katzDeliLine[i]}`)
   }
   // array.join('seperator') - joins the elements together in a string, when a sperator is used. It divides the element by the seperator.
   return `The line is currently: ${anything.join(', ')}`
 }
}
