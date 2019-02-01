function takeANumber(line, name){
  line.push(name)
  let number_in_line = line.indexOf(name) +1;
  return `Welcome, ${name}. You are number ${number_in_line} in line.`;

}

function nowServing(katzDeli){
  let num =0 ;
  if (num < katzDeli.length) {
    return "Currently serving " + katzDeli.shift() + ".";
    num++;

  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    let message = "The line is currently:";
    let people_in_line = [];
    for (var i = 0; i < line.length; i++) {
      let person_in_line = ` ${i + 1}. ${line[i]}`;
      people_in_line.push(person_in_line);
    }
    return message + people_in_line;

  } else
  return "The line is currently empty."

}
