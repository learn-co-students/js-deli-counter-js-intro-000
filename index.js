function takeANumber(kartzdeliline,newperson){
  kartzdeliline.push(newperson)
  return `Welcome, ${newperson}. You are number ${kartzdeliline.length} in line.`

}
function nowServing(kartzdeliline){
  for(let i=0 ; i < kartzdeliline.length ; i++){

  }
  if (kartzdeliline.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${kartzdeliline.shift()}.`);
}
var line = []
function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
