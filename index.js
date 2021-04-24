function takeANumber(n, name) {
 var katzDeliLine = [];

 for (let i = 0; i < name.length; i++) {
  katzDeliLine.push(`Welcome, ${name[i]}. You are number ${n} in line.`)
}
return katzDeliLine
}
