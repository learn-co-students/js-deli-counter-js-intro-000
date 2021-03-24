
function takeANumber(array, person) {
  let i = array.length + 1;
  array.push(person);
  return `Welcome, ${person}. You are number ${i} in line.`;
  }

function nowServing(katzDeliLine) {
  let serving = katzDeliLine.shift();
  if (serving === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${serving}.`;
  }
}

function currentLine (line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
      let string = "The line is currently: "
      for (let i = 0; i < line.length; i++) {
        let order = i + 1;
        string += `${order}. ${line[i]}${i === line.length - 1 ? "" : ", "}`
        }
        return string;
      }
   }
