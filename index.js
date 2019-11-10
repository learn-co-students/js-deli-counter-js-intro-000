function takeANumber(curline,nam){
  curline.push(nam);

  return `Welcome, ${nam}. You are number ${curline.indexOf(nam) + 1} in line.`
}
function nowServing(line){
  if(line[0] === undefined){
    return 'There is nobody waiting to be served!';
  }
  return 'Currently serving ' + line.shift() + '.';
}
function currentLine(array){
  if (array[0] === undefined ){
    return 'The line is currently empty.';
  }
  let i = 0;
  while(i < array.length){
    array[i] =  (i + 1)  + '. ' + array[i];
    i++;
  }
let a = array.join(', ');
return 'The line is currently: ' + a;


}
