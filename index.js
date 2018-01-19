var katzDeli = [];

function takeANumber(katzDeli, name) {
//  let getLength = katzDeli.length +1;
  katzDeli.push(`${name}`);
//  console.log(katzDeli);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
//  console.log(tempShoutOut);
//  return tempShoutOut;
}

// function takeANumber(katzDeli, name) {
//      katzDeli.push(`${name}`);
//      katzDeli.push(`${name}`);
//  tempShoutOut = `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
//        return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
//  }

function nowServing(line) {
   if (line.length ===0) {
    return('There is nobody waiting to be served!');
  } else {
    // tempAllLineShoutOut = `Currently Serving ${katzDeli[0]}.`;
    // katzDeli.shift();
    // return tempAllLineShoutOut;
     return `Currently serving ${line.shift()}.`
  }
}

// function currentLine(katzDeli) {
//   if (katzDeli.length ===0) {
//     return('The line is currently empty.');
//   } else {
//     tempAllLineShoutOut = `The line is currently:`;
//     for (let i = 0; i<katzDeli.length; i++) {
//       tempAllLineShoutOut = tempAllLineShoutOut +  `, ${i+1}. ${katzDeli[i]}`;
//     }
//     return (tempAllLineShoutOut);
//   }
// }

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
