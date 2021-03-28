
function takeANumber(katzDeli, name){
let i = 1
while (i <= katzDeli.length) {
katzDeli.push(name)
  return `Welcome, ${name}. You are number ${i} in line.`
  i++
  }
}
// maybe I need a counter to give each name it's own index?  I thought they should index automatically but I'm not sure
// I think you would need a while loop, because you don't actually know how many they are going to add

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var firstInLine = katzDeliLine.shift()
    return "Currently serving " + firstInLine + "."

} else {
  return 'There is nobody waiting to be served!'
}
}
