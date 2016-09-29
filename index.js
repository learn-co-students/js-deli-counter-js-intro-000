
function takeANumber(katzDeliLine,katzDeli){

for ( var i = katzDeli.length ;  katzDeli.length < i ; i++){
katzDeliLine.push(katzDeli)
}
return `Welcome, ${katzDeli}. You are number ${katzDeli.length} in line.`
}
