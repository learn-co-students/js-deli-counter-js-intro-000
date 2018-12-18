function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}


function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {

    return 'There is nobody waiting to be served!'
  }

    return `Currently serving ${katzDeliLine.shift()}.`
};


function currentLine(line) {
  if (!line.length) {

    return 'The line is currently empty.'
}
  let list = 'The line is currently: '

    for (let i = 0, l = line.length; i < l; i++) {
      if (i === l - 1) {
        list = list + `${i + 1}. ${line[i]}`
      } else {
        list = list + `${i + 1}. ${line[i]}, `
      }
//      numberName.push(`${i + 1}. ${line[i]}`)
  }
    return list
}

    // return
    //   (`The line is curretly ${line}. ${name}`)
    // }


//     for(let i = 0, n = name.length; i < n; i++) {
//       welcome.push(`Welcome, ${name}. You are number ${position} in line.`)
//     }
//
//   return welcome
// }
//
// function takeANumber(name, number) {
//   const welcome = []
//
//   let i = 0
//   while (i < greet.length) {
//     welcome.push(`Welcome, ${name}. You are number ${number} in line.`)
//     number++
//   }
//
//   return welcome
// }
