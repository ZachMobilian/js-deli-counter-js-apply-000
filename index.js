
function takeANumber(katzDeli, name){
  if (katzDeli.length >0){
    katzDeli.push(name)
  }
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length+1 + ' in line.'
}
