var katzDeli = [];
function takeANumber (katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing (katzDeli) {
  //return first person in line then remove them from the line
  //if no one is in line then it should say something else (use if/ else statment)
let i = 0;
    while (i < katzDeli.length) {
      i++;
    }
// still need a better understanding on the let , while and i++

      if (katzDeli.length === 0) {
    return  'There is nobody waiting to be served!';
  }
    else
    return (`Currently serving ${katzDeli.shift()}.`);
   }
   function currentLine (katzDeli) {
     let i = 0;
     let line = "The line is currently:"
     line  += (i + 1) + ". " + katzDeli[i] + ", "

       i++
     while (i < katzDeli.length) {
     }
     if (katzDeli.length === 0) {
   return  ('The line is currently empty.') ;
   }
   else
   return line ;
   }
